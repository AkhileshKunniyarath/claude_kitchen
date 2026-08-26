import { Metadata } from "next";
import { siteConfig } from "@/data/site-config";

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function generateMetadata({
  title,
  description,
  path = "",
  ogImage,
  noIndex = false,
}: SEOProps = {}): Metadata {
  const siteTitle = title
    ? `${title} | Claude Kitchen`
    : "Claude Kitchen — Classic Biryani Hub, Bengaluru";

  const siteDescription =
    description ||
    "Experience the aroma of authentic slow-cooked dum biryani at Claude Kitchen, Bengaluru. Order via WhatsApp for delivery or catering.";

  const url = `${siteConfig.url}${path}`;
  const image = ogImage || siteConfig.ogImage;

  return {
    title: siteTitle,
    description: siteDescription,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: siteTitle,
      description: siteDescription,
      url,
      siteName: "Claude Kitchen",
      images: [
        {
          url: image,
          width: 1200,
          height: 1200,
          alt: "Claude Kitchen exact logo",
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: siteTitle,
      description: siteDescription,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Claude Kitchen",
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.line1,
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560034",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "12.9352",
    longitude: "77.6245",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "11:00",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "10:00",
      closes: "23:30",
    },
  ],
  servesCuisine: ["Hyderabadi", "Indian", "Biryani"],
  priceRange: "₹₹",
  image: `${siteConfig.url}/og/og-default.png`,
  sameAs: [
    siteConfig.social.instagram,
    siteConfig.social.facebook,
    siteConfig.social.youtube,
  ],
};
