const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Trust proxy for rate limiting (required for Render)
app.set('trust proxy', 1);

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    const allowedOrigins = [
      'http://localhost:3000',
      'http://localhost:3001', 
      'http://localhost:5173',
      'https://sachyamkarki.github.io',
      'https://shakshamkarki.netlify.app',
      process.env.FRONTEND_URL
    ].filter(Boolean);
    
    // Check if origin is in allowed list or is a Netlify subdomain
    if (allowedOrigins.includes(origin) || origin.endsWith('.netlify.app')) {
      return callback(null, true);
    }
    
    return callback(new Error('Not allowed by CORS'));
  },
  credentials: true
}));
// Security middleware following OWASP guidelines
app.use(express.json({ limit: '10mb' })); // Prevent large payload attacks
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Rate limiting to prevent spam (following RFC standards)
const rateLimit = require('express-rate-limit');
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  message: {
    success: false,
    message: 'Too many contact form submissions, please try again later.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

app.use('/api/contact', contactLimiter);

const createTransporter = () => {

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    throw new Error('Email credentials not configured. Please set EMAIL_USER and EMAIL_PASS in your .env file');
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS  
    },
    // Simplified settings for maximum reliability
    connectionTimeout: 3000,  // 3 seconds
    greetingTimeout: 3000,    // 3 seconds
    socketTimeout: 3000,      // 3 seconds
    pool: false,              // Disable pooling
    secure: true,             // Use SSL
    ignoreTLS: false,
    requireTLS: true
  });
};

// Input sanitization function following OWASP guidelines
const sanitizeInput = (input) => {
  if (typeof input !== 'string') return '';
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .substring(0, 1000); // Limit length
};

app.post('/api/contact', async (req, res) => {
  // Sanitize and validate inputs following OWASP guidelines (moved outside try block)
  const { name, email, subject, message } = req.body;
  
  const sanitizedName = sanitizeInput(name);
  const sanitizedEmail = sanitizeInput(email);
  const sanitizedSubject = sanitizeInput(subject);
  const sanitizedMessage = sanitizeInput(message);

  try {
    console.log('Contact form request received:', { 
      origin: req.headers.origin,
      ip: req.ip,
      userAgent: req.get('User-Agent')
    });

    // Validate sanitized inputs
    if (!sanitizedName || !sanitizedEmail || !sanitizedSubject || !sanitizedMessage) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required and must not be empty'
      });
    }

    // Enhanced email validation following RFC 5322
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!emailRegex.test(sanitizedEmail)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    console.log('Creating email transporter...');
    const transporter = createTransporter();
    console.log('Email transporter created successfully');

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, 
      replyTo: sanitizedEmail, 
      subject: `Portfolio Contact: ${sanitizedSubject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>

          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #555; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${sanitizedName}</p>
            <p><strong>Email:</strong> ${sanitizedEmail}</p>
            <p><strong>Subject:</strong> ${sanitizedSubject}</p>
          </div>

          <div style="background: #fff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
            <h3 style="color: #555; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #333;">${sanitizedMessage.replace(/\n/g, '<br>')}</p>
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

        Name: ${sanitizedName}
        Email: ${sanitizedEmail}
        Subject: ${sanitizedSubject}

        Message:
        ${sanitizedMessage}

        ---
        This message was sent from your portfolio website contact form.
        You can reply directly to this email to respond to ${sanitizedName}.
      `
    };

    console.log('Sending main email...');
    
    // Add timeout for email sending (very aggressive for production)
    const sendEmailWithTimeout = (mailOptions, timeoutMs = 5000) => {
      return Promise.race([
        transporter.sendMail(mailOptions),
        new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Email sending timeout')), timeoutMs)
        )
      ]);
    };
    
    await sendEmailWithTimeout(mailOptions);
    console.log('Main email sent successfully');

    const confirmationMailOptions = {
      from: process.env.EMAIL_USER,
      to: sanitizedEmail,
      subject: 'Thank you for contacting Shaksham Karki',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            Thank You for Your Message!
          </h2>

          <p style="color: #555; line-height: 1.6;">
            Hi ${sanitizedName},
          </p>

          <p style="color: #555; line-height: 1.6;">
            Thank you for reaching out through my portfolio website. I have received your message regarding "${sanitizedSubject}" and will get back to you as soon as possible.
          </p>

          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #555; margin-top: 0;">Your Message Summary:</h3>
            <p><strong>Subject:</strong> ${sanitizedSubject}</p>
            <p><strong>Message:</strong> ${sanitizedMessage.substring(0, 100)}${sanitizedMessage.length > 100 ? '...' : ''}</p>
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

        Hi ${sanitizedName},

        Thank you for reaching out through my portfolio website. I have received your message regarding "${sanitizedSubject}" and will get back to you as soon as possible.

        Your Message Summary:
        Subject: ${sanitizedSubject}
        Message: ${sanitizedMessage.substring(0, 100)}${sanitizedMessage.length > 100 ? '...' : ''}

        I typically respond within 24 hours. If you have any urgent inquiries, feel free to reach out directly.

        Best regards,
        Shaksham Karki
        Mobile App Full-Stack Developer
      `
    };

    // Try to send confirmation email (optional - don't fail if this doesn't work)
    try {
      console.log('Sending confirmation email...');
      await sendEmailWithTimeout(confirmationMailOptions, 3000); // 3 second timeout
      console.log('Confirmation email sent successfully');
    } catch (confirmationError) {
      console.log('Confirmation email failed (non-critical):', confirmationError.message);
    }

    res.status(200).json({
      success: true,
      message: 'Message sent successfully!'
    });

  } catch (error) {
    console.error('Error sending email:', error);
    
    // Log the contact form data for manual follow-up
    console.log('CONTACT FORM DATA (Email failed):', {
      name: sanitizedName,
      email: sanitizedEmail,
      subject: sanitizedSubject,
      message: sanitizedMessage,
      timestamp: new Date().toISOString(),
      error: error.message
    });

    let errorMessage = 'Failed to send message. Please try again later.';

    if (error.message.includes('Email credentials not configured')) {
      errorMessage = 'Email service is not configured. Please contact the administrator.';
    } else if (error.message.includes('Invalid login')) {
      errorMessage = 'Email authentication failed. Please check email configuration.';
    } else if (error.message.includes('ENOTFOUND') || error.message.includes('ECONNREFUSED')) {
      errorMessage = 'Network error. Please check your internet connection.';
    } else if (error.message.includes('timeout')) {
      errorMessage = 'Email service is taking too long to respond. Please try again later.';
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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
});