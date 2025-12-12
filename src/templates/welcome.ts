/**
 * Welcome email HTML template
 * Sent to new subscribers immediately after signup
 */
export function getWelcomeEmailHTML(): string {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <title>Welcome to Niches Hunter</title>
  </head>
  <body style="margin: 0; padding: 0; background-color: #f5f5f7; font-family: -apple-system,BlinkMacSystemFont,'SF Pro Display','Segoe UI',Roboto,sans-serif">
    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f5f5f7; padding: 40px 16px">
      <tr>
        <td align="center">
          <!-- Main Container -->
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 560px">
            <!-- Logo Badge -->
            <tr>
              <td style="text-align: center; padding-bottom: 32px">
                <div style="display: inline-block; background: #111; padding: 10px 20px; border-radius: 100px">
                  <span style="font-size: 12px; font-weight: 700; color: #00FF88; letter-spacing: 2px">🎯 NICHES HUNTER</span>
                </div>
              </td>
            </tr>
            <!-- Main Card -->
            <tr>
              <td>
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 2px 40px rgba(0,0,0,0.08)">
                  <!-- Header -->
                  <tr>
                    <td style="padding: 48px 40px 32px; text-align: center">
                      <h1 style="margin: 0 0 12px; font-size: 36px; font-weight: 800; color: #111; letter-spacing: -1.5px; line-height: 1.1">You're in 🎉</h1>
                      <p style="margin: 0; font-size: 17px; color: #00CC6A; font-weight: 600">Welcome to the inner circle</p>
                    </td>
                  </tr>
                  <!-- Content -->
                  <tr>
                    <td style="padding: 0 40px 40px">
                      <!-- Intro -->
                      <p style="margin: 0 0 32px; font-size: 16px; line-height: 1.8; color: #444; text-align: center">Every day, see opportunities others will discover too late</p>
                      <!-- Stats Row -->
                      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 32px; background: #f8f9fa; border-radius: 16px; overflow: hidden">
                        <tr>
                          <td width="33%" style="text-align: center; padding: 24px 8px; border-right: 1px solid #eee">
                            <div style="font-size: 32px; font-weight: 800; color: #00CC6A; margin-bottom: 4px">3</div>
                            <div style="font-size: 11px; color: #888; text-transform: uppercase; letter-spacing: 1px; font-weight: 600">Apps/Day</div>
                          </td>
                          <td width="33%" style="text-align: center; padding: 24px 8px; border-right: 1px solid #eee">
                            <div style="font-size: 32px; font-weight: 800; color: #00CC6A; margin-bottom: 4px">2</div>
                            <div style="font-size: 11px; color: #888; text-transform: uppercase; letter-spacing: 1px; font-weight: 600">Niches</div>
                          </td>
                          <td width="33%" style="text-align: center; padding: 24px 8px">
                            <div style="font-size: 32px; font-weight: 800; color: #00CC6A; margin-bottom: 4px">∞</div>
                            <div style="font-size: 11px; color: #888; text-transform: uppercase; letter-spacing: 1px; font-weight: 600">Ideas</div>
                          </td>
                        </tr>
                      </table>
                      <!-- Features -->
                      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 32px">
                        <tr>
                          <td style="padding: 14px 16px; background: #f8f9fa; border-radius: 12px; margin-bottom: 8px">
                            <span style="font-size: 18px; margin-right: 12px">📈</span>
                            <span style="color: #111; font-size: 15px; font-weight: 600">Trending apps</span>
                            <span style="color: #888; font-size: 14px"> before Twitter talks about them</span>
                          </td>
                        </tr>
                        <tr><td style="height: 8px"></td></tr>
                        <tr>
                          <td style="padding: 14px 16px; background: #f8f9fa; border-radius: 12px">
                            <span style="font-size: 18px; margin-right: 12px">🌍</span>
                            <span style="color: #111; font-size: 15px; font-weight: 600">Market Gaps</span>
                            <span style="color: #888; font-size: 14px"> no one talks about</span>
                          </td>
                        </tr>
                        <tr><td style="height: 8px"></td></tr>
                        <tr>
                          <td style="padding: 14px 16px; background: #f8f9fa; border-radius: 12px">
                            <span style="font-size: 18px; margin-right: 12px">💎</span>
                            <span style="color: #111; font-size: 15px; font-weight: 600">Niche opportunities</span>
                            <span style="color: #888; font-size: 14px"> with low hype and real revenue</span>
                          </td>
                        </tr>
                        <tr><td style="height: 8px"></td></tr>
                        <tr>
                          <td style="padding: 14px 16px; background: #f8f9fa; border-radius: 12px">
                            <span style="font-size: 18px; margin-right: 12px">⚡</span>
                            <span style="color: #111; font-size: 15px; font-weight: 600">Action items</span>
                            <span style="color: #888; font-size: 14px"> no brainstorming just execution</span>
                          </td>
                        </tr>
                      </table>
                      <!-- CTA -->
                      <table border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                          <td style="background: #111; border-radius: 16px; padding: 28px; text-align: center">
                            <div style="font-size: 12px; color: #00FF88; font-weight: 700; letter-spacing: 1px; margin-bottom: 8px; text-transform: uppercase">⚡ Your first brief</div>
                            <div style="font-size: 20px; color: #fff; font-weight: 700">Arriving right now!</div>
                            <div style="font-size: 13px; color: #666; margin-top: 8px">Check your inbox in a few seconds</div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <!-- Tip -->
                  <tr>
                    <td style="padding: 0 40px 40px">
                      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background: #fffbeb; border-radius: 12px; border-left: 4px solid #f59e0b">
                        <tr>
                          <td style="padding: 14px 16px">
                            <span style="font-size: 14px; color: #92400e"><strong>💡</strong> Unlock +1000 Niches which print money</span>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <!-- Signature -->
                  <tr>
                    <td style="padding: 0 40px 40px; text-align: center">
                      <p style="margin: 0; font-size: 15px; color: #666">Happy hunting 🚀</p>
                      <p style="margin: 4px 0 0; font-size: 13px; color: #888">Niches Hunter</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <!-- Footer -->
            <tr>
              <td style="text-align: center; padding: 32px 16px">
                <a href="https://niches-hunter.vercel.app" style="color: #00CC6A; text-decoration: none; font-size: 13px; font-weight: 600">nicheshunter.app</a>
                <p style="margin: 12px 0 0; font-size: 11px; color: #999">You signed up for Niches Hunter. Smart move.</p>
                <p style="margin: 16px 0 0;">
                  <a href="https://nicheshunter.app/unsubscribe" style="color: #888; text-decoration: underline; font-size: 11px;">Unsubscribe</a>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
