export default function Head() {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Bellerose Tile & Building Material",
      "description": "Your one-stop destination for premium construction essentials",
      "url": "https://bellerosetile.com",
      "telephone": "+15551234567",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "248-27 Jericho Turnpike",
        "addressLocality": "Bellerose",
        "addressRegion": "NY",
        "postalCode": "11426",
        "addressCountry": "US"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "07:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "07:00",
          "closes": "17:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "09:00",
          "closes": "17:00"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Building Materials",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Tiles & Outdoor Pavers"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Power Tools"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Plumbing Supplies"
            }
          }
        ]
      }
    }
  
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </>
    )
  }