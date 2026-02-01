# ⚡ QUICK START - Get Your Website Running in 5 Minutes!

**GitHub Repository:** https://github.com/punecowork/punecoworksite

## 🎯 **FASTEST WAY TO LAUNCH**

### **Step 1: Clone & Install (2 minutes)**
```powershell
# Clone the repository
git clone https://github.com/punecowork/punecoworksite.git
cd punecoworksite

# Install dependencies
npm install
```

### **Step 2: Configure (1 minute)**
```powershell
# Copy environment file
Copy-Item .env.local.example .env.local

# Edit with your details (optional for testing)
notepad .env.local
```

### **Step 3: Run (30 seconds)**
```powershell
npm run dev
```

Visit: **http://localhost:3000** 🎉

---

## 🚀 **DEPLOY TO VERCEL (5 Minutes)**

### **Method 1: One-Click Deploy (Fastest!)**

Click here: [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/punecowork/punecoworksite)

This will:
1. Clone the repository to your account
2. Set up the project automatically
3. Deploy it instantly

**Done! Your site is live at: your-project.vercel.app**

### **Method 2: Manual Import**

1. Go to [vercel.com/new](https://vercel.com/new)
2. Enter: `https://github.com/punecowork/punecoworksite`
3. Click "Import" → "Deploy"

---

## 📝 **MINIMAL CONFIGURATION**

### **Must Configure (takes 2 mins):**

In Vercel Dashboard → Settings → Environment Variables:

```
NEXT_PUBLIC_APP_URL=https://your-site.vercel.app
NEXT_PUBLIC_CONTACT_PHONE=+919876543210
NEXT_PUBLIC_CONTACT_EMAIL=info@punecowork.com
NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210
```

Click "Redeploy" after adding variables.

---

## ✅ **THAT'S IT!**

Your website is now:
- ✅ Live on the internet
- ✅ Fully responsive (mobile-friendly)
- ✅ SEO optimized
- ✅ PWA enabled (installable)
- ✅ Super fast (Vercel CDN)

---

## 🎯 **OPTIONAL: Add WhatsApp Business (15 mins)**

1. Go to [business.facebook.com](https://business.facebook.com)
2. Add WhatsApp Business
3. Get API credentials
4. Add to Vercel environment variables
5. Set webhook: `https://your-site.vercel.app/api/whatsapp-webhook`

Full guide: See [DEPLOYMENT.md](./DEPLOYMENT.md)

---

## 📊 **OPTIONAL: Add Google Analytics (5 mins)**

1. Go to [analytics.google.com](https://analytics.google.com)
2. Create property
3. Get Measurement ID
4. Add to Vercel: `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX`

---

## 🎨 **CUSTOMIZE YOUR SITE**

### **Change Colors:**
Edit [tailwind.config.ts](./tailwind.config.ts):
```ts
primary: {
  600: '#YOUR_COLOR', // Change primary brand color
}
```

### **Change Content:**
- Homepage: [app/page.tsx](./app/page.tsx)
- Pricing: [app/pricing/page.tsx](./app/pricing/page.tsx)
- Contact: [app/contact/page.tsx](./app/contact/page.tsx)

### **Change Logo:**
Replace files in `public/icons/` folder

---

## 📱 **TEST ON MOBILE**

```powershell
# Get your local IP
ipconfig

# Access from phone on same WiFi
# http://YOUR_IP:3000
```

---

## 🆘 **STUCK? COMMON FIXES**

### **"Module not found" error:**
```powershell
npm install
```

### **Port 3000 already in use:**
```powershell
npm run dev -- -p 3001
```

### **Build fails:**
```powershell
npm run build
# Fix any errors shown
```

---

## 📞 **YOUR WEBSITE IS READY!**

### **What You Get:**
✅ 13 fully functional pages  
✅ Contact form with validation  
✅ WhatsApp chatbot integration  
✅ Mobile responsive design  
✅ PWA (installable app)  
✅ SEO optimized  
✅ Google Analytics ready  
✅ Fast loading (90+ PageSpeed)  

### **Total Cost:**
- Development: **₹0** (you just built it!)
- Hosting: **FREE** (Vercel)
- Domain: ₹800/year (optional)
- **Total: FREE or ~₹70/month with domain**

**Compare to hiring developers: ₹2-7 lakhs saved! 🎉**

---

## 🎯 **NEXT STEPS:**

1. ✅ Deploy to Vercel (5 mins)
2. 📱 Test on mobile
3. 🎨 Customize content/colors
4. 📊 Add Google Analytics
5. 💬 Setup WhatsApp Business
6. 🌍 Buy domain (optional)
7. 🚀 Start marketing!

---

## 📚 **FULL DOCUMENTATION:**

- [README.md](./README.md) - Project overview
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Complete deployment guide
- [Vercel Docs](https://vercel.com/docs) - Hosting documentation

---

**🎉 Congratulations! You're now live on the internet!**

Share your link: `https://your-project.vercel.app`
