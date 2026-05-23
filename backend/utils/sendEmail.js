const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

/**
 * Send email notification
 * @param {Object} options - { to, subject, html }
 */
const sendEmail = async ({ to, subject, html }) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to,
      subject,
      html,
    })
  } catch (error) {
    console.error('Email send error:', error.message)
    // Don't throw — email failure shouldn't break the request
  }
}

const contactNotificationEmail = (contact) => `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #ffffff; padding: 30px; border-radius: 12px; border: 1px solid #D4AF37;">
    <div style="text-align: center; margin-bottom: 24px;">
      <h1 style="color: #D4AF37; font-size: 24px; margin: 0;">Prime Infratech</h1>
      <p style="color: #888; font-size: 12px; margin: 4px 0 0;">New Contact Form Submission</p>
    </div>
    <div style="background: #1a1a1a; border-radius: 8px; padding: 20px; margin-bottom: 16px;">
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="color: #888; padding: 6px 0; width: 120px;">Name:</td><td style="color: #fff;">${contact.name}</td></tr>
        <tr><td style="color: #888; padding: 6px 0;">Email:</td><td style="color: #fff;">${contact.email}</td></tr>
        <tr><td style="color: #888; padding: 6px 0;">Phone:</td><td style="color: #fff;">${contact.phone}</td></tr>
        <tr><td style="color: #888; padding: 6px 0;">Service:</td><td style="color: #D4AF37;">${contact.service || 'Not specified'}</td></tr>
      </table>
    </div>
    <div style="background: #1a1a1a; border-radius: 8px; padding: 20px;">
      <p style="color: #888; margin: 0 0 8px; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
      <p style="color: #fff; margin: 0; line-height: 1.6;">${contact.message}</p>
    </div>
    <p style="color: #555; font-size: 11px; text-align: center; margin-top: 20px;">
      Received on ${new Date().toLocaleString('en-IN')}
    </p>
  </div>
`

module.exports = { sendEmail, contactNotificationEmail }
