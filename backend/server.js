const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:3001', 
    'http://localhost:5173',
    'https://sachyamkarki.github.io',
    'https://shakshamkarki.netlify.app',
    'https://*.netlify.app',
    process.env.FRONTEND_URL
  ].filter(Boolean),
  credentials: true
}));
app.use(express.json());

const createTransporter = () => {

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    throw new Error('Email credentials not configured. Please set EMAIL_USER and EMAIL_PASS in your .env file');
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS  
    }
  });
};

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    const transporter = createTransporter();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, 
      replyTo: email, 
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>

          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #555; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>

          <div style="background: #fff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
            <h3 style="color: #555; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #333;">${message.replace(/\n/g, '<br>')}</p>
          </div>

          <div style="margin-top: 20px; padding: 15px; background: #e3f2fd; border-radius: 8px; border-left: 4px solid #3b82f6;">
            <p style="margin: 0; color: #1976d2; font-size: 14px;">
              <strong>Note:</strong> This message was sent from your portfolio website contact form.
              You can reply directly to this email to respond to ${name}.
            </p>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission

        Name: ${name}
        Email: ${email}
        Subject: ${subject}

        Message:
        ${message}

        ---
        This message was sent from your portfolio website contact form.
        You can reply directly to this email to respond to ${name}.
      `
    };

    await transporter.sendMail(mailOptions);

    const confirmationMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Shaksham Karki',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            Thank You for Your Message!
          </h2>

          <p style="color: #555; line-height: 1.6;">
            Hi ${name},
          </p>

          <p style="color: #555; line-height: 1.6;">
            Thank you for reaching out through my portfolio website. I have received your message regarding "${subject}" and will get back to you as soon as possible.
          </p>

          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #555; margin-top: 0;">Your Message Summary:</h3>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong> ${message.substring(0, 100)}${message.length > 100 ? '...' : ''}</p>
          </div>

          <p style="color: #555; line-height: 1.6;">
            I typically respond within 24 hours. If you have any urgent inquiries, feel free to reach out directly.
          </p>

          <div style="margin-top: 30px; padding: 20px; background: #e3f2fd; border-radius: 8px;">
            <p style="margin: 0; color: #1976d2;">
              <strong>Best regards,</strong><br>
              Shaksham Karki<br>
              Mobile App Full-Stack Developer
            </p>
          </div>
        </div>
      `,
      text: `
        Thank You for Your Message!

        Hi ${name},

        Thank you for reaching out through my portfolio website. I have received your message regarding "${subject}" and will get back to you as soon as possible.

        Your Message Summary:
        Subject: ${subject}
        Message: ${message.substring(0, 100)}${message.length > 100 ? '...' : ''}

        I typically respond within 24 hours. If you have any urgent inquiries, feel free to reach out directly.

        Best regards,
        Shaksham Karki
        Mobile App Full-Stack Developer
      `
    };

    await transporter.sendMail(confirmationMailOptions);

    res.status(200).json({
      success: true,
      message: 'Message sent successfully!'
    });

  } catch (error) {
    console.error('Error sending email:', error);

    let errorMessage = 'Failed to send message. Please try again later.';

    if (error.message.includes('Email credentials not configured')) {
      errorMessage = 'Email service is not configured. Please contact the administrator.';
    } else if (error.message.includes('Invalid login')) {
      errorMessage = 'Email authentication failed. Please check email configuration.';
    } else if (error.message.includes('ENOTFOUND') || error.message.includes('ECONNREFUSED')) {
      errorMessage = 'Network error. Please check your internet connection.';
    }

    res.status(500).json({
      success: false,
      message: errorMessage,
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
  console.log(`Network access: http://0.0.0.0:${PORT}/api/health`);
});
