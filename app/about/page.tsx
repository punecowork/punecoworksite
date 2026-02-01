import { Card } from '@/components/ui/Card';
import { ContactForm } from '@/components/ui/Form';
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'About Us - Pune Cowork Virtual Office Solutions',
  description: 'Learn about Pune Cowork - your trusted partner for virtual office services in Pune. Serving 200+ startups since 2020.',
});

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-900 text-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Pune Cowork
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Empowering Pune's startups and businesses with premium virtual office solutions since 2020
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Founded in 2020, Pune Cowork was born from a simple observation: 
                  talented entrepreneurs in Pune were spending huge amounts on physical office 
                  spaces when all they needed was a registered business address.
                </p>
                <p className="text-gray-600 mb-4">
                  We started with a vision to help startups save capital while establishing 
                  credibility. Today, we proudly serve 200+ businesses ranging from solo 
                  freelancers to growing tech startups.
                </p>
                <p className="text-gray-600">
                  Located strategically near Hinjewadi IT Park, we understand the needs of 
                  Pune's dynamic business ecosystem and are committed to supporting your growth journey.
                </p>
              </div>
              <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
                <span className="text-6xl">🏢</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16">
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">200+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">4.8★</div>
                <div className="text-gray-600">Google Rating</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
                <div className="text-gray-600">GST Registrations</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">3+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To democratize business setup in Pune by providing affordable, 
                  hassle-free virtual office solutions that help entrepreneurs focus 
                  on growing their business instead of worrying about office logistics.
                </p>
              </Card>
              
              <Card className="p-8">
                <div className="text-4xl mb-4">👁️</div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To become Pune's most trusted virtual office provider, supporting 
                  1000+ businesses by 2026 and expanding our presence to other tier-2 
                  cities in Maharashtra.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Trust</h3>
                <p className="text-gray-600">
                  We build lasting relationships with our clients based on transparency 
                  and reliability.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Speed</h3>
                <p className="text-gray-600">
                  Quick setup, instant support, and rapid response times define our 
                  service delivery.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💰</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Affordability</h3>
                <p className="text-gray-600">
                  Premium services at prices that won't break your startup's budget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Businesses Choose Us</h2>
            
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start">
                  <span className="text-3xl mr-4">📍</span>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Strategic Location</h3>
                    <p className="text-gray-600">
                      Just 5 km from Hinjewadi IT Park, our address gives your business 
                      credibility in Pune's premier tech hub.
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-start">
                  <span className="text-3xl mr-4">✅</span>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Government Approved</h3>
                    <p className="text-gray-600">
                      Our address is approved for GST registration, company registration, 
                      and all official purposes. We provide NOC and address proof.
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-start">
                  <span className="text-3xl mr-4">⚡</span>
                  <div>
                    <h3 className="text-xl font-bold mb-2">24-Hour Setup</h3>
                    <p className="text-gray-600">
                      Start using your business address within 24 hours of signup. 
                      No paperwork hassles, everything digital via WhatsApp.
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-start">
                  <span className="text-3xl mr-4">💬</span>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Exceptional Support</h3>
                    <p className="text-gray-600">
                      Dedicated support team available via WhatsApp, phone, and email. 
                      We respond within 30 minutes during business hours.
                    </p>
                  </div>
                </div>
              </Card>
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
                  Ready to Join 200+ Successful Businesses?
                </h2>
                <p className="text-xl text-blue-100 mb-6">
                  Get your virtual office setup in 24 hours. No hassles, no hidden charges.
                </p>
                <a href="tel:+919876543210" className="text-yellow-300 font-semibold text-lg">
                  📞 Call +91 98765 43210
                </a>
              </div>
              
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Get Started Today
                </h3>
                <ContactForm source="about_page" />
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
