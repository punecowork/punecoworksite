# 🚀 DEPLOYMENT GUIDE - Pune Cowork

**GitHub Repository:** https://github.com/punecowork/punecoworksite

Complete step-by-step guide to deploy your website to Vercel and configure all services.

---

## 📋 **PRE-DEPLOYMENT CHECKLIST**

Before deploying, ensure you have:
- [ ] GitHub account
- [ ] Vercel account (free - sign up at vercel.com)
- [ ] Domain name (optional - can use vercel.app subdomain)
- [ ] WhatsApp Business Account (optional but recommended)
- [ ] Google Workspace email (optional)

---

## 🎯 **STEP 1: CLONE & INSTALL DEPENDENCIES**

```bash
# Clone the repository
git clone https://github.com/punecowork/punecoworksite.git
cd punecoworksite

# Install all dependencies
npm install

# Verify installation
npm list next react react-dom
```

---

## 🧪 **STEP 2: TEST LOCALLY**

```bash
# Copy environment variables
Copy-Item .env.local.example .env.local

# Edit .env.local with your details
notepad .env.local

# Run development server
npm run dev
```

Visit `http://localhost:3000` to test your website.

### **Test Checklist:**
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Contact form submits (check console for errors)
- [ ] Mobile responsive design works
- [ ] WhatsApp widget appears

---

## 📦 **STEP 3: PREPARE FOR DEPLOYMENT**

The repository is already on GitHub: https://github.com/punecowork/punecoworksite

### **Option A: Fork the Repository (if you want your own copy)**

1. Go to https://github.com/punecowork/punecoworksite
2. Click "Fork" button (top right)
3. This creates your own copy of the repository
4. Clone your forked version:
```bash
git clone https://github.com/YOUR_USERNAME/punecoworksite.git
cd punecoworksite
```

### **Option B: Use the Original Repository (faster)**

Just deploy directly from: https://github.com/punecowork/punecoworksite

---

## 🌐 **STEP 4: DEPLOY TO VERCEL**

### **Option A: One-Click Deploy (Fastest)**

Click this button: [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/punecowork/punecoworksite)

This will:
1. Clone the repository
2. Set up the project on Vercel
3. Deploy it automatically

### **Option B: Via Vercel Dashboard (Recommended)**

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click "Import Git Repository"
3. Enter: `https://github.com/punecowork/punecoworksite`
4. Vercel will auto-detect Next.js configuration
5. Add environment variables (see below)
6. Click "Deploy"

Your site will be live at: `https://your-project-name.vercel.app`

---

## ⚙️ **STEP 5: CONFIGURE ENVIRONMENT VARIABLES**

In Vercel Dashboard:

1. Go to your project
2. Click "Settings" → "Environment Variables"
3. Add these variables:

### **Required:**
```
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
NEXT_PUBLIC_APP_NAME=Pune Cowork
NEXT_PUBLIC_CONTACT_EMAIL=info@punecowork.com
NEXT_PUBLIC_CONTACT_PHONE=+919876543210
NEXT_PUBLIC_CONTACT_ADDRESS=Wadmukhwadi, Chakan, Pune - 410501
```

### **WhatsApp (Optional but Recommended):**
```
NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210
WHATSAPP_ACCESS_TOKEN=your_token_here
WHATSAPP_PHONE_NUMBER_ID=your_phone_id_here
WHATSAPP_VERIFY_TOKEN=your_verify_token_here
```

### **Google Analytics (Recommended):**
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### **Google Sheets (Optional):**
```
GOOGLE_SHEETS_CREDENTIALS={"type":"service_account",...}
GOOGLE_SHEETS_SPREADSHEET_ID=your_spreadsheet_id
```

After adding variables, click "Redeploy" to apply them.

---

## 📱 **STEP 6: SETUP WHATSAPP BUSINESS (Optional)**

### **A. Create Meta Business Account**

