// WhatsApp Business Cloud API utilities

interface WhatsAppMessage {
  to: string;
  type: 'text' | 'template' | 'interactive';
  content: any;
}

export class WhatsAppService {
  private accessToken: string;
  private phoneNumberId: string;
  private apiUrl = 'https://graph.facebook.com/v18.0';

  constructor() {
    this.accessToken = process.env.WHATSAPP_ACCESS_TOKEN || '';
    this.phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID || '';
  }

  async sendTextMessage(to: string, text: string) {
    try {
      const response = await fetch(
        `${this.apiUrl}/${this.phoneNumberId}/messages`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${this.accessToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            messaging_product: 'whatsapp',
            to: to.replace(/[^\d]/g, ''),
            type: 'text',
            text: { body: text },
          }),
        }
      );

      return await response.json();
    } catch (error) {
      console.error('WhatsApp send error:', error);
      throw error;
    }
  }

  async sendTemplateMessage(to: string, templateName: string, languageCode = 'en') {
    try {
      const response = await fetch(
        `${this.apiUrl}/${this.phoneNumberId}/messages`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${this.accessToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            messaging_product: 'whatsapp',
            to: to.replace(/[^\d]/g, ''),
            type: 'template',
            template: {
              name: templateName,
              language: { code: languageCode },
            },
          }),
        }
      );

      return await response.json();
    } catch (error) {
      console.error('WhatsApp template error:', error);
      throw error;
    }
  }

  async sendInteractiveButtons(to: string, bodyText: string, buttons: Array<{ id: string; title: string }>) {
    try {
      const response = await fetch(
        `${this.apiUrl}/${this.phoneNumberId}/messages`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${this.accessToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            messaging_product: 'whatsapp',
            to: to.replace(/[^\d]/g, ''),
            type: 'interactive',
            interactive: {
              type: 'button',
              body: { text: bodyText },
              action: {
                buttons: buttons.map(btn => ({
                  type: 'reply',
                  reply: {
                    id: btn.id,
                    title: btn.title,
                  },
                })),
              },
            },
          }),
        }
      );

      return await response.json();
    } catch (error) {
      console.error('WhatsApp interactive error:', error);
      throw error;
    }
  }
}

// Chatbot conversation flow handler
export class WhatsAppChatbot {
  private whatsapp: WhatsAppService;

  constructor() {
    this.whatsapp = new WhatsAppService();
  }

  async handleMessage(from: string, messageText: string, messageType: string) {
    const lowerText = messageText.toLowerCase();

    // Welcome message
    if (lowerText.includes('hi') || lowerText.includes('hello') || lowerText.includes('hey')) {
      return this.sendWelcomeMessage(from);
    }

    // Pricing inquiry
    if (lowerText.includes('price') || lowerText.includes('cost') || lowerText.includes('pricing')) {
      return this.sendPricingInfo(from);
    }

    // GST inquiry
    if (lowerText.includes('gst') || lowerText.includes('registration')) {
      return this.sendGSTInfo(from);
    }

    // Virtual office inquiry
    if (lowerText.includes('virtual office') || lowerText.includes('address')) {
      return this.sendVirtualOfficeInfo(from);
    }

    // Location inquiry
    if (lowerText.includes('location') || lowerText.includes('address') || lowerText.includes('where')) {
      return this.sendLocationInfo(from);
    }

    // Default response
    return this.sendDefaultResponse(from);
  }

  private async sendWelcomeMessage(to: string) {
    await this.whatsapp.sendTextMessage(
      to,
      '👋 Welcome to Pune Cowork!\n\nWe provide premium virtual office solutions in Pune, just 5 km from Hinjewadi IT Park.\n\n📍 Services:\n• Virtual Office (₹899/month)\n• GST Registration Support\n• Business Address\n• Mail Handling\n\nHow can I help you today?'
    );

    return this.whatsapp.sendInteractiveButtons(
      to,
      'Choose an option:',
      [
        { id: 'pricing', title: 'View Pricing' },
        { id: 'gst', title: 'GST Registration' },
        { id: 'contact', title: 'Talk to Agent' },
      ]
    );
  }

