import TelegramBot from 'node-telegram-bot-api';

// Initialize Telegram bot (polling disabled - we only send)
let bot: TelegramBot | null = null;

function getBot(): TelegramBot {
  if (!bot) {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    if (!token) {
      throw new Error('TELEGRAM_BOT_TOKEN is not set');
    }
    bot = new TelegramBot(token, { polling: false });
  }
  return bot;
}

const CHAT_ID = process.env.TELEGRAM_CHAT_ID || '1791080209';

/**
 * Send a notification message to Telegram
 */
export async function notifyTelegram(message: string): Promise<void> {
  try {
    const telegramBot = getBot();
    await telegramBot.sendMessage(CHAT_ID, message);
  } catch (error) {
    // Don't throw - Telegram notifications are not critical
    console.error('Failed to send Telegram notification:', error);
  }
}

/**
 * Send newsletter stats notification
 */
export async function notifyNewsletterSent(
  subscriberCount: number, 
  successCount: number,
  failedCount: number
): Promise<void> {
  const message = `📰 Newsletter Sent!
  
📊 Stats:
• Total subscribers: ${subscriberCount}
• Successfully sent: ${successCount}
• Failed: ${failedCount}

${failedCount > 0 ? '⚠️ Check logs for failed emails' : '✅ All emails sent successfully!'}`;

  await notifyTelegram(message);
}

