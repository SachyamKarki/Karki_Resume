# Netlify Full-Stack Deployment Guide

This guide will help you deploy both your frontend and backend to Netlify using Netlify Functions.

## Prerequisites

1. A Netlify account
2. Your project connected to a Git repository (GitHub, GitLab, or Bitbucket)
3. Email credentials for the contact form

## Setup Steps

### 1. Environment Variables

In your Netlify dashboard, go to **Site settings > Environment variables** and add:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
NODE_ENV=production
```

**Important**: For Gmail, you need to use an App Password, not your regular password.

### 2. Build Settings

In your Netlify dashboard, go to **Site settings > Build & deploy > Build settings**:

- **Build command**: `cd frontend && npm install && npm run build`
- **Publish directory**: `frontend/dist`
- **Base directory**: Leave empty (root)

### 3. Deploy

1. Connect your repository to Netlify
2. Netlify will automatically detect the `netlify.toml` configuration
3. Deploy your site

## Local Development

### Option 1: Traditional Development (Frontend + Backend)

```bash
# Install all dependencies
npm run install:all

# Run both frontend and backend
npm run dev
```

- Frontend: http://localhost:5173
- Backend: http://localhost:5001

### Option 2: Netlify Development (Recommended)

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Install dependencies
npm run install:all

# Run with Netlify Functions
netlify dev
```

This will run your frontend and Netlify Functions locally, simulating the production environment.

## Project Structure

```
├── frontend/                 # React frontend
│   ├── src/
│   ├── package.json
│   └── vite.config.js
├── backend/                  # Express backend (for local dev)
│   ├── server.js
│   └── package.json
├── netlify/
│   └── functions/           # Netlify Functions
│       ├── contact.js       # Contact form handler
│       ├── health.js        # Health check
│       └── package.json
├── netlify.toml             # Netlify configuration
└── package.json             # Root package.json
```

## API Endpoints

When deployed to Netlify, your API endpoints will be:

- `https://your-site.netlify.app/api/contact` - Contact form submission
- `https://your-site.netlify.app/api/health` - Health check

## Features

### Contact Form
- Sends emails using Nodemailer
- Includes both HTML and text versions
- Sends confirmation email to sender
- Proper error handling and validation

### CORS Support
- Configured for cross-origin requests
- Supports preflight OPTIONS requests

### Security
- Environment variables for sensitive data
- Input validation and sanitization
- Proper error handling

## Troubleshooting

### Common Issues

1. **Email not sending**: Check your EMAIL_USER and EMAIL_PASS environment variables
2. **CORS errors**: Ensure your frontend is making requests to the correct API endpoints
3. **Build failures**: Check that all dependencies are properly installed

### Testing Locally

```bash
# Test the contact form
curl -X POST http://localhost:8888/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test Subject",
    "message": "This is a test message"
  }'

# Test health endpoint
curl http://localhost:8888/api/health
```

## Deployment Checklist

- [ ] Environment variables set in Netlify dashboard
- [ ] Build settings configured
- [ ] Repository connected to Netlify
- [ ] Contact form tested
- [ ] Health endpoint working
- [ ] Frontend builds successfully

## Benefits of This Setup

1. **Single Platform**: Both frontend and backend on Netlify
2. **Serverless**: No server management required
3. **Automatic Scaling**: Netlify handles traffic spikes
4. **Global CDN**: Fast loading times worldwide
5. **Easy Deployment**: Git-based deployments
6. **Cost Effective**: Generous free tier

## Migration from Separate Backend

If you were previously using a separate backend (like Render), this setup eliminates the need for:

- Separate backend hosting
- CORS configuration between domains
- Multiple deployment pipelines
- Additional costs for backend hosting

Your frontend code will automatically work with the new setup since the API endpoints remain the same (`/api/contact`, `/api/health`).
