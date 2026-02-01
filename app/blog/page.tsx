import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { generateMetadata } from '@/lib/seo';
import Link from 'next/link';

export const metadata = generateMetadata({
  title: 'Blog - Virtual Office Tips & Business Guides | Pune Cowork',
  description: 'Expert insights on virtual offices, GST registration, business setup, and entrepreneurship in Pune. Tips for startups and freelancers.',
  keywords: ['virtual office tips', 'business setup pune', 'gst registration guide', 'startup advice'],
});

const blogPosts = [
  {
    slug: 'why-virtual-office-pune-startups',
    title: 'Why Every Pune Startup Needs a Virtual Office in 2026',
    excerpt: 'Discover how virtual offices are helping Pune startups save ₹50,000+ annually while maintaining professional credibility.',
    category: 'Startups',
    date: '2026-01-28',
    readTime: '5 min',
    image: '📊',
  },
  {
    slug: 'gst-registration-complete-guide',
    title: 'Complete Guide to GST Registration for Beginners',
    excerpt: 'Step-by-step guide to getting your GSTIN in 7-10 days. Documents, process, and common mistakes to avoid.',
    category: 'GST',
    date: '2026-01-25',
    readTime: '8 min',
    image: '📝',
  },
  {
    slug: 'hinjewadi-business-address-benefits',
    title: '5 Benefits of Having a Hinjewadi Business Address',
    excerpt: 'Why Hinjewadi IT Park is the perfect location for your registered business address. Location advantages explained.',
    category: 'Location',
    date: '2026-01-22',
    readTime: '4 min',
    image: '📍',
  },
  {
    slug: 'virtual-office-vs-coworking-space',
    title: 'Virtual Office vs Coworking Space: Which is Right for You?',
    excerpt: 'Compare costs, benefits, and use cases. Make the right choice for your business needs and budget.',
    category: 'Comparison',
    date: '2026-01-20',
    readTime: '6 min',
    image: '⚖️',
  },
  {
    slug: 'e-commerce-business-setup-pune',
    title: 'How to Setup Your E-commerce Business in Pune',
    excerpt: 'Everything you need to know about registering an online business, GST for e-commerce, and compliance requirements.',
    category: 'E-commerce',
    date: '2026-01-18',
    readTime: '7 min',
    image: '🛒',
  },
  {
    slug: 'meeting-room-etiquette-tips',
    title: 'Professional Meeting Room Etiquette: 10 Essential Tips',
    excerpt: 'Make great impressions with clients. Meeting room best practices for startups and freelancers.',
    category: 'Professional Tips',
    date: '2026-01-15',
    readTime: '5 min',
    image: '🤝',
  },
];

const categories = ['All', 'Startups', 'GST', 'Location', 'E-commerce', 'Professional Tips'];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Pune Cowork Blog</h1>
            <p className="text-2xl text-blue-100 mb-8">
              Expert insights for startups, freelancers, and entrepreneurs in Pune
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === 'All' ? 'primary' : 'outline'}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.slug} hover className="flex flex-col">
                  <CardHeader>
                    <div className="text-6xl mb-4 text-center">{post.image}</div>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                      <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-gray-600 mb-4 flex-1">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      <Link href={`/blog/${post.slug}`} className="text-primary-600 font-semibold hover:underline">
                        Read More →
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-blue-100 mb-8">
              Get the latest tips, guides, and updates delivered to your inbox
            </p>
            <div className="bg-white rounded-lg p-2 flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded text-gray-900 focus:outline-none"
              />
              <Button variant="primary" size="lg">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-blue-200 mt-4">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Popular Topics</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card hover>
                <CardContent className="pt-6">
                  <div className="text-3xl mb-3">🏢</div>
                  <h3 className="font-bold text-lg mb-2">Virtual Office Setup</h3>
                  <p className="text-gray-600 mb-4">Learn how to establish your business presence with a professional address.</p>
                  <Link href="#" className="text-primary-600 font-semibold hover:underline">
                    Browse Articles →
                  </Link>
                </CardContent>
              </Card>

              <Card hover>
                <CardContent className="pt-6">
                  <div className="text-3xl mb-3">📝</div>
                  <h3 className="font-bold text-lg mb-2">GST & Compliance</h3>
                  <p className="text-gray-600 mb-4">Complete guides on GST registration, filing, and staying compliant.</p>
                  <Link href="#" className="text-primary-600 font-semibold hover:underline">
                    Browse Articles →
                  </Link>
                </CardContent>
              </Card>

              <Card hover>
                <CardContent className="pt-6">
                  <div className="text-3xl mb-3">🚀</div>
                  <h3 className="font-bold text-lg mb-2">Startup Growth</h3>
                  <p className="text-gray-600 mb-4">Tips and strategies for scaling your startup in Pune's ecosystem.</p>
                  <Link href="#" className="text-primary-600 font-semibold hover:underline">
                    Browse Articles →
                  </Link>
                </CardContent>
              </Card>

              <Card hover>
                <CardContent className="pt-6">
                  <div className="text-3xl mb-3">💼</div>
                  <h3 className="font-bold text-lg mb-2">Freelancer Resources</h3>
                  <p className="text-gray-600 mb-4">Essential information for independent professionals and consultants.</p>
                  <Link href="#" className="text-primary-600 font-semibold hover:underline">
                    Browse Articles →
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Business in Pune?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Get your virtual office setup in 24 hours
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/pricing">
                <Button size="lg">
                  View Pricing
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