1. Go to [business.facebook.com](https://business.facebook.com)
2. Create Business Account
3. Add WhatsApp Business product

### **B. Get API Credentials**

1. Go to WhatsApp → API Setup
2. Note down:
   - **Phone Number ID**
   - **WhatsApp Business Account ID**
3. Generate **Access Token** (Settings → System Users)

### **C. Configure Webhook**

1. In Vercel, copy your deployment URL: `https://your-site.vercel.app`
2. Webhook URL: `https://your-site.vercel.app/api/whatsapp-webhook`
3. Verify Token: Create a random string (e.g., `pune_cowork_verify_123`)
4. Subscribe to: `messages`, `message_status`

### **D. Test WhatsApp**

Send a message to your WhatsApp Business number:
```
Hi
```

Check Vercel logs to see if webhook received the message.

---

## 📊 **STEP 7: SETUP GOOGLE SHEETS (Optional)**

### **A. Create Google Cloud Project**

1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. Create New Project → "Pune Cowork Leads"
3. Enable Google Sheets API

### **B. Create Service Account**

1. APIs & Services → Credentials
2. Create Credentials → Service Account
3. Download JSON key file

### **C. Create Spreadsheet**

1. Create new Google Sheet named "Pune Cowork Leads"
2. Add header row:
   ```
   Timestamp | Name | Email | Phone | Business Type | Message | Source | Status
   ```
3. Share sheet with service account email (from JSON file)
4. Copy Spreadsheet ID from URL

### **D. Add to Vercel**

Add environment variables:
```
GOOGLE_SHEETS_CREDENTIALS=<paste entire JSON content>
GOOGLE_SHEETS_SPREADSHEET_ID=<spreadsheet id>
```

---

## 🔍 **STEP 8: SETUP GOOGLE ANALYTICS**

1. Go to [analytics.google.com](https://analytics.google.com)
2. Create new property for "Pune Cowork"
3. Get Measurement ID (format: `G-XXXXXXXXXX`)
4. Add to Vercel environment variables:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

---

## 🌍 **STEP 9: CONNECT CUSTOM DOMAIN (Optional)**

### **If you have punecowork.com:**

1. In Vercel Dashboard → Settings → Domains
2. Add domain: `punecowork.com`
3. Add domain: `www.punecowork.com`
4. Vercel will show DNS records

### **Update DNS (at your registrar):**

For **Namecheap/GoDaddy/etc:**
```
Type: A
Host: @
Value: 76.76.21.21

Type: CNAME
Host: www
Value: cname.vercel-dns.com
```

Wait 10-60 minutes for DNS propagation.

---

## 📈 **STEP 10: POST-DEPLOYMENT CHECKLIST**

### **Test Everything:**
- [ ] Website loads at custom domain (if configured)
- [ ] All pages load correctly
- [ ] Contact form submits successfully
- [ ] WhatsApp widget works
- [ ] Mobile responsive
- [ ] Fast page load (test at [pagespeed.web.dev](https://pagespeed.web.dev))

### **SEO Setup:**
- [ ] Submit sitemap to Google Search Console
- [ ] Verify website in Google Search Console
- [ ] Create Google My Business listing
- [ ] Submit to Justdial, Sulekha, IndiaMART

### **Analytics:**
- [ ] Verify Google Analytics is tracking
- [ ] Test conversion events (form submissions)

---

## 🚨 **TROUBLESHOOTING**

### **Build Fails:**
```bash
# Common fixes:
npm install --legacy-peer-deps
rm -rf node_modules package-lock.json
npm install
npm run build
```

### **Environment Variables Not Working:**
- Ensure variables start with `NEXT_PUBLIC_` for client-side access
- Redeploy after adding variables
- Check for typos in variable names

### **WhatsApp Not Receiving Messages:**
- Check webhook URL is correct
- Verify token matches in Meta dashboard and .env
- Check Vercel logs for errors

### **Google Sheets Not Saving:**
- Verify JSON credentials are valid
- Check service account has edit access to sheet
- Test API locally first

---

## 📞 **NEED HELP?**

Common commands:
```bash
# View deployment logs
vercel logs

# Redeploy
vercel --prod --force

# Check environment variables
vercel env ls

# Pull environment variables locally
vercel env pull .env.local
```

---

## 🎉 **CONGRATULATIONS!**

Your Pune Cowork website is now live!

### **Next Steps:**
1. ✅ Test all functionality thoroughly
2. 📱 Share website with friends for feedback
3. 🎯 Start Google Ads campaign (use `/landing` page)
4. 📊 Monitor analytics daily
5. 📞 Respond to leads quickly (within 30 mins)

### **Marketing Checklist:**
- [ ] Create social media profiles (Facebook, Instagram, LinkedIn)
- [ ] List on Google My Business
- [ ] Submit to startup directories
- [ ] Start content marketing (blog posts)
- [ ] Run Google Ads targeting "virtual office pune"

### **Expected Timeline:**
- **Week 1:** 100-200 visitors, 5-10 leads
- **Month 1:** 1,000+ visitors, 20-30 leads
- **Month 3:** 3,000+ visitors, 80-100 leads, 5-10 clients

---

## 💰 **COST BREAKDOWN**

- Vercel Hosting: **FREE** (Hobby plan)
- Domain (.com): ₹800/year
- WhatsApp API: **FREE** (Meta Cloud API)
- Google Sheets: **FREE**
- Google Analytics: **FREE**
- **Total: ~₹70/month**

Compare to traditional development: ₹2,80,000-7,30,000!

---

## 📚 **RESOURCES**

- [Next.js Docs](https://nextjs.org/docs)
- [Vercel Docs](https://vercel.com/docs)
- [WhatsApp Business API](https://developers.facebook.com/docs/whatsapp)
- [Google Sheets API](https://developers.google.com/sheets/api)
- [Google Analytics 4](https://support.google.com/analytics)

---

**Built with ❤️ for Pune Startups**
