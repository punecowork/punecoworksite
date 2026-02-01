import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { ContactForm } from '@/components/ui/Form';
import { generateMetadata, generateServiceSchema, generateFAQSchema } from '@/lib/seo';
import Link from 'next/link';

export const metadata = generateMetadata({
  title: 'Virtual Office in Pune - ₹899/month | Hinjewadi IT Park',
  description: 'Get a premium virtual office in Pune with GST-registered business address. Perfect for startups, freelancers & remote teams. Mail handling, meeting rooms & more.',
  keywords: ['virtual office pune hinjewadi', 'business address pune', 'registered office pune'],
});

export default function VirtualOfficePage() {
  const faqs = [
    {
      question: 'What is a virtual office?',
      answer: 'A virtual office gives you a professional business address and mail handling services without the need for physical office space. You can use this address for business registration, receiving mail, and meeting clients occasionally.',
    },
    {
      question: 'Can I use this address for my GST registration?',
      answer: 'Yes! Our address is government-approved and can be used for GST registration, company registration, and all official business purposes. We provide NOC and address proof documents.',
    },
    {
      question: 'How quickly can I start using the address?',
      answer: 'Within 24 hours of signup! We activate your account immediately and you can start using the business address for registration and correspondence right away.',
    },
    {
      question: 'Do I get physical access to the office?',
      answer: 'Professional and Premium plans include meeting room access. You can book meeting rooms for client meetings or team discussions. Basic plan customers can book meeting rooms at ₹500/hour.',
    },
  ];

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateServiceSchema({
              name: 'Virtual Office Services',
              description: 'Premium virtual office solutions in Pune with business address, mail handling, and meeting room access',
              price: '899',
              url: '/services/virtual-office',
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqs)),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Virtual Office in Pune
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Premium business address near Hinjewadi IT Park. GST-registered, 
              government-approved, ready to use in 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing">
                <Button size="lg" variant="secondary" className="text-lg">
                  View Plans & Pricing
                </Button>
              </Link>
              <a href="tel:+919876543210">
                <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-primary-600">
                  📞 Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What is Virtual Office */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              What is a Virtual Office?
            </h2>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-gray-700 text-lg">
                A virtual office provides your business with a professional physical address 
                and mail handling services without the need to rent expensive office space. 
                It's perfect for startups, freelancers, remote teams, and e-commerce businesses 
                who need a credible business presence without the overhead costs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-800">✓ With Virtual Office</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Professional Pune business address</li>
                    <li>• ₹899-3,999/month (save lakhs)</li>
                    <li>• No security deposit required</li>
                    <li>• Work from anywhere</li>
                    <li>• Meeting rooms when needed</li>
                    <li>• Mail handling included</li>
                    <li>• Setup in 24 hours</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="text-red-800">× Physical Office</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• High rent (₹10,000-50,000/month)</li>
                    <li>• Security deposit (3-6 months)</li>
                    <li>• Electricity, internet, maintenance</li>
                    <li>• Furniture & equipment costs</li>
                    <li>• Daily commute required</li>
                    <li>• Long-term lease commitments</li>
                    <li>• Setup takes weeks/months</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              Everything You Need
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Comprehensive virtual office solutions for modern businesses
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card hover>
                <CardHeader>
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-3xl">📍</span>
                  </div>
                  <CardTitle>Premium Business Address</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Get a prestigious Pune address in Wadmukhwadi, just 5 km from Hinjewadi IT Park. 
                    Use it for business cards, website, and all official purposes.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• GST registration approved</li>
                    <li>• Company registration approved</li>
                    <li>• NOC provided</li>
                    <li>• Address proof documents</li>
                  </ul>
                </CardContent>
              </Card>

              <Card hover>
                <CardHeader>
                  <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-3xl">📬</span>
                  </div>
                  <CardTitle>Mail Handling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    We receive, sort, and notify you about all your business mail via WhatsApp. 
                    Mail forwarding available to your doorstep.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Instant WhatsApp alerts</li>
                    <li>• Photo notifications</li>
                    <li>• Scan & email service</li>
                    <li>• Courier forwarding</li>
                  </ul>
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
                  <p className="text-gray-600 mb-4">
                    Professional meeting spaces for client meetings, investor presentations, 
                    or team discussions. Included in Pro plans.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Fully furnished rooms</li>
                    <li>• WiFi & projector</li>
                    <li>• Tea/coffee included</li>
                    <li>• Receptionist support</li>
                  </ul>
                </CardContent>
              </Card>

              <Card hover>
                <CardHeader>
                  <div className="w-14 h-14 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-3xl">📄</span>
                  </div>
                  <CardTitle>GST Registration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Complete support for GST registration process. We provide all necessary 
                    documents and guide you through the application.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• NOC certificate</li>
                    <li>• Address proof</li>
                    <li>• Documentation assistance</li>
                    <li>• Verification support</li>
                  </ul>
                </CardContent>
              </Card>

              <Card hover>
                <CardHeader>
                  <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-3xl">📞</span>
                  </div>
                  <CardTitle>Receptionist Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Professional receptionist to handle calls and visitors. Available in 
                    Professional and Premium plans.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Call answering</li>
                    <li>• Message taking</li>
                    <li>• Visitor handling</li>
                    <li>• Call forwarding</li>
                  </ul>
                </CardContent>
              </Card>

              <Card hover>
                <CardHeader>
                  <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-3xl">💬</span>
                  </div>
                  <CardTitle>24/7 Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Dedicated support team available via WhatsApp, phone, and email. 
                    Quick response times during business hours.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• WhatsApp support</li>
                    <li>• Email support</li>
                    <li>• Phone support</li>
                    <li>• Dedicated manager (Premium)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is It For */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Perfect For Every Business Type
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <span className="text-4xl">🚀</span>
                    <CardTitle>Startups & New Businesses</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Save capital for product development and marketing. Get a professional 
                    address for GST, company registration, and investor pitches without 
                    expensive office rent.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <span className="text-4xl">💼</span>
                    <CardTitle>Freelancers & Consultants</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Separate your business and personal address. Project professional image 
                    to clients. Use meeting rooms for client presentations when needed.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <span className="text-4xl">🛒</span>
                    <CardTitle>E-commerce Sellers</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Mandatory GST-registered address for selling on Amazon, Flipkart, Meesho. 
                    Keep your home address private. Handle all business correspondence professionally.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <span className="text-4xl">🌏</span>
                    <CardTitle>Remote & Distributed Teams</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Legal business address for remote-first companies. Meeting space for 
                    quarterly team gatherings. Professional address for legal and tax purposes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Get started in just 3 simple steps
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-2xl font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Choose Your Plan</h3>
                  <p className="text-gray-600 text-lg">
                    Select from Basic (₹899), Professional (₹1,999), or Premium (₹3,999) 
                    based on your requirements. All plans include GST-registered address.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-2xl font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Submit Documents</h3>
                  <p className="text-gray-600 text-lg">
                    Send us your PAN Card and Aadhaar via WhatsApp. We'll prepare your 
                    agreement and activate your account within 24 hours.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-2xl font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Start Using</h3>
                  <p className="text-gray-600 text-lg">
                    Receive your welcome kit with NOC and address proof. Start using your 
                    business address for GST registration, company registration, and more!
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link href="/contact">
                <Button size="lg" className="text-lg">
                  Get Started Now →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>

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
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Get Your Virtual Office?
                </h2>
                <p className="text-xl text-blue-100 mb-6">
                  Setup in 24 hours. No hassles, no hidden charges. Join 200+ successful businesses.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-green-400 mr-3 text-2xl">✓</span>
                    <span>Government-approved address</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-400 mr-3 text-2xl">✓</span>
                    <span>No security deposit required</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-400 mr-3 text-2xl">✓</span>
                    <span>Cancel anytime (30 days notice)</span>
                  </div>
                </div>
              </div>

              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Get Free Consultation
                </h3>
                <ContactForm source="virtual_office_page" />
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
