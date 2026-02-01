import type { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  noindex?: boolean;
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  canonicalUrl,
  ogImage = '/og-image.jpg',
  noindex = false,
}: SEOProps): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://punecowork.com';
  const fullTitle = title.includes('Pune Cowork') ? title : `${title} | Pune Cowork`;
  
  const defaultKeywords = [
    'virtual office pune',
    'GST registration pune',
    'business address pune',
    'hinjewadi virtual office',
    'coworking pune',
    'startup office pune',
  ];

  return {
    title: fullTitle,
    description,
    keywords: [...defaultKeywords, ...keywords].join(', '),
    authors: [{ name: 'Pune Cowork' }],
    creator: 'Pune Cowork',
    publisher: 'Pune Cowork',
    robots: noindex ? 'noindex, nofollow' : 'index, follow',
    alternates: {
      canonical: canonicalUrl || siteUrl,
    },
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      url: canonicalUrl || siteUrl,
      title: fullTitle,
      description,
      siteName: 'Pune Cowork',
      images: [
        {
          url: `${siteUrl}${ogImage}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [`${siteUrl}${ogImage}`],
    },
    verification: {
      google: 'your-google-verification-code',
    },
  };
}

// Schema.org JSON-LD Generators
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Pune Cowork',
    alternateName: 'Pune Cowork Virtual Office',
    url: process.env.NEXT_PUBLIC_APP_URL,
    logo: `${process.env.NEXT_PUBLIC_APP_URL}/logo.png`,
    description: 'Premium virtual office solutions for startups and businesses in Pune',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Wadmukhwadi, Chakan',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      postalCode: '410501',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-98765-43210',
      contactType: 'Customer Service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi', 'Marathi'],
    },
    sameAs: [
      'https://facebook.com/punecowork',
      'https://twitter.com/punecowork',
      'https://linkedin.com/company/punecowork',
    ],
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${process.env.NEXT_PUBLIC_APP_URL}/#localbusiness`,
    name: 'Pune Cowork',
    image: `${process.env.NEXT_PUBLIC_APP_URL}/og-image.jpg`,
    telephone: '+91-98765-43210',
    email: 'info@punecowork.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Wadmukhwadi, Chakan',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      postalCode: '410501',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 18.7528,
      longitude: 73.7949,
    },
    url: process.env.NEXT_PUBLIC_APP_URL,
    priceRange: '₹₹',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '15:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '47',
    },
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  price: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'Pune Cowork',
    },
    areaServed: {
      '@type': 'City',
      name: 'Pune',
    },
    offers: {
      '@type': 'Offer',
      price: service.price,
      priceCurrency: 'INR',
      url: `${process.env.NEXT_PUBLIC_APP_URL}${service.url}`,
    },
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${process.env.NEXT_PUBLIC_APP_URL}${item.url}`,
    })),
  };
}
