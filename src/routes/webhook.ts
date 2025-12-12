import { Router, Request, Response } from 'express';
import { sendWelcomeEmail, sendNewsletter } from '../services/email';
import { getLatestNewsletter, updateSubscriberEmailSentAt } from '../services/supabase';
import { notifyTelegram } from '../services/telegram';

export const webhookRouter = Router();

// Delay in seconds (from env or default 18)
const DELAY_SECONDS = parseInt(process.env.WELCOME_EMAIL_DELAY_SECONDS || '18', 10);

/**
 * POST /webhook/subscribe
 * Called by Supabase trigger when a new subscriber is added
 */
webhookRouter.post('/subscribe', async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    // Validate email
    if (!email || typeof email !== 'string') {
      return res.status(400).json({ 
        error: 'Email is required',
        received: req.body 
      });
    }

    console.log(`📧 New subscriber: ${email}`);

    // Respond immediately (don't make Supabase wait)
    res.status(200).json({ 
      success: true, 
      message: 'Subscription received, processing...' 
    });

    // Process in background
    processNewSubscriber(email).catch(err => {
      console.error(`❌ Error processing subscriber ${email}:`, err);
    });

  } catch (error) {
    console.error('❌ Webhook error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

/**
 * Process new subscriber in background
 */
async function processNewSubscriber(email: string): Promise<void> {
  try {
    // 1. Send welcome email
    console.log(`📨 Sending welcome email to ${email}...`);
    await sendWelcomeEmail(email);
    console.log(`✅ Welcome email sent to ${email}`);

    // 2. Wait before sending newsletter
    console.log(`⏳ Waiting ${DELAY_SECONDS} seconds...`);
    await delay(DELAY_SECONDS * 1000);

    // 3. Get latest newsletter
    console.log(`📰 Fetching latest newsletter...`);
    const newsletter = await getLatestNewsletter();
    
    if (newsletter) {
      // 4. Send newsletter
      console.log(`📨 Sending newsletter to ${email}...`);
      await sendNewsletter(email, newsletter.content, newsletter.title);
      console.log(`✅ Newsletter sent to ${email}`);

      // 5. Update subscriber record
      await updateSubscriberEmailSentAt(email);
      console.log(`✅ Subscriber record updated`);
    } else {
      console.log(`⚠️ No newsletter found, skipping...`);
    }

    // 6. Notify via Telegram (sans l'email pour la privacy)
    await notifyTelegram(`New subscriber added! ✅`);
    console.log(`✅ Telegram notification sent`);

  } catch (error) {
    console.error(`❌ Error in processNewSubscriber:`, error);
    // Still try to notify even if something failed
    await notifyTelegram(`⚠️ New subscriber - but there was an error in the flow`);
    throw error;
  }
}

/**
 * Simple delay helper
 */
function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

