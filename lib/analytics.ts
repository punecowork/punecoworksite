// Google Analytics 4 tracking utilities

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// Page view tracking
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID!, {
      page_path: url,
    });
  }
};

// Event tracking
interface EventParams {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export const event = ({ action, category, label, value }: EventParams) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Predefined events for lead generation
export const trackFormSubmit = (formName: string) => {
  event({
    action: 'form_submit',
    category: 'Lead Generation',
    label: formName,
  });
};

export const trackPhoneClick = () => {
  event({
    action: 'phone_click',
    category: 'Contact',
    label: 'Header Phone',
  });
};

export const trackWhatsAppClick = () => {
  event({
    action: 'whatsapp_click',
    category: 'Contact',
    label: 'WhatsApp Widget',
  });
};

export const trackPricingView = (plan: string) => {
  event({
    action: 'pricing_view',
    category: 'Engagement',
    label: plan,
  });
};

export const trackCTAClick = (ctaLocation: string) => {
  event({
    action: 'cta_click',
    category: 'Conversion',
    label: ctaLocation,
  });
};

export const trackServiceView = (serviceName: string) => {
  event({
    action: 'service_view',
    category: 'Engagement',
    label: serviceName,
  });
};

// Type augmentation for window.gtag
declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}
