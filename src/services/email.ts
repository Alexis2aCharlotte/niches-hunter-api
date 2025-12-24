import { Resend } from 'resend';
import { getWelcomeEmailHTML } from '../templates/welcome';

// Initialize Resend client (lazy loading to avoid crash on startup)
let resend: Resend | null = null;

function getResendClient(): Resend {
  if (!resend) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error('RESEND_API_KEY is not set in environment variables');
    }
    resend = new Resend(apiKey);
  }
  return resend;
}

const FROM_EMAIL = 'Niches Hunter <support@arianeconcept.fr>';

/**
 * Send welcome email to new subscriber
 */
export async function sendWelcomeEmail(toEmail: string): Promise<void> {
  const html = getWelcomeEmailHTML();

  const { error } = await getResendClient().emails.send({
    from: FROM_EMAIL,
    to: toEmail,
    subject: 'Welcome to Niches Hunter 🎯',
    html: html
  });

  if (error) {
    console.error('Error sending welcome email:', error);
    throw error;
  }
}

/**
 * Send newsletter to subscriber
 */
export async function sendNewsletter(
  toEmail: string, 
  htmlContent: string, 
  title?: string
): Promise<void> {
  const today = new Date().toISOString().split('T')[0];
  const subject = title 
    ? `${title}` 
    : `Niches Hunter - ${today}`;

  const { error } = await getResendClient().emails.send({
    from: FROM_EMAIL,
    to: toEmail,
    subject: subject,
    html: htmlContent
  });

  if (error) {
    console.error('Error sending newsletter:', error);
    throw error;
  }
}

/**
 * Send newsletter to multiple subscribers (batch)
 */
export async function sendNewsletterBatch(
  emails: string[], 
  htmlContent: string,
  title?: string
): Promise<{ success: number; failed: number }> {
  const today = new Date().toISOString().split('T')[0];
  const subject = title 
    ? `${title}` 
    : `Niches Hunter - ${today}`;

  let success = 0;
  let failed = 0;

  // Send in batches of 10 to avoid rate limits
  const batchSize = 10;
  for (let i = 0; i < emails.length; i += batchSize) {
    const batch = emails.slice(i, i + batchSize);
    
    const promises = batch.map(async (email) => {
      try {
        await getResendClient().emails.send({
          from: FROM_EMAIL,
          to: email,
          subject: subject,
          html: htmlContent
        });
        success++;
      } catch (err) {
        console.error(`Failed to send to ${email}:`, err);
        failed++;
      }
    });

    await Promise.all(promises);
    
    // Small delay between batches
    if (i + batchSize < emails.length) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  return { success, failed };
}
