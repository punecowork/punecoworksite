import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { ContactForm } from '@/components/ui/Form';
import { generateMetadata, generateFAQSchema } from '@/lib/seo';
import Link from 'next/link';

export const metadata = generateMetadata({
  title: 'Virtual Office in Pune | GST Registration Support | Starting ₹899',
  description: 'Get a prestigious business address in Pune for GST registration. Located 5 km from Hinjewadi IT Park. Virtual office services from ₹899/month. Mail handling, meeting rooms & more.',
  keywords: [
    'virtual office near hinjewadi',
    'pune startup office',
    'GST address pune',
    'business registration pune',
    'coworking space wakad',
  ],
});

export default function HomePage() {
  const faqs = [
    {
      question: 'What is a virtual office?',
      answer: 'A virtual office provides you with a professional business address without the need for physical office space. You can use this address for GST registration, company registration, and receiving business mail.',
    },
    {
      question: 'Can I use your address for GST registration?',
      answer: 'Yes! Our address is government-approved and can be used for GST registration, company registration, and all official business purposes. We provide address proof and NOC documents.',
    },
    {
      question: 'How close are you to Hinjewadi IT Park?',
      answer: 'We are located in Wadmukhwadi, Chakan, just 5 km from Hinjewadi IT Park. It takes approximately 15 minutes by car. We serve businesses in Hinjewadi, Wakad, Baner, Aundh, and Pimpri-Chinchwad.',
    },
    {
      question: 'What documents do I need for GST registration?',
      answer: 'You need: PAN Card, Aadhaar Card, business proof (any existing registration), bank statement, and passport-size photos. We will provide the address proof and NOC.',
    },
    {
      question: 'Do you provide meeting room access?',
      answer: 'Yes! Professional and Premium plans include meeting room access (2-8 hours per month). Additional hours can be booked at ₹500/hour.',
    },
  ];

  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqs)),
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
                🎯 Trusted by 200+ Pune Startups
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Virtual Office in Pune<br/>
                <span className="text-yellow-300">Starting at ₹899/month</span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-4 text-blue-100">
                Get Your Business Registered in Hinjewadi Area
              </p>
              
              <ul className="space-y-3 mb-8 text-lg">
                <li className="flex items-center">
                  <span className="text-yellow-300 mr-3 text-2xl">✓</span>
                  <span>GST Registration Support (7-10 days)</span>
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-300 mr-3 text-2xl">✓</span>
                  <span>Premium Business Address (Wadmukhwadi, Pune)</span>
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-300 mr-3 text-2xl">✓</span>
                  <span>Mail Handling & Forwarding</span>
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-300 mr-3 text-2xl">✓</span>
                  <span>Meeting Room Access (Select Plans)</span>
                </li>
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/pricing">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto text-lg">
                    View Pricing Plans →
                  </Button>
                </Link>
                <a href="tel:+919876543210">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg border-white text-white hover:bg-white hover:text-primary-600">
                    📞 Call Now
                  </Button>
                </a>
              </div>
              
              <p className="mt-6 text-sm text-blue-100">
                🏢 Located 5 km from Hinjewadi IT Park | 🚀 Setup in 24 hours
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Get Started Today
              </h2>
              <p className="text-gray-600 mb-6">
                Fill the form below. We'll call you within 30 minutes!
              </p>
              <ContactForm source="homepage_hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">200+</div>
              <div className="text-gray-600">Active Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">5 km</div>
              <div className="text-gray-600">From Hinjewadi IT Park</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">24 hrs</div>
              <div className="text-gray-600">Setup Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">4.8★</div>
              <div className="text-gray-600">Google Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Pune Cowork */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Why Startups Choose Pune Cowork
            </h2>
            <p className="text-xl text-gray-600">
              The smartest way to establish your business presence in Pune
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card hover>
              <CardHeader>
                <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-3xl">📍</span>
                </div>
                <CardTitle>Prime Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Wadmukhwadi, Chakan - just 5 km from Hinjewadi IT Park. Perfect address for tech startups, freelancers, and growing businesses.
                </p>
              </CardContent>
            </Card>

            <Card hover>
              <CardHeader>
                <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-3xl">✓</span>
                </div>
                <CardTitle>GST Ready</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Government-approved address for GST registration. We provide NOC, address proof, and complete documentation support.
                </p>
              </CardContent>
            </Card>

            <Card hover>
              <CardHeader>
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-3xl">💰</span>
                </div>
                <CardTitle>Affordable Plans</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Starting at just ₹899/month. No security deposits, no hidden charges. Save 90% compared to physical office rent.
                </p>
              </CardContent>
            </Card>

            <Card hover>
              <CardHeader>
                <div className="w-14 h-14 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-3xl">📬</span>
                </div>
                <CardTitle>Mail Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Professional mail receiving, sorting, and forwarding. Get instant notifications via WhatsApp when mail arrives.
                </p>
              </CardContent>
            </Card>

            <Card hover>
              <CardHeader>
                <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-3xl">🤝</span>
                </div>
                <CardTitle>Meeting Rooms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Professional meeting rooms available. Impress clients with our fully-equipped conference facilities (included in Pro plans).
                </p>
              </CardContent>
            </Card>

            <Card hover>
              <CardHeader>
                <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-3xl">⚡</span>
                </div>
                <CardTitle>Quick Setup</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Start using your business address within 24 hours. No paperwork hassles. Everything handled digitally via WhatsApp.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              No hidden charges. Cancel anytime.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl">Basic</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">₹899</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>GST-registered address</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Mail handling (10/month)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Business registration support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Email & phone support</span>
                  </li>
                </ul>
                <Link href="/pricing">
                  <Button variant="outline" className="w-full">
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary-500 relative transform scale-105 shadow-xl">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Professional</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">₹1,999</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Everything in Basic</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Mail forwarding (25/month)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>2 meeting room hours/month</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Receptionist support</span>
                  </li>
                </ul>
                <Link href="/pricing">
                  <Button variant="primary" className="w-full">
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl">Premium</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">₹3,999</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Everything in Professional</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Unlimited mail handling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>8 meeting room hours/month</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Dedicated phone line</span>
                  </li>
                </ul>
                <Link href="/pricing">
                  <Button variant="outline" className="w-full">
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <p className="text-center mt-8 text-gray-600">
            All plans include: NOC, Address Proof, GST Support, WhatsApp Updates
          </p>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Perfect For Every Business Type
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">Startups</h3>
              <p className="text-gray-700">
                Establish credibility with a professional Pune address. Save capital for growth instead of office rent.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold mb-2">Freelancers</h3>
              <p className="text-gray-700">
                Separate personal and business address. Professional image for client meetings and invoicing.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
              <div className="text-4xl mb-4">🛒</div>
              <h3 className="text-xl font-bold mb-2">E-commerce</h3>
              <p className="text-gray-700">
                Mandatory GST registration address for online sellers. Marketplace-approved business location.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl">
              <div className="text-4xl mb-4">🌏</div>
              <h3 className="text-xl font-bold mb-2">Remote Teams</h3>
              <p className="text-gray-700">
                Legal business address for distributed teams. Meeting space for quarterly team gatherings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our virtual office services
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919876543210">
                <Button size="lg">Call +91 98765 43210</Button>
              </a>
              <a 
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline">WhatsApp Us</Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Establish Your Business in Pune?
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Join 200+ successful startups. Setup your virtual office in 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing">
              <Button size="lg" variant="secondary" className="text-lg">
                View All Plans & Pricing
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-primary-600">
                Schedule Free Consultation
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-blue-100">
            ⚡ Special Offer: First 50 signups get 20% off first 3 months
          </p>
        </div>
      </section>
    </>
  );
}
