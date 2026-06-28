import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingOrderButton } from "@/components/common/FloatingOrderButton";
import { GTMScript, GTMNoScript } from "@/components/analytics/GTM";
import { restaurantSchema } from "@/lib/seo";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: {
    default: "Claude Kitchen — Classic Biryani Hub, Bengaluru",
    template: "%s | Claude Kitchen",
  },
  description:
    "Experience the aroma of authentic slow-cooked dum biryani at Claude Kitchen, Bengaluru. Order via WhatsApp for delivery or catering.",
  metadataBase: new URL(siteConfig.url),
  keywords: [
    "biryani Bengaluru",
    "dum biryani",
    "Hyderabadi biryani",
    "chicken biryani",
    "mutton biryani",
    "catering Bengaluru",
    "family pack biryani",
    "Claude Kitchen",
    "best biryani Koramangala",
  ],
  authors: [{ name: "Claude Kitchen" }],
  creator: "Claude Kitchen",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Claude Kitchen",
  },
  icons: {
    icon: [
      { url: "/logo/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/logo/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/logo/icon-192.png",
    apple: "/logo/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GTMScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(restaurantSchema),
          }}
        />
      </head>
      <body>
        <GTMNoScript />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingOrderButton />
      </body>
    </html>
  );
}
