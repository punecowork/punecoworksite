import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export const metadata = {
  title: 'Thank You | Pune Cowork',
  description: 'Thank you for contacting Pune Cowork. We will get back to you shortly.',
  robots: 'noindex, nofollow',
};

export default function ThankYouPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white px-4">
      <div className="text-center max-w-2xl">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <span className="text-5xl">✓</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          Thank You!
        </h1>
        
        <p className="text-xl text-gray-600 mb-4">
          We've received your message and will get back to you within <strong>30 minutes</strong> during business hours.
        </p>
        
        <p className="text-lg text-gray-600 mb-8">
          Meanwhile, feel free to:
        </p>
        
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <span className="text-3xl mb-3 block">💬</span>
            <h3 className="font-bold mb-2">WhatsApp Us</h3>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700"
            >
              Chat Now →
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <span className="text-3xl mb-3 block">📞</span>
            <h3 className="font-bold mb-2">Call Us</h3>
            <a
              href="tel:+919876543210"
              className="text-primary-600 hover:text-primary-700"
            >
              +91 98765 43210
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <span className="text-3xl mb-3 block">💰</span>
            <h3 className="font-bold mb-2">View Pricing</h3>
            <Link href="/pricing" className="text-primary-600 hover:text-primary-700">
              See Plans →
            </Link>
          </div>
        </div>
        
        <div className="space-y-4">
          <Link href="/">
            <Button size="lg" variant="primary">
              ← Back to Home
            </Button>
          </Link>
          
          <p className="text-sm text-gray-500">
            Check your email for a confirmation message from us.
          </p>
        </div>
      </div>
    </section>
  );
}
