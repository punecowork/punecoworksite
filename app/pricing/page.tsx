import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { generateMetadata } from '@/lib/seo';
import Link from 'next/link';

export const metadata = generateMetadata({
  title: 'Pricing Plans - Virtual Office from ₹899/month',
  description: 'Transparent pricing for virtual office services in Pune. Basic (₹899), Professional (₹1,999), Premium (₹3,999). No hidden charges. Cancel anytime.',
  keywords: ['virtual office pricing pune', 'cheap virtual office pune', 'affordable business address'],
});

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-white pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Choose the perfect plan for your business. No setup fees. No hidden charges.
              Cancel anytime.
            </p>
            <div className="inline-flex items-center space-x-4 bg-green-50 border border-green-200 rounded-lg px-6 py-3">
              <span className="text-2xl">🎉</span>
              <div className="text-left">
                <div className="font-bold text-green-800">Limited Time Offer!</div>
                <div className="text-sm text-green-600">20% off first 3 months for new signups</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 -mt-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Plan */}
            <Card className="border-2 border-gray-200 flex flex-col">
              <CardHeader>
                <div className="text-center">
                  <div className="text-gray-600 font-semibold mb-2">BASIC</div>
                  <div className="mb-4">
                    <span className="text-5xl font-bold">₹899</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <div className="text-sm text-gray-500 line-through">₹1,099/month</div>
                  <div className="text-green-600 font-semibold mt-1">Save ₹200/month</div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-center mb-6">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Perfect for Startups
                  </span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl flex-shrink-0">✓</span>
                    <span><strong>GST-registered business address</strong> in Wadmukhwadi, Pune</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl flex-shrink-0">✓</span>
                    <span><strong>Mail handling</strong> - 10 items per month</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl flex-shrink-0">✓</span>
                    <span><strong>Business registration support</strong> (GST, MSME, etc.)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl flex-shrink-0">✓</span>
                    <span><strong>NOC & address proof</strong> documents</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl flex-shrink-0">✓</span>
                    <span><strong>WhatsApp notifications</strong> for mail arrival</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl flex-shrink-0">✓</span>
                    <span><strong>Email & phone support</strong> (10 AM - 6 PM)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3 text-xl flex-shrink-0">×</span>
                    <span className="text-gray-400">Meeting room access</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3 text-xl flex-shrink-0">×</span>
                    <span className="text-gray-400">Receptionist support</span>
                  </li>
                </ul>
                
                <Link href="/contact?plan=basic">
                  <Button variant="outline" className="w-full" size="lg">
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Professional Plan */}
            <Card className="border-2 border-primary-500 relative transform md:scale-105 shadow-2xl flex flex-col">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                ⭐ MOST POPULAR
              </div>
              <CardHeader>
                <div className="text-center">
                  <div className="text-primary-600 font-bold mb-2">PROFESSIONAL</div>
                  <div className="mb-4">
                    <span className="text-5xl font-bold">₹1,999</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <div className="text-sm text-gray-500 line-through">₹2,499/month</div>
                  <div className="text-green-600 font-semibold mt-1">Save ₹500/month</div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-center mb-6">
                  <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Best Value for Growing Businesses
                  </span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl flex-shrink-0">✓</span>
                    <span><strong>Everything in Basic plan</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl flex-shrink-0">✓</span>
                    <span><strong>Mail forwarding</strong> - 25 items per month</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl flex-shrink-0">✓</span>
                    <span><strong>2 meeting room hours</strong> per month</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl flex-shrink-0">✓</span>
                    <span><strong>Receptionist support</strong> for call handling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl flex-shrink-0">✓</span>
                    <span><strong>Priority customer support</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl flex-shrink-0">✓</span>
                    <span><strong>Scan & email service</strong> for urgent documents</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl flex-shrink-0">✓</span>
                    <span><strong>Business lounge access</strong> (working hours)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3 text-xl flex-shrink-0">×</span>
                    <span className="text-gray-400">Dedicated phone line</span>
                  </li>
                </ul>
                
                <Link href="/contact?plan=professional">
                  <Button variant="primary" className="w-full" size="lg">
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="border-2 border-gray-200 flex flex-col">
              <CardHeader>
                <div className="text-center">
                  <div className="text-gray-600 font-semibold mb-2">PREMIUM</div>
                  <div className="mb-4">
                    <span className="text-5xl font-bold">₹3,999</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <div className="text-sm text-gray-500 line-through">₹4,999/month</div>
                  <div className="text-green-600 font-semibold mt-1">Save ₹1,000/month</div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-center mb-6">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                    For Established Businesses
                  </span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl flex-shrink-0">✓</span>
                    <span><strong>Everything in Professional plan</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl flex-shrink-0">✓</span>
                    <span><strong>Unlimited mail handling & forwarding</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl flex-shrink-0">✓</span>
                    <span><strong>8 meeting room hours</strong> per month</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl flex-shrink-0">✓</span>
                    <span><strong>Dedicated phone line</strong> with your number</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl flex-shrink-0">✓</span>
                    <span><strong>24/7 support</strong> via WhatsApp</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl flex-shrink-0">✓</span>
                    <span><strong>Dedicated account manager</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl flex-shrink-0">✓</span>
                    <span><strong>Company name on building directory</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl flex-shrink-0">✓</span>
                    <span><strong>Free 1-day cabin access</strong> per month</span>
                  </li>
                </ul>
                
                <Link href="/contact?plan=premium">
                  <Button variant="outline" className="w-full" size="lg">
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Comparison Note */}
          <div className="text-center mt-12 max-w-3xl mx-auto">
            <p className="text-gray-600">
              ✨ All plans include: Government-approved address, NOC documents, GST registration support, 
              instant WhatsApp updates, no setup fees, and no long-term contracts.
            </p>
            <div className="mt-6">
              <Link href="/contact" className="text-primary-600 hover:text-primary-700 font-semibold">
                Not sure which plan? Get a free consultation →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Optional Add-ons</h2>
            <p className="text-gray-600">Customize your plan with additional services</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>📦 Extra Mail Handling</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-2">
                  <span>Additional 10 items</span>
                  <span className="font-bold">₹300/month</span>
                </div>
                <p className="text-sm text-gray-600">For businesses with higher mail volume</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>🤝 Meeting Room Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-2">
                  <span>Per hour</span>
                  <span className="font-bold">₹500/hour</span>
                </div>
                <p className="text-sm text-gray-600">Professional meeting space for client meetings</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>📞 Dedicated Phone Number</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-2">
                  <span>With call forwarding</span>
                  <span className="font-bold">₹999/month</span>
                </div>
                <p className="text-sm text-gray-600">Your own Pune number with receptionist</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>📄 Company Registration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-2">
                  <span>One-time service</span>
                  <span className="font-bold">₹5,999</span>
                </div>
                <p className="text-sm text-gray-600">Complete Pvt Ltd company registration assistance</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Pricing FAQs</h2>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Is there a setup fee?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  No! We don't charge any setup fees or security deposits. Pay only the monthly subscription.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What's the minimum contract period?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  No long-term contracts. You can subscribe monthly and cancel anytime with 30 days notice.
                  However, quarterly/annual subscriptions get additional discounts.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How is payment processed?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We accept UPI, bank transfer, debit/credit cards, and online payment gateways. 
                  Payment is collected on the 1st of every month via automated billing.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I upgrade or downgrade my plan?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes! You can change plans anytime. Upgrades are effective immediately. 
                  Downgrades take effect from the next billing cycle.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Are there any hidden charges?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Absolutely not. The price you see is what you pay. GST (18%) is additional. 
                  Optional add-ons are clearly listed with transparent pricing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join 200+ businesses using Pune Cowork virtual office services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Start Free Consultation
              </Button>
            </Link>
            <a href="tel:+919876543210">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600">
                Call +91 98765 43210
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
