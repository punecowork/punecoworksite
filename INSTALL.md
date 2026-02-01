# 🎯 INSTALLATION INSTRUCTIONS

**GitHub Repository:** https://github.com/punecowork/punecoworksite

## **Follow These Steps in Order:**

---

## **STEP 0: Clone Repository**

```powershell
# Clone from GitHub
git clone https://github.com/punecowork/punecoworksite.git
cd punecoworksite
```

---

## **STEP 1: Install Node.js (if not installed)**

Check if Node.js is installed:
```powershell
node --version
```

If not installed, download from: https://nodejs.org (LTS version recommended)

---

## **STEP 2: Install Dependencies**

```powershell
# Install all packages (this will take 2-3 minutes)
# Make sure you're in the punecoworksite directory
npm install
```

**Expected output:**
```
added 250+ packages in 2m
```

---

## **STEP 3: Configure Environment Variables**

```powershell
# Copy the example environment file
Copy-Item .env.local.example .env.local

# Open and edit with your details
notepad .env.local
```

**Minimum required (for local testing):**
```
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_CONTACT_PHONE=+919876543210
NEXT_PUBLIC_CONTACT_EMAIL=info@punecowork.com
NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210
```

---

## **STEP 4: Run Development Server**

```powershell
npm run dev
```

**Expected output:**
```
- ready started server on 0.0.0.0:3000
- Local:        http://localhost:3000
- Network:      http://YOUR-IP:3000
```

---

## **STEP 5: Open in Browser**

Visit: **http://localhost:3000**

You should see the Pune Cowork homepage! 🎉

---

## **TROUBLESHOOTING:**

### **Error: "npm: command not found"**
**Solution:** Install Node.js from https://nodejs.org

### **Error: "Port 3000 is already in use"**
**Solution:** Run on different port:
```powershell
npm run dev -- -p 3001
```

### **Error: "Module not found"**
**Solution:** Reinstall dependencies:
```powershell
Remove-Item node_modules -Recurse -Force
Remove-Item package-lock.json
npm install
```

### **Error: "Cannot find module 'next'"**
**Solution:** Install Next.js:
```powershell
npm install next react react-dom
```

### **Slow install on Windows**
**Solution:** Use legacy peer deps:
```powershell
npm install --legacy-peer-deps
```

---

## **VERIFY INSTALLATION:**

### **Check these pages load correctly:**
- [x] Homepage: http://localhost:3000
- [x] Pricing: http://localhost:3000/pricing
- [x] Contact: http://localhost:3000/contact
- [x] About: http://localhost:3000/about
- [x] Landing: http://localhost:3000/landing
- [x] Virtual Office: http://localhost:3000/services/virtual-office

### **Check these work:**
- [x] Navigation menu
- [x] Mobile menu (resize browser)
- [x] WhatsApp widget appears after 3 seconds
- [x] Contact form (check browser console)
- [x] All buttons are clickable

---

## **BUILD FOR PRODUCTION (Optional):**

Test production build locally:
```powershell
# Build
npm run build

# Run production server
npm start
```

Visit: http://localhost:3000

---

## **NEXT: DEPLOY TO VERCEL**

See [QUICKSTART.md](./QUICKSTART.md) for 5-minute deployment guide!

---

## **NEED HELP?**

1. Check [QUICKSTART.md](./QUICKSTART.md) - Fast setup guide
2. Check [DEPLOYMENT.md](./DEPLOYMENT.md) - Complete guide
3. Check [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md) - Full overview

---

## **SUCCESS CHECKLIST:**

After installation, you should have:
- [x] Node.js installed
- [x] All npm packages installed (250+)
- [x] `.env.local` file configured
- [x] Development server running
- [x] Website loading in browser
- [x] All pages accessible
- [x] No console errors

**If all checked, you're ready to customize and deploy! 🚀**
