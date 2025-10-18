# 🚀 Karki Resume Portfolio

A modern, responsive portfolio website built with React and deployed on Netlify with serverless functions.

## ✨ Features

- **Modern React Frontend** with Vite
- **Serverless Backend** with Netlify Functions
- **Contact Form** with email functionality
- **Multi-language Support** (9 languages)
- **Responsive Design** for all devices
- **Fast Loading** with global CDN

## 🏗️ Tech Stack

- **Frontend**: React, Vite, Framer Motion
- **Backend**: Netlify Functions, Node.js
- **Email**: Nodemailer with Gmail
- **Deployment**: Netlify
- **Styling**: CSS3 with modern features

## 📁 Project Structure

```
Karki_Resume/
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── hooks/          # Custom hooks
│   │   ├── i18n/           # Internationalization
│   │   └── assets/         # Images and files
│   ├── package.json
│   └── vite.config.js
├── backend/                  # Express backend (local dev)
│   ├── server.js
│   ├── package.json
│   └── .env
├── netlify/
│   └── functions/           # Netlify Functions
│       ├── contact.js       # Contact form handler
│       ├── health.js        # Health check
│       └── package.json
├── netlify.toml             # Netlify configuration
└── README.md
```

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/SachyamKarki/Karki_Resume.git
   cd Karki_Resume
   ```

2. **Install dependencies**
   ```bash
   cd frontend && npm install
   cd ../backend && npm install
   ```

3. **Set up environment variables**
   ```bash
   # Copy the example file
   cp backend/env.example backend/.env
   
   # Edit backend/.env with your email credentials
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   NODE_ENV=development
   PORT=5001
   FRONTEND_URL=http://localhost:3000
   ```

4. **Start development servers**
   ```bash
   # Terminal 1 - Backend
   cd backend && npm run dev
   
   # Terminal 2 - Frontend
   cd frontend && npm run dev
   ```

5. **Open your browser**
   - Frontend: http://localhost:3000
   - Backend: http://localhost:5001

### Netlify Development (Recommended)

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Run with Netlify Functions
netlify dev --functions netlify/functions
```

## 🌐 Deployment

### Deploy to Netlify

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Deploy to Netlify"
   git push origin main
   ```

2. **Create Netlify Site**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Netlify will auto-detect the configuration

3. **Set Environment Variables**
   In Netlify Dashboard → Site Settings → Environment Variables:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   NODE_ENV=production
   ```

4. **Deploy**
   - Click "Deploy site"
   - Your site will be live at `https://your-site.netlify.app`

## 📧 Email Setup

For the contact form to work, you need to set up Gmail App Password:

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account → Security → App passwords
   - Select "Mail" and generate password
   - Use this password (not your regular password) for `EMAIL_PASS`

## 🔗 API Endpoints

- `GET /api/health` - Health check
- `POST /api/contact` - Contact form submission

## 🧪 Testing

### Test Health Endpoint
```bash
curl https://your-site.netlify.app/api/health
```

### Test Contact Form
```bash
curl -X POST https://your-site.netlify.app/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test Subject",
    "message": "This is a test message"
  }'
```

## 📋 Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Backend
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server

## 🎨 Customization

### Adding New Languages
1. Create new language file in `frontend/src/i18n/languages/`
2. Add language to `frontend/src/i18n/languages/index.js`
3. Update language selector component

### Styling
- Main styles: `frontend/src/index.css`
- Component styles: Individual `.css` files in components

## 🆘 Troubleshooting

### Common Issues

1. **Email not sending**: Check EMAIL_USER and EMAIL_PASS environment variables
2. **CORS errors**: Ensure frontend is making requests to correct API endpoints
3. **Build failures**: Check that all dependencies are installed
4. **Functions not working**: Verify functions are in `netlify/functions/`

### Getting Help

- Check Netlify build logs in the dashboard
- Verify environment variables are set correctly
- Test API endpoints directly

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Shaksham Karki**
- GitHub: [@SachyamKarki](https://github.com/SachyamKarki)
- Email: sachyamkarki@gmail.com

---

⭐ **Star this repository if you found it helpful!**
