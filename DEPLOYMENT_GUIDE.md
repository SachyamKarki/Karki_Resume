# 🚀 Netlify Full-Stack Deployment Guide

Your project has been successfully pushed to GitHub and is ready for deployment to Netlify!

## 📁 Project Structure

```
Karki_Resume/
├── frontend/                 # React frontend
│   ├── src/
│   ├── package.json
│   └── vite.config.js
├── backend/                  # Backend with Netlify Functions
│   ├── functions/           # Netlify Functions
│   │   ├── contact.js       # Contact form handler
│   │   ├── health.js        # Health check
│   │   └── package.json
│   ├── server.js            # Express server (for local dev)
│   ├── package.json
│   ├── env.example          # Environment variables template
│   └── NETLIFY_FULLSTACK_DEPLOYMENT.md
├── netlify.toml             # Netlify configuration
├── package.json             # Root package.json
└── .gitignore
```

## 🎯 Manual Deployment Steps

### Step 1: Create Netlify Site
1. Go to [netlify.com](https://netlify.com) and sign in
2. Click "New site from Git"
3. Choose "GitHub" and authorize Netlify
4. Select your repository: `SachyamKarki/Karki_Resume`

### Step 2: Configure Build Settings
Netlify should auto-detect these settings from `netlify.toml`, but verify:

- **Build command**: `cd frontend && npm install && npm run build`
- **Publish directory**: `frontend/dist`
- **Functions directory**: `backend/functions`

### Step 3: Set Environment Variables
In Netlify Dashboard → Site Settings → Environment Variables, add:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
NODE_ENV=production
```

**Important**: For Gmail, you need an App Password:
1. Enable 2-factor authentication on Gmail
2. Go to Google Account → Security → App passwords
3. Generate an app password for "Mail"
4. Use that password (not your regular password) for `EMAIL_PASS`

### Step 4: Deploy
1. Click "Deploy site"
2. Netlify will automatically build and deploy your site
3. Your site will be available at `https://your-site-name.netlify.app`

## 🔗 API Endpoints

Once deployed, your API will be available at:
- `https://your-site.netlify.app/api/contact` - Contact form submission
- `https://your-site.netlify.app/api/health` - Health check

## 🧪 Testing Your Deployment

### Test the Health Endpoint
```bash
curl https://your-site.netlify.app/api/health
```

Expected response:
```json
{
  "status": "OK",
  "message": "Netlify Functions are running",
  "timestamp": "2025-10-17T16:09:57.208Z"
}
```

### Test the Contact Form
1. Visit your deployed site
2. Fill out the contact form
3. Submit and check if you receive the email

## 🛠️ Local Development

### Option 1: Traditional Development
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

# Run with Netlify Functions
netlify dev --functions backend/functions
```
This simulates the production environment locally.

## 📋 Deployment Checklist

- [ ] Repository pushed to GitHub
- [ ] Netlify site created and connected to GitHub
- [ ] Build settings configured correctly
- [ ] Environment variables set (EMAIL_USER, EMAIL_PASS, NODE_ENV)
- [ ] Site deployed successfully
- [ ] Health endpoint working (`/api/health`)
- [ ] Contact form working and sending emails
- [ ] Frontend loading correctly

## 🎉 Benefits of This Setup

1. **Single Platform**: Both frontend and backend on Netlify
2. **No CORS Issues**: Frontend and backend on same domain
3. **Serverless**: No server management required
4. **Automatic Scaling**: Netlify handles traffic spikes
5. **Global CDN**: Fast loading times worldwide
6. **Easy Deployment**: Git-based deployments
7. **Cost Effective**: Generous free tier

## 🆘 Troubleshooting

### Common Issues

1. **Build Fails**: Check that all dependencies are in package.json
2. **Functions Not Working**: Verify functions are in `backend/functions/`
3. **Email Not Sending**: Check EMAIL_USER and EMAIL_PASS environment variables
4. **CORS Errors**: Ensure frontend is making requests to `/api/*` endpoints

### Getting Help

- Check Netlify build logs in the dashboard
- Verify environment variables are set correctly
- Test functions locally with `netlify dev`

## 🚀 Your Site is Ready!

Once deployed, you'll have a fully functional full-stack application running on Netlify with:
- ✅ React frontend
- ✅ Serverless backend functions
- ✅ Contact form with email functionality
- ✅ Global CDN and automatic scaling
- ✅ Easy git-based deployments

Happy coding! 🎉
