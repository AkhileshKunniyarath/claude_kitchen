import Link from "next/link";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { InstagramIcon, FacebookIcon, YoutubeIcon } from "@/components/common/SocialIcons";
import { siteConfig } from "@/data/site-config";
import { BrandLogo } from "@/components/common/BrandLogo";

const footerLinks = {
  pages: [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/our-story", label: "Our Story" },
    { href: "/catering", label: "Catering" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Use" },
  ],
};

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden bg-[#1d0f0a] pt-16 pb-8 text-cream/80"
      aria-label="Site footer"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(211,92,48,0.18),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(199,138,67,0.12),_transparent_26%)]" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative grid grid-cols-1 gap-10 border-b border-cream/10 pb-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <BrandLogo variant="horizontal" theme="light" size="md" className="mb-4" />
            <p className="text-on-dark-soft mb-5 text-sm leading-7">
              Slow-cooked, layered biryani crafted in the traditional dum style.
              Every grain tells the story of patience and spice.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/10 bg-cream/10 transition-colors hover:bg-terracotta"
                aria-label="Claude Kitchen on Instagram"
              >
                <InstagramIcon
                className="w-4 h-4"
              />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/10 bg-cream/10 transition-colors hover:bg-terracotta"
                aria-label="Claude Kitchen on Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/10 bg-cream/10 transition-colors hover:bg-terracotta"
                aria-label="Claude Kitchen on YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h3 className="premium-kicker mb-4 text-gold">
              Pages
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.pages.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/78 transition-colors hover:text-terracotta"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="premium-kicker mb-4 text-gold">
              Find Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-cream/78">
                <MapPin size={15} className="text-gold mt-0.5 shrink-0" />
                <span>
                  {siteConfig.address.line1}
                  <br />
                  {siteConfig.address.line2}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2.5 text-sm text-cream/78 transition-colors hover:text-terracotta"
                >
                  <Phone size={15} className="text-gold shrink-0" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2.5 text-sm text-cream/78 transition-colors hover:text-terracotta"
                >
                  <Mail size={15} className="text-gold shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="premium-kicker mb-4 text-gold">
              Opening Hours
            </h3>
            <ul className="space-y-2.5">
              {siteConfig.hours.map((h) => (
                <li key={h.day} className="flex items-start gap-2.5">
                  <Clock size={14} className="text-gold mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs text-cream/58 uppercase tracking-wide">
                      {h.day}
                    </div>
                    <div className="text-sm text-cream/82">{h.time}</div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-5 inline-flex items-center gap-1.5">
              <span className="w-2 h-2 bg-leaf rounded-full animate-pulse"></span>
              <span className="text-xs text-cream/68">Open today</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative flex flex-col items-center justify-between gap-4 pt-8 md:flex-row">
          <p className="text-xs uppercase tracking-[0.18em] text-cream/58">
            © {new Date().getFullYear()} Claude Kitchen. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-[0.18em] text-cream/58 transition-colors hover:text-cream"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-xs uppercase tracking-[0.18em] text-cream/52">
            Menu prices and availability may change. Contact us to confirm.
          </p>
        </div>
      </div>
    </footer>
  );
}
