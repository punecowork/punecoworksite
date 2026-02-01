import { ContactForm } from '@/components/ui/Form';
import { Card } from '@/components/ui/Card';
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Contact Us - Get Your Virtual Office in Pune',
  description: 'Contact Pune Cowork for virtual office services. Call +91 98765 43210, WhatsApp, or fill our form. Located 5 km from Hinjewadi IT Park.',
});

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-white pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600">
              We're here to help you establish your business presence in Pune. 
              Reach out and we'll respond within 30 minutes during business hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">💬</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Fastest response time. Chat with us instantly.
                    </p>
                    <a
                      href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 font-semibold"
                    >
                      Start Chat →
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Phone</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Mon-Fri: 9 AM - 6 PM<br/>Sat: 10 AM - 3 PM
                    </p>
                    <a
                      href="tel:+919876543210"
                      className="text-primary-600 hover:text-primary-700 font-semibold"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Email</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      We'll respond within 24 hours
                    </p>
                    <a
                      href="mailto:info@punecowork.com"
                      className="text-primary-600 hover:text-primary-700 font-semibold"
                    >
                      info@punecowork.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Visit Us</h3>
                    <p className="text-gray-600 text-sm">
                      Wadmukhwadi, Chakan<br/>
                      Pune - 410501, Maharashtra<br/>
                      <span className="text-primary-600 font-semibold">(5 km from Hinjewadi IT Park)</span>
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
                <p className="text-gray-600 mb-6">
                  Fill out the form below and we'll get back to you within 30 minutes during business hours.
                </p>
                <ContactForm source="contact_page" />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Our Location</h2>
            <div className="bg-gray-300 rounded-xl h-96 flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl mb-4 block">📍</span>
                <p className="text-gray-700 font-semibold">
                  Wadmukhwadi, Chakan, Pune - 410501
                </p>
                <p className="text-gray-600">5 km from Hinjewadi IT Park</p>
                <p className="text-sm text-gray-500 mt-2">
                  (Embed Google Maps iframe here)
                </p>
              </div>
            </div>
            
            <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl mb-2">🚗</div>
                <div className="font-semibold">15 mins drive</div>
                <div className="text-sm text-gray-600">from Hinjewadi Phase 1</div>
              </div>
              <div>
                <div className="text-3xl mb-2">🏢</div>
                <div className="font-semibold">Prime Location</div>
                <div className="text-sm text-gray-600">Near IT hubs</div>
              </div>
              <div>
                <div className="text-3xl mb-2">🅿️</div>
                <div className="font-semibold">Free Parking</div>
                <div className="text-sm text-gray-600">For client visits</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Business Hours</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b">
                <span className="font-semibold">Monday - Friday</span>
                <span className="text-gray-600">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <span className="font-semibold">Saturday</span>
                <span className="text-gray-600">10:00 AM - 3:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="font-semibold">Sunday</span>
                <span className="text-red-600">Closed</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-6 text-center">
              WhatsApp support available 24/7 for urgent queries
            </p>
          </Card>
        </div>
      </section>
    </>
  );
}
