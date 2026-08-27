import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingOrderButton } from "@/components/common/FloatingOrderButton";
import { GTMScript, GTMNoScript } from "@/components/analytics/GTM";
import { restaurantSchema } from "@/lib/seo";
import connectDB from "@/lib/db";
import { SiteConfigModel } from "@/models/SiteConfig";
import { siteConfig as fallbackSiteConfig } from "@/data/site-config";
import { SiteConfigProvider } from "@/providers/SiteConfigProvider";
import { ConditionalLayout } from "@/components/layout/ConditionalLayout";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  let config: any = fallbackSiteConfig;
  try {
    const db = await connectDB();
    if (db) {
      config = (await SiteConfigModel.findOne({}).lean()) || fallbackSiteConfig;
    }
  } catch {
    // DB unavailable — use fallback config
  }

  return {
    title: {
      default: `${config.name} — Classic Biryani Hub, Bengaluru`,
      template: `%s | ${config.name}`,
    },
    description: config.description,
    metadataBase: new URL(config.url),
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
    authors: [{ name: config.name }],
    creator: config.name,
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: config.name,
    },
    icons: {
      icon: [
        { url: "/logo/claude-kitchen-lockup-stacked.png", sizes: "512x512", type: "image/png" },
      ],
      shortcut: "/logo/claude-kitchen-lockup-stacked.png",
      apple: "/logo/claude-kitchen-lockup-stacked.png",
    },
    manifest: "/site.webmanifest",
  };
}

export const viewport: Viewport = {
  themeColor: "#1C1412",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let dbConfig: any = null;
  try {
    const db = await connectDB();
    if (db) {
      dbConfig = await SiteConfigModel.findOne({}).lean();
    }
  } catch {
    // DB unavailable — use fallback config
  }
  if (!dbConfig) dbConfig = fallbackSiteConfig as any;

  // Deep serialize to convert any remaining ObjectIds to strings
  const serializedConfig = JSON.parse(JSON.stringify(dbConfig));

  return (
    <html lang="en">
      <head>
        <GTMScript config={serializedConfig as any} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(restaurantSchema),
          }}
        />
      </head>
      <body>
        <SiteConfigProvider config={serializedConfig as any}>
          <GTMNoScript config={serializedConfig as any} />
          <ConditionalLayout
            header={<Header />}
            footer={<Footer />}
            floatingButton={<FloatingOrderButton />}
          >
            {children}
          </ConditionalLayout>
        </SiteConfigProvider>
      </body>
    </html>
  );
}
