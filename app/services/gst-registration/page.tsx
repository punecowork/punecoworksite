import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { ContactForm } from '@/components/ui/Form';
import { generateMetadata, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/seo';
import Script from 'next/script';
import Link from 'next/link';

export const metadata = generateMetadata({
  title: 'GST Registration in Pune | Get GSTIN in 7-10 Days | Pune Cowork',
  description: 'Fast GST registration services in Pune. Complete documentation support, NOC, address proof included. GST number in 7-10 days. Starting ₹899/month with virtual office.',
  keywords: ['gst registration pune', 'gst registration hinjewadi', 'gst number pune', 'business registration pune'],
});

export default function GSTRegistrationPage() {
  const serviceSchema = generateServiceSchema({
    name: 'GST Registration Service',
    description: 'Complete GST registration assistance with virtual office address in Pune',
    price: '899',
    duration: '7-10 days',
  });

  const faqSchema = generateFAQSchema([
    {
      question: 'How long does GST registration take?',
      answer: 'GST registration typically takes 7-10 working days from the date of application submission with complete documents.',
    },
    {
      question: 'What documents are needed for GST registration?',
      answer: 'You need PAN Card, Aadhaar Card, business proof (if applicable), bank statement, passport-size photos, and address proof. We provide the NOC and address proof for your business location.',
    },
    {
      question: 'Can I use your virtual office address for GST?',
      answer: 'Yes! Our government-approved address can be used for GST registration. We provide complete NOC and address proof documents.',
    },
    {
      question: 'What is the cost of GST registration?',
      answer: 'GST registration through government portal is free. Our service includes virtual office address (₹899/month onwards) with complete documentation support and assistance.',
    },
  ]);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services/virtual-office' },
    { name: 'GST Registration', url: '/services/gst-registration' },
  ]);

  return (
    <>
      <Script id="gst-registration-schema" type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </Script>
      <Script id="gst-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="gst-breadcrumb-schema" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              GST Registration in Pune
            </h1>
            <p className="text-2xl mb-8 text-blue-100">
              Get your GSTIN in 7-10 days with complete documentation support
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-3xl font-bold">₹899</div>
                <div className="text-sm">Starting price/month</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-3xl font-bold">7-10</div>
                <div className="text-sm">Days to get GSTIN</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm">Success rate</div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact?service=gst">
                <Button size="lg" variant="secondary">
                  Get Started Now
                </Button>
              </Link>
              <a href="tel:+919876543210">
                <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary-700">
                  📞 Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What is GST */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">What is GST Registration?</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              GST (Goods and Services Tax) registration is mandatory for businesses in India with turnover exceeding ₹20 lakhs 
              (₹10 lakhs for special category states). It provides a unique GSTIN (GST Identification Number) that allows you to 
              collect GST from customers and claim input tax credit.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Even if your turnover is below the threshold, voluntary GST registration can help establish credibility, 
              enable interstate business, and allow you to sell on major e-commerce platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Why GST is Important */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why GST Registration is Essential</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card hover>
              <CardHeader>
                <div className="text-4xl mb-4">✅</div>
                <CardTitle>Legal Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Mandatory for businesses above ₹20 lakhs turnover. Avoid penalties and legal issues.
                </p>
              </CardContent>
            </Card>

            <Card hover>
              <CardHeader>
                <div className="text-4xl mb-4">💰</div>
                <CardTitle>Input Tax Credit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Claim credit for GST paid on purchases, reducing your overall tax liability.
                </p>
              </CardContent>
            </Card>

            <Card hover>
              <CardHeader>
                <div className="text-4xl mb-4">🛒</div>
                <CardTitle>E-commerce Selling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Required to sell on Amazon, Flipkart, Meesho, and other online marketplaces.
                </p>
              </CardContent>
            </Card>

            <Card hover>
              <CardHeader>
                <div className="text-4xl mb-4">🌏</div>
                <CardTitle>Interstate Business</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sell products or services across state borders legally with proper GST compliance.
                </p>
              </CardContent>
            </Card>

            <Card hover>
              <CardHeader>
                <div className="text-4xl mb-4">🏢</div>
                <CardTitle>Business Credibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  GSTIN adds legitimacy. B2B clients prefer working with GST-registered businesses.
                </p>
              </CardContent>
            </Card>

            <Card hover>
              <CardHeader>
                <div className="text-4xl mb-4">🏦</div>
                <CardTitle>Business Loans</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Banks and NBFCs prefer GST-registered businesses for loans and credit facilities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Simple 4-Step Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Submit Documents</h3>
                  <p className="text-gray-600">
                    Provide PAN, Aadhaar, bank statement, and business details. We'll provide NOC and address proof.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Application Filing</h3>
                  <p className="text-gray-600">
                    Our team files your GST application on the government portal with accurate information.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Verification & Approval</h3>
                  <p className="text-gray-600">
                    Government verifies your documents and address. We coordinate any additional requirements.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Get Your GSTIN</h3>
                  <p className="text-gray-600">
                    Receive your GST certificate with unique GSTIN in 7-10 days. Start collecting GST immediately!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Documents Required</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-lg mb-4">👤 Personal Documents</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>PAN Card (mandatory)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Aadhaar Card</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Passport-size photograph</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Email ID & mobile number</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-4">🏢 Business Documents</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Bank statement (last 3 months)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Business address proof (we provide)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>NOC from property owner (we provide)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Business registration (if applicable)</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-900">
                    <strong>Note:</strong> We provide government-approved address proof and NOC for your business location.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">GST Registration Pricing</h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card hover className="border-2 border-transparent">
                <CardHeader>
                  <CardTitle className="text-center">Basic Plan</CardTitle>
                  <div className="text-center mt-4">
                    <div className="text-4xl font-bold text-primary-600">₹899</div>
                    <div className="text-gray-600">/month</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Virtual office address</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>GST registration support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>NOC & address proof</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Mail handling (10/month)</span>
                    </li>
                  </ul>
                  <Link href="/contact?plan=basic">
                    <Button className="w-full mt-6">
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card hover className="border-2 border-primary-500">
                <div className="bg-primary-500 text-white text-center py-2 rounded-t-lg">
                  <span className="font-bold">MOST POPULAR</span>
                </div>
                <CardHeader>
                  <CardTitle className="text-center">Professional</CardTitle>
                  <div className="text-center mt-4">
                    <div className="text-4xl font-bold text-primary-600">₹1,999</div>
                    <div className="text-gray-600">/month</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Everything in Basic</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>GST filing assistance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Mail forwarding (25/month)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>2 meeting room hours</span>
                    </li>
                  </ul>
                  <Link href="/contact?plan=professional">
                    <Button className="w-full mt-6">
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card hover className="border-2 border-transparent">
                <CardHeader>
                  <CardTitle className="text-center">Premium</CardTitle>
                  <div className="text-center mt-4">
                    <div className="text-4xl font-bold text-primary-600">₹3,999</div>
                    <div className="text-gray-600">/month</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
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
                      <span>8 meeting room hours</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Dedicated phone line</span>
                    </li>
                  </ul>
                  <Link href="/contact?plan=premium">
                    <Button className="w-full mt-6">
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
            <p className="text-center text-gray-600 mt-6">
              * Government GST registration is free. Prices above are for virtual office services with GST support.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How long does GST registration take?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    GST registration typically takes 7-10 working days from the date of application submission with 
                    complete documents. In some cases, it may be faster if verification is quick.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What documents are needed for GST registration?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    You need PAN Card, Aadhaar Card, business proof (if applicable), bank statement, passport-size photos, 
                    and address proof. We provide the NOC and address proof for your business location.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can I use your virtual office address for GST?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Yes! Our government-approved address in Wadmukhwadi, Pune can be used for GST registration. 
                    We provide complete NOC and address proof documents required by GST authorities.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What is the cost of GST registration?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    GST registration through the government portal is completely free. Our service includes virtual office 
                    address (₹899/month onwards) with complete documentation support and assistance throughout the process.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Is GST registration mandatory?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    GST registration is mandatory if your annual turnover exceeds ₹20 lakhs (₹10 lakhs for special category states). 
                    For e-commerce sellers and interstate businesses, it's mandatory regardless of turnover.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">Ready to Get Your GST Registration?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Join 500+ businesses who got their GSTIN with Pune Cowork
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Get Free Consultation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ContactForm source="gst_registration_page" />
                </CardContent>
              </Card>

              <div className="flex flex-col justify-center space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="font-bold text-xl mb-2">📞 Call Us Now</h3>
                  <p className="text-blue-100 mb-4">Speak to our GST expert</p>
                  <a href="tel:+919876543210">
                    <Button variant="secondary" className="w-full">
                      +91 98765 43210
                    </Button>
                  </a>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="font-bold text-xl mb-2">💬 WhatsApp Us</h3>
                  <p className="text-blue-100 mb-4">Get instant response</p>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary" className="w-full">
                      Start Chat
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
