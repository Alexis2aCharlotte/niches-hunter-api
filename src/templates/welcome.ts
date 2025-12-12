/**
 * Welcome email HTML template
 * Sent to new subscribers immediately after signup
 */
export function getWelcomeEmailHTML(): string {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="light dark">
  <meta name="supported-color-schemes" content="light dark">
  <style>
    :root {
      color-scheme: light dark;
    }
    @media (prefers-color-scheme: dark) {
      .email-body {
        background-color: #0A0A0A !important;
      }
      .email-container {
        background-color: #111111 !important;
        border-color: #00FF88 !important;
      }
      .text-dark {
        color: #ffffff !important;
      }
      .text-muted {
        color: #888888 !important;
      }
      .divider {
        border-color: #222222 !important;
      }
    }
  </style>
</head>
<body class="email-body" style="margin:0;padding:0;background-color:#f5f5f5;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f5f5f5;padding:40px 20px;">
    <tr>
      <td align="center">
        <table class="email-container" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;background-color:#ffffff;border:2px solid #00CC6A;border-radius:12px;overflow:hidden;">
          
          <!-- Header -->
          <tr>
            <td style="padding:40px 40px 30px;text-align:center;border-bottom:1px solid #eee;" class="divider">
              <div style="font-size:13px;color:#00CC6A;letter-spacing:3px;font-weight:600;margin-bottom:16px;">■ NICHES HUNTER</div>
              <h1 class="text-dark" style="margin:0;font-size:28px;font-weight:700;color:#1a1a1a;">Welcome aboard! 🎯</h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding:30px 40px;">
              <p class="text-dark" style="margin:0 0 20px;font-size:16px;line-height:1.6;color:#333;">Hey there,</p>
              
              <p class="text-dark" style="margin:0 0 24px;font-size:16px;line-height:1.6;color:#333;">
                You're officially a <strong style="color:#00CC6A;">Niche Hunter</strong>. Every day, you'll get intel that 99% of indie devs don't have access to.
              </p>
              
              <!-- What you get -->
              <div style="background:linear-gradient(135deg, rgba(0,204,106,0.08) 0%, rgba(0,204,106,0.02) 100%);border-left:4px solid #00CC6A;padding:20px;margin:0 0 24px;border-radius:0 8px 8px 0;">
                <div style="font-size:12px;color:#00CC6A;font-weight:600;letter-spacing:1px;margin-bottom:12px;">WHAT YOU'LL RECEIVE DAILY</div>
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                  <tr>
                    <td style="padding:6px 0;font-size:15px;" class="text-dark">
                      <span style="margin-right:10px;">📈</span> 5 trending iOS apps with rankings
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0;font-size:15px;" class="text-dark">
                      <span style="margin-right:10px;">🌍</span> US vs EU market comparison
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0;font-size:15px;" class="text-dark">
                      <span style="margin-right:10px;">💎</span> 2-3 niche opportunities with analysis
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0;font-size:15px;" class="text-dark">
                      <span style="margin-right:10px;">🎯</span> Actionable insights you can use today
                    </td>
                  </tr>
                </table>
              </div>
              
              <!-- CTA Box -->
              <div style="background:#0A0A0A;border-radius:8px;padding:24px;text-align:center;margin:0 0 24px;">
                <div style="font-size:14px;color:#00FF88;margin-bottom:8px;">⚡ YOUR FIRST BRIEF</div>
                <div style="font-size:20px;color:#fff;font-weight:600;">Arriving in your inbox now</div>
              </div>
              
              <p class="text-muted" style="margin:0 0 24px;font-size:14px;line-height:1.6;color:#666;">
                Check your inbox (and spam folder, just in case). If you have questions, just reply to this email — we read everything.
              </p>
              
              <p class="text-dark" style="margin:0;font-size:16px;line-height:1.6;color:#333;">
                Happy hunting! 🚀<br>
                <strong>— The Niches Hunter Team</strong>
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px;background:#fafafa;border-top:1px solid #eee;text-align:center;" class="divider">
              <p style="margin:0;font-size:12px;color:#999;">
                <a href="https://nicheshunter.app" style="color:#00CC6A;text-decoration:none;">nicheshunter.app</a>
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

