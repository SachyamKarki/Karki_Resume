# 🚀 Deployment Guide: Frontend (Netlify) + Backend (Render)

This guide will help you deploy your frontend to Netlify and backend to Render for a full-stack application.

## 📁 Project Structure

```
Karki_Resume/
├── frontend/                 # React frontend → Netlify
│   ├── src/
│   ├── package.json
│   └── vite.config.js
├── backend/                  # Express backend → Render
│   ├── server.js
│   ├── package.json
│   └── .env
└── netlify.toml             # Netlify configuration
```

## 🎯 Part 1: Deploy Backend to Render

### Step 1: Create Render Account
1. Go to [render.com](https://render.com)
2. Sign up with your GitHub account
3. Connect your GitHub repository

### Step 2: Create Web Service
1. Click "New +" → "Web Service"
2. Connect your repository: `SachyamKarki/Karki_Resume`
3. Configure the service:
   - **Name**: `karki-resume-backend`
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: `Free`

### Step 3: Set Environment Variables
In Render Dashboard → Environment Variables, add:
```
EMAIL_USER=sachyamkarki@gmail.com
EMAIL_PASS=jfnwgzjilipjojru
NODE_ENV=production
PORT=10000
FRONTEND_URL=https://your-netlify-site.netlify.app
```

### Step 4: Deploy
1. Click "Create Web Service"
2. Render will automatically build and deploy your backend
3. Your backend will be available at: `https://karki-resume-backend.onrender.com`

## 🌐 Part 2: Deploy Frontend to Netlify

### Step 1: Create Netlify Site
1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Choose "GitHub" and authorize Netlify
4. Select your repository: `SachyamKarki/Karki_Resume`

### Step 2: Configure Build Settings
Netlify will auto-detect from `netlify.toml`:
- **Base directory**: `frontend`
- **Build command**: `npm install && npm run build`
- **Publish directory**: `dist`

### Step 3: Set Environment Variables (Optional)
In Netlify Dashboard → Site Settings → Environment Variables:
```
VITE_API_URL=https://karki-resume-backend.onrender.com
```

### Step 4: Deploy
1. Click "Deploy site"
2. Netlify will build and deploy your frontend
3. Your frontend will be available at: `https://your-site-name.netlify.app`

## 🔗 Part 3: Update Backend CORS

After getting your Netlify URL, update the backend environment variable:
1. Go to Render Dashboard
2. Update `FRONTEND_URL` to your actual Netlify URL
3. Redeploy the backend

## 🧪 Testing Your Deployment

### Test Backend
```bash
curl https://karki-resume-backend.onrender.com/api/health
```

Expected response:
```json
{
  "status": "OK",
  "message": "Server is running"
}
```

### Test Frontend
1. Visit your Netlify URL
2. Try the contact form
3. Check if emails are sent successfully

## 📋 Deployment Checklist

### Backend (Render)
- [ ] Render account created
- [ ] Web service created with correct settings
- [ ] Environment variables set
- [ ] Backend deployed successfully
- [ ] Health endpoint working
- [ ] CORS configured for frontend URL

### Frontend (Netlify)
- [ ] Netlify account created
- [ ] Site created from GitHub
- [ ] Build settings configured
- [ ] Frontend deployed successfully
- [ ] Contact form working
- [ ] API calls to Render backend working

## 🎉 Benefits of This Setup

1. **Frontend on Netlify**:
   - Global CDN for fast loading
   - Automatic deployments from Git
   - Free hosting with generous limits
   - Easy custom domain setup

2. **Backend on Render**:
   - Reliable server hosting
   - Automatic deployments from Git
   - Environment variable management
   - Free tier available

3. **Full-Stack Integration**:
   - Frontend and backend on different platforms
   - CORS properly configured
   - Scalable architecture

## 🆘 Troubleshooting

### Common Issues

1. **CORS Errors**: Make sure `FRONTEND_URL` in Render matches your Netlify URL
2. **Build Failures**: Check that all dependencies are in package.json
3. **Email Not Sending**: Verify environment variables in Render
4. **API Not Working**: Check that the backend URL is correct in frontend

### Getting Help

- Check Render build logs in the dashboard
- Check Netlify build logs in the dashboard
- Verify environment variables are set correctly
- Test API endpoints directly

## 🚀 Your Full-Stack App is Ready!

Once deployed, you'll have:
- ✅ React frontend on Netlify
- ✅ Express backend on Render
- ✅ Contact form with email functionality
- ✅ Global CDN and reliable hosting
- ✅ Easy git-based deployments

Happy coding! 🎉
