#!/bin/bash

echo "🚀 Setting up Netlify for Karki Resume Portfolio..."

# Set environment variables
echo "📧 Setting up environment variables..."
netlify env:set EMAIL_USER "your-email@gmail.com"
netlify env:set EMAIL_PASS "your-app-password"
netlify env:set NODE_ENV "production"

echo "✅ Environment variables set!"

# Show current configuration
echo "📋 Current Netlify configuration:"
netlify status

echo "🎉 Setup complete! Your site is ready for deployment."
echo "📝 Next steps:"
echo "1. Update EMAIL_USER and EMAIL_PASS with your actual email credentials"
echo "2. Run: git add . && git commit -m 'Deploy to Netlify' && git push origin main"
echo "3. Your site will be automatically deployed!"