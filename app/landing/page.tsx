import { Button } from '@/components/ui/Button';
import { ContactForm } from '@/components/ui/Form';
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Virtual Office Pune ₹899 | GST Registration in 24 Hours',
  description: 'Get GST-registered virtual office in Pune near Hinjewadi IT Park. Setup in 24 hours. No deposit. Mail handling included. Starting ₹899/month only!',
  keywords: ['virtual office pune price', 'cheap virtual office hinjewadi', 'gst office address pune'],
  noindex: false,
});

export default function LandingPage() {
  return (
    <>
      {/* Remove header/footer for focused conversion */}
      <style jsx global>{`
        header, footer { display: none !important; }
      `}</style>

      {/* Hero - Above the Fold */}
      <section className="min-h-screen bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white flex items-center">
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="inline-block bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
                🎉 LIMITED OFFER: 20% OFF First 3 Months
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Virtual Office in Pune
                <br/>
                <span className="text-yellow-300">₹899/month</span>
              </h1>
              
              <p className="text-2xl mb-6 text-blue-100">
                GST-Approved Business Address<br/>
                Near Hinjewadi IT Park
              </p>
              
              <ul className="space-y-4 mb-8 text-lg">
                <li className="flex items-center">
                  <span className="text-green-400 mr-3 text-3xl">✓</span>
                  <span><strong>Setup in 24 hours</strong> - Start tomorrow!</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3 text-3xl">✓</span>
                  <span><strong>GST Registration Support</strong> - Complete assistance</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3 text-3xl">✓</span>
                  <span><strong>Mail Handling Included</strong> - WhatsApp alerts</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3 text-3xl">✓</span>
                  <span><strong>No Security Deposit</strong> - Zero upfront cost</span>
                </li>
              </ul>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-gray-500 border-2 border-white"></div>
                </div>
                <div>
                  <div className="font-bold">200+ Happy Clients</div>
                  <div className="text-sm text-blue-200">★★★★★ 4.8 Rating</div>
                </div>
              </div>
              
              <p className="text-yellow-300 font-semibold text-xl">
                ⚡ Only 5 slots left at this price!
              </p>
            </div>
            
            {/* Lead Form - Sticky on Mobile */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 lg:sticky lg:top-24">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Get Started Now
                </h2>
                <p className="text-gray-600">
                  Fill form below. We'll call you in <strong>15 minutes!</strong>
                </p>
                <div className="mt-4 inline-block bg-red-50 border border-red-200 text-red-800 px-4 py-2 rounded-lg text-sm font-semibold">
                  ⏰ Offer expires in 24 hours
                </div>
              </div>
              
              <ContactForm source="landing_page_hero" />
              
              <div className="mt-6 pt-6 border-t text-center">
                <p className="text-sm text-gray-500 mb-3">
                  Or call us directly:
                </p>
                <a
                  href="tel:+919876543210"
                  className="block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg text-lg transition-colors"
                >
                  📞 Call +91 98765 43210
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-600 font-semibold mb-6">TRUSTED BY LEADING PUNE STARTUPS</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-50">
              <div className="bg-gray-300 h-16 rounded flex items-center justify-center">Logo 1</div>
              <div className="bg-gray-300 h-16 rounded flex items-center justify-center">Logo 2</div>
              <div className="bg-gray-300 h-16 rounded flex items-center justify-center">Logo 3</div>
              <div className="bg-gray-300 h-16 rounded flex items-center justify-center">Logo 4</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              Why 200+ Businesses Choose Pune Cowork
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Everything you need to establish your business presence
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-8 rounded-xl">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold mb-3">Instant Setup</h3>
                <p className="text-gray-700">
                  Get your business address activated within 24 hours. 
                  No waiting, no paperwork hassles. Start using it tomorrow!
                </p>
              </div>
              
              <div className="bg-green-50 p-8 rounded-xl">
                <div className="text-5xl mb-4">💰</div>
                <h3 className="text-2xl font-bold mb-3">Save 90% Cost</h3>
                <p className="text-gray-700">
                  Physical office in Hinjewadi = ₹10,000+/month. 
                  Our virtual office = ₹899/month. Save lakhs annually!
                </p>
              </div>
              
              <div className="bg-purple-50 p-8 rounded-xl">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-bold mb-3">GST Ready</h3>
                <p className="text-gray-700">
                  Government-approved address with NOC. Perfect for GST, 
                  company registration, and all official purposes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing - Simple */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Simple Pricing. No Hidden Charges.
            </h2>
            
            <div className="bg-white border-4 border-primary-500 rounded-2xl p-12 text-center shadow-2xl">
              <div className="inline-block bg-primary-600 text-white px-6 py-2 rounded-full font-bold mb-6">
                ⭐ MOST POPULAR
              </div>
              
              <div className="mb-6">
                <span className="text-6xl font-bold">₹899</span>
                <span className="text-2xl text-gray-600">/month</span>
              </div>
              
              <div className="text-xl text-gray-500 line-through mb-2">₹1,099/month</div>
              <div className="text-2xl text-green-600 font-bold mb-8">Save ₹200/month!</div>
              
              <ul className="text-left max-w-md mx-auto space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span>Premium Pune business address (Wadmukhwadi)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span>GST registration support & NOC</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span>Mail handling (10 items/month)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span>WhatsApp notifications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span>No setup fee, no deposit</span>
                </li>
              </ul>
              
              <Button size="lg" className="text-2xl py-6 px-12">
                Claim This Offer Now →
              </Button>
              
              <p className="text-sm text-gray-500 mt-6">
                ⏰ Limited time offer. Regular price ₹1,099/month
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              What Our Clients Say
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-yellow-400 text-xl mb-4">★★★★★</div>
                <p className="text-gray-700 mb-4">
                  "Got my GST registered in 10 days. Super smooth process. 
                  Pune Cowork team was very helpful!"
                </p>
                <div className="font-bold">Amit Sharma</div>
                <div className="text-sm text-gray-500">E-commerce Startup, Hinjewadi</div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-yellow-400 text-xl mb-4">★★★★★</div>
                <p className="text-gray-700 mb-4">
                  "Best decision for my freelance business. Professional address 
                  at fraction of office rent cost."
                </p>
                <div className="font-bold">Priya Desai</div>
                <div className="text-sm text-gray-500">Digital Marketer, Wakad</div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-yellow-400 text-xl mb-4">★★★★★</div>
                <p className="text-gray-700 mb-4">
                  "WhatsApp support is amazing. Get instant updates about mail. 
                  Highly recommended!"
                </p>
                <div className="font-bold">Rahul Patil</div>
                <div className="text-sm text-gray-500">Tech Startup, Baner</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Banner */}
      <section className="py-12 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-3xl font-bold mb-2">
            ⚡ Special Offer Ending Soon!
          </p>
          <p className="text-xl">
            Only 5 slots left at ₹899/month. Regular price ₹1,099/month.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Your Virtual Office?
            </h2>
            <p className="text-2xl mb-8 text-blue-100">
              Setup in 24 hours. No hassles. No hidden charges.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-8">
              <a
                href="tel:+919876543210"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-6 px-8 rounded-xl text-xl transition-all transform hover:scale-105 shadow-xl"
              >
                📞 Call Now
              </a>
              
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-100 text-primary-600 font-bold py-6 px-8 rounded-xl text-xl transition-all transform hover:scale-105 shadow-xl"
              >
                💬 WhatsApp Us
              </a>
            </div>
            
            <p className="text-yellow-300 font-semibold text-lg">
              ⏰ Limited Time: First 50 signups get 20% off for 3 months!
            </p>
          </div>
        </div>
      </section>

      {/* Trust Footer */}
      <section className="py-8 bg-gray-900 text-white text-center">
        <p className="text-sm text-gray-400">
          © 2026 Pune Cowork. All rights reserved. | Wadmukhwadi, Pune - 410501 | 
          <a href="tel:+919876543210" className="hover:text-white ml-2">+91 98765 43210</a>
        </p>
      </section>
    </>
  );
}
