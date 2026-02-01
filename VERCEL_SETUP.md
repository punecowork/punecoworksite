# ⚠️ IMPORTANT: Environment Variables Setup

Your site is deployed but **WhatsApp links show "undefined"** because environment variables are not configured in Vercel.

## 🔧 Fix in 2 Minutes

### Go to Vercel Dashboard:
1. Visit: https://vercel.com/dashboard
2. Select your project: `punecoworksite`
3. Go to **Settings** → **Environment Variables**

### Add These Variables:

```
NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210
NEXT_PUBLIC_CONTACT_PHONE=+919876543210
NEXT_PUBLIC_CONTACT_EMAIL=info@punecowork.com
NEXT_PUBLIC_APP_URL=https://punecoworksite.vercel.app
```

### After Adding:
1. Click **Save**
2. Go to **Deployments** tab
3. Click **"Redeploy"** on the latest deployment

---

## 📱 WhatsApp Number Format

**IMPORTANT:** WhatsApp number must be in international format **without** the `+` sign:

✅ Correct: `919876543210`  
❌ Wrong: `+919876543210`  
❌ Wrong: `9876543210`  

**Format:** `[country code][phone number without 0]`
- India country code: `91`
- Your number: `98765 43210`
- Result: `919876543210`

---

## 🎯 Result

After redeployment:
- ✅ WhatsApp widget will work
- ✅ WhatsApp links in footer will work
- ✅ Contact page WhatsApp button will work
- ✅ All "Start Chat" buttons will work

---

## 🔒 Optional (Can Add Later):

### For WhatsApp Business API (chatbot):
```
WHATSAPP_ACCESS_TOKEN=your_meta_access_token
WHATSAPP_PHONE_NUMBER_ID=your_phone_number_id
WHATSAPP_VERIFY_TOKEN=your_verify_token
```

### For Google Sheets (lead storage):
```
GOOGLE_SHEETS_CREDENTIALS=your_service_account_json
GOOGLE_SHEETS_SPREADSHEET_ID=your_spreadsheet_id
```

### For Google Analytics:
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

---

## 🚀 Quick Video Tutorial

**Setting Environment Variables in Vercel:**
1. Dashboard → Project → Settings
2. Environment Variables (left sidebar)
3. Add variable name and value
4. Click "Add"
5. Repeat for all variables
6. Go to Deployments → Click ⋮ → Redeploy

---

## ✅ Verification

After redeployment, test:
1. Visit: https://punecoworksite.vercel.app
2. Scroll down and click WhatsApp widget (bottom right)
3. Should open WhatsApp with your number
4. Check footer WhatsApp link - should work

---

Need help? All instructions are in **DEPLOYMENT.md**
