import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Our Locations - Virtual Office Addresses in Pune | Pune Cowork',
  description: 'Professional virtual office locations across Pune. Wadmukhwadi near Hinjewadi IT Park, Wakad, Baner. Government-approved addresses for GST registration.',
  keywords: ['virtual office pune locations', 'business address hinjewadi', 'office address wakad', 'pune business locations'],
});

export default function LocationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Locations in Pune</h1>
            <p className="text-2xl text-blue-100 mb-8">
              Premium business addresses strategically located across Pune's business hubs
            </p>
            <Button href="/contact" size="lg" variant="secondary">
              Book a Visit
            </Button>
          </div>
        </div>
      </section>

      {/* Primary Location */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-semibold mb-4">
                🏢 PRIMARY LOCATION
              </span>
              <h2 className="text-4xl font-bold mb-4">Wadmukhwadi, Chakan</h2>
              <p className="text-xl text-gray-600">Just 5 km from Hinjewadi IT Park</p>
            </div>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Address Details</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="font-semibold text-lg mb-1">📍 Full Address</div>
                        <p className="text-gray-600">
                          Wadmukhwadi, Chakan<br />
                          Pune - 410501, Maharashtra
                        </p>
                      </div>
                      <div>
                        <div className="font-semibold text-lg mb-1">📞 Phone</div>
                        <p className="text-gray-600">+91 98765 43210</p>
                      </div>
                      <div>
                        <div className="font-semibold text-lg mb-1">📧 Email</div>
                        <p className="text-gray-600">info@punecowork.com</p>
                      </div>
                      <div>
                        <div className="font-semibold text-lg mb-1">🕐 Business Hours</div>
                        <p className="text-gray-600">
                          Mon-Fri: 9:00 AM - 6:00 PM<br />
                          Sat: 10:00 AM - 3:00 PM<br />
                          Sun: Closed
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-6">Location Benefits</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 text-xl">✓</span>
                        <span><strong>5 km from Hinjewadi IT Park</strong> - Perfect for tech startups</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 text-xl">✓</span>
                        <span><strong>15 minutes drive</strong> from Hinjewadi Phase 1, 2, 3</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 text-xl">✓</span>
                        <span><strong>Government-approved</strong> for GST and company registration</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 text-xl">✓</span>
                        <span><strong>Free parking</strong> available for client visits</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 text-xl">✓</span>
                        <span><strong>Meeting rooms</strong> with professional setup</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 text-xl">✓</span>
                        <span><strong>Easy access</strong> from Mumbai-Pune expressway</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gray-100 rounded-lg p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Get Directions</h3>
                <p className="text-gray-600">Use Google Maps for turn-by-turn navigation</p>
              </div>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-4xl mb-2">🗺️</div>
                  <p>Google Maps Embed</p>
                  <p className="text-sm">(Interactive map will be loaded here)</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <Button 
                  href="https://maps.google.com/?q=Wadmukhwadi,Chakan,Pune"
                  variant="primary"
                  target="_blank"
                >
                  Open in Google Maps
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Serving Businesses Across Pune</h2>
            <p className="text-center text-gray-600 mb-12">
              Our strategic location provides easy access to all major business hubs
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card hover>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl mb-3">🏢</div>
                  <h3 className="font-bold text-lg mb-2">Hinjewadi IT Park</h3>
                  <p className="text-gray-600 mb-2">5 km / 15 mins</p>
                  <p className="text-sm text-gray-500">Phase 1, 2, 3 accessible</p>
                </CardContent>
              </Card>

              <Card hover>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl mb-3">🏙️</div>
                  <h3 className="font-bold text-lg mb-2">Wakad</h3>
                  <p className="text-gray-600 mb-2">8 km / 20 mins</p>
                  <p className="text-sm text-gray-500">Residential & commercial</p>
                </CardContent>
              </Card>

              <Card hover>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl mb-3">🌆</div>
                  <h3 className="font-bold text-lg mb-2">Baner</h3>
                  <p className="text-gray-600 mb-2">12 km / 25 mins</p>
                  <p className="text-sm text-gray-500">Business district</p>
                </CardContent>
              </Card>

              <Card hover>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl mb-3">🏗️</div>
                  <h3 className="font-bold text-lg mb-2">Pimpri-Chinchwad</h3>
                  <p className="text-gray-600 mb-2">15 km / 30 mins</p>
                  <p className="text-sm text-gray-500">Industrial hub</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Location */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Wadmukhwadi Location?</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card hover>
                <CardHeader>
                  <div className="text-4xl mb-4">💰</div>
                  <CardTitle>Cost-Effective</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Prime Pune address at affordable rates. Save 90% compared to physical office in Hinjewadi.
                  </p>
                </CardContent>
              </Card>

              <Card hover>
                <CardHeader>
                  <div className="text-4xl mb-4">🎯</div>
                  <CardTitle>Strategic Position</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Perfect balance of accessibility and prestige. Close to IT parks without high costs.
                  </p>
                </CardContent>
              </Card>

              <Card hover>
                <CardHeader>
                  <div className="text-4xl mb-4">✅</div>
                  <CardTitle>Fully Compliant</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Government-approved for all business registrations. NOC and address proof provided.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Locations */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">🚀 Expansion Plans</h2>
            <p className="text-xl text-gray-700 mb-8">
              We're expanding! New locations coming soon to better serve you
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl mb-3">🏙️</div>
                  <h3 className="font-bold text-lg mb-2">Koregaon Park</h3>
                  <p className="text-gray-600 mb-2">Opening Q2 2026</p>
                  <p className="text-sm text-gray-500">Premium business district</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl mb-3">🌟</div>
                  <h3 className="font-bold text-lg mb-2">Viman Nagar</h3>
                  <p className="text-gray-600 mb-2">Opening Q3 2026</p>
                  <p className="text-sm text-gray-500">Near airport</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl mb-3">🏢</div>
                  <h3 className="font-bold text-lg mb-2">Magarpatta</h3>
                  <p className="text-gray-600 mb-2">Coming 2026</p>
                  <p className="text-sm text-gray-500">IT business park</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <p className="text-gray-600 mb-4">
                Want to be notified when new locations open?
              </p>
              <Button href="/contact" size="lg">
                Join Waitlist
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Visit our office or start your virtual office setup online in minutes
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact" size="lg" variant="secondary">
                Schedule a Visit
              </Button>
              <Button href="/pricing" size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary-700">
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