  private async sendPricingInfo(to: string) {
    return this.whatsapp.sendTextMessage(
      to,
      '💰 *Pune Cowork Pricing*\n\n📦 *Basic Plan* - ₹899/month\n• GST-registered business address\n• Mail handling (10 items/month)\n• Government registration support\n\n🚀 *Professional Plan* - ₹1,999/month\n• Everything in Basic\n• Mail forwarding (25 items/month)\n• 2 meeting room hours/month\n• Receptionist support\n\n⭐ *Premium Plan* - ₹3,999/month\n• Everything in Professional\n• Unlimited mail handling\n• 8 meeting room hours/month\n• Dedicated phone line\n• Priority support\n\n📞 Call +91 98765 43210 to get started!\n🌐 Visit: punecowork.com/pricing'
    );
  }

  private async sendGSTInfo(to: string) {
    return this.whatsapp.sendTextMessage(
      to,
      '📄 *GST Registration Support*\n\nWe help you register your business with GST using our verified Pune address.\n\n✅ Benefits:\n• Government-approved address\n• Fast verification (7-10 days)\n• Document support\n• Compliance assistance\n\n📋 Required Documents:\n• PAN Card\n• Aadhaar Card\n• Business proof\n• Bank statement\n\n💰 Starting at ₹899/month\n\nShall I connect you with our GST specialist?'
    );
  }

  private async sendVirtualOfficeInfo(to: string) {
    return this.whatsapp.sendTextMessage(
      to,
      '🏢 *Virtual Office in Pune*\n\n📍 Located at Wadmukhwadi, Chakan\n(5 km from Hinjewadi IT Park)\n\nFeatures:\n✅ Prestigious business address\n✅ GST & company registration\n✅ Mail receiving & forwarding\n✅ Meeting room access\n✅ Receptionist services\n\nPerfect for:\n• Startups\n• Freelancers\n• Remote businesses\n• E-commerce sellers\n\n💰 Plans from ₹899/month\n\n📞 Ready to get started? Call +91 98765 43210'
    );
  }

  private async sendLocationInfo(to: string) {
    return this.whatsapp.sendTextMessage(
      to,
      '📍 *Pune Cowork Location*\n\nWadmukhwadi, Chakan\nPune - 410501, Maharashtra\n\n🚗 Directions:\n• 5 km from Hinjewadi IT Park\n• 15 mins from Rajiv Gandhi Infotech Park\n• Near Wakad, Baner, Aundh\n\n🕒 Office Hours:\nMon-Fri: 9 AM - 6 PM\nSat: 10 AM - 3 PM\n\n📞 Call before visit: +91 98765 43210\n📧 Email: info@punecowork.com\n\nGoogle Maps: [Link to be added]'
    );
  }

  private async sendDefaultResponse(to: string) {
    return this.whatsapp.sendTextMessage(
      to,
      'Thanks for your message! Our team will respond shortly.\n\nMeanwhile:\n📞 Call: +91 98765 43210\n📧 Email: info@punecowork.com\n🌐 Website: punecowork.com\n\nTypical response time: 15 minutes during business hours.'
    );
  }

  async handleButtonReply(from: string, buttonId: string) {
    switch (buttonId) {
      case 'pricing':
        return this.sendPricingInfo(from);
      case 'gst':
        return this.sendGSTInfo(from);
      case 'contact':
        return this.whatsapp.sendTextMessage(
          from,
          '📞 Connecting you with our team...\n\nCall us directly: +91 98765 43210\n\nOr share your:\n• Name\n• Business type\n• Requirements\n\nWe\'ll call you back within 30 minutes!'
        );
      default:
        return this.sendDefaultResponse(from);
    }
  }
}
