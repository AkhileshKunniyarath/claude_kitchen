import Link from "next/link";
import { Home, Phone } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center px-4 text-center">
      <div className="max-w-md mx-auto">
        <div className="text-8xl mb-6" aria-hidden="true">🍲</div>
        <h1 className="font-serif text-masala text-4xl md:text-5xl font-bold mb-4">
          Page Not Found
        </h1>
        <p className="text-masala/60 text-lg mb-3">
          Looks like this page wandered off like a missing handi lid.
        </p>
        <p className="text-masala/50 text-sm mb-10">
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            <Home size={18} />
            Back to Home
          </Link>
          <a href={`tel:${siteConfig.phone}`} className="btn-outline">
            <Phone size={18} />
            Call Us
          </a>
        </div>
      </div>
    </div>
  );
}
