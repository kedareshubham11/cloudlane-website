import { NextRequest, NextResponse } from "next/server";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const sesClient = new SESClient({
  region: process.env.AWS_REGION || "ap-south-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const toEmail = process.env.SES_TO_EMAIL;
    const fromEmail = process.env.SES_FROM_EMAIL;

    if (!toEmail || !fromEmail) {
      console.error("Missing SES email configuration");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const emailParams = {
      Source: fromEmail,
      Destination: {
        ToAddresses: [toEmail],
      },
      Message: {
        Subject: {
          Data: `New Contact Form Submission from ${name}`,
          Charset: "UTF-8",
        },
        Body: {
          Html: {
            Data: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f5f5f5;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        
        <!-- Logo Header -->
        <table role="presentation" width="600" cellspacing="0" cellpadding="0">
          <tr>
            <td align="center" style="padding-bottom: 24px;">
              <span style="font-size: 28px; font-weight: 600; color: #20B2AA; letter-spacing: -0.5px;">CloudLane</span>
            </td>
          </tr>
        </table>

        <!-- Main Content Card -->
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 8px;">
          <tr>
            <td style="padding: 40px;">
              
              <!-- Greeting -->
              <p style="margin: 0 0 24px; font-size: 16px; color: #333333; line-height: 1.6;">
                Hi Team,
              </p>
              
              <p style="margin: 0 0 24px; font-size: 16px; color: #333333; line-height: 1.6;">
                You have received a new inquiry from the CloudLane website contact form.
              </p>

              <!-- Contact Info -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 24px;">
                <tr>
                  <td style="padding: 16px 0; border-bottom: 1px solid #eeeeee;">
                    <p style="margin: 0 0 4px; font-size: 12px; color: #888888; text-transform: uppercase; letter-spacing: 0.5px;">From</p>
                    <p style="margin: 0; font-size: 16px; color: #333333; font-weight: 500;">${name}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 16px 0; border-bottom: 1px solid #eeeeee;">
                    <p style="margin: 0 0 4px; font-size: 12px; color: #888888; text-transform: uppercase; letter-spacing: 0.5px;">Email</p>
                    <p style="margin: 0;">
                      <a href="mailto:${email}" style="font-size: 16px; color: #20B2AA; text-decoration: none;">${email}</a>
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Message Section -->
              <p style="margin: 0 0 12px; font-size: 14px; color: #888888; font-weight: 500;">Message</p>
              <p style="margin: 0; font-size: 16px; color: #333333; line-height: 1.7; white-space: pre-wrap;">${message}</p>

            </td>
          </tr>
        </table>

        <!-- Footer -->
        <table role="presentation" width="600" cellspacing="0" cellpadding="0">
          <tr>
            <td align="center" style="padding: 24px;">
              <p style="margin: 0; font-size: 13px; color: #999999;">
                This email was sent from the CloudLane website contact form.
              </p>
            </td>
          </tr>
        </table>

      </td>
    </tr>
  </table>
</body>
</html>
            `,
            Charset: "UTF-8",
          },
          Text: {
            Data: `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n---\nSent from CloudLane Contact Form`,
            Charset: "UTF-8",
          },
        },
      },
      ReplyToAddresses: [email],
    };

    const command = new SendEmailCommand(emailParams);
    await sesClient.send(command);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
