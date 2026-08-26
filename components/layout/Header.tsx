"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { useSiteConfig } from "@/providers/SiteConfigProvider";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { analyticsEvents } from "@/lib/analytics";
import { WhatsAppIcon } from "@/components/common/SocialIcons";
import { BrandLogo } from "@/components/common/BrandLogo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/our-story", label: "Our Story" },
  { href: "/catering", label: "Catering" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const siteConfig = useSiteConfig();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <header
      className="fixed left-0 right-0 top-0 z-50 transition-all duration-300"
      role="banner"
    >
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <div className={`flex h-16 items-center justify-between rounded-full border px-4 md:h-20 md:px-6 transition-all border-sand bg-ivory/95 shadow-[0_16px_35px_rgba(42,22,16,0.08)] backdrop-blur-xl`}>
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Claude Kitchen — Home"
          >
            <BrandLogo variant="mark" theme="dark" size="sm" className="sm:hidden" />
            <BrandLogo
              variant="mark"
              theme="dark"
              size="md"
              className="hidden transition-transform group-hover:scale-[1.02] sm:inline-flex"
            />
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] transition-colors text-charcoal/70 hover:bg-ember/10 hover:text-ember"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phone}`}
              onClick={() => analyticsEvents.phoneClick("header")}
              className="flex items-center gap-2 text-sm font-medium transition-colors text-charcoal hover:text-ember"
              aria-label={`Call us at ${siteConfig.phone}`}
            >
              <Phone size={16} />
              <span className="hidden lg:inline">{siteConfig.phone}</span>
            </a>
            <a
              href={getWhatsAppUrl(siteConfig.whatsapp, "general")}
              onClick={() => analyticsEvents.whatsappOrderClick("header")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-5 py-2.5 text-sm"
              aria-label="Order on WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4" aria-hidden="true" />
              Order Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="rounded-full p-2 transition-colors lg:hidden text-charcoal hover:bg-ember/10"
            aria-expanded={isMobileOpen}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {isMobileOpen && (
          <div
          className="fixed inset-0 top-20 z-40 overflow-y-auto bg-ivory/96 backdrop-blur-sm lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="px-6 py-8 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="py-3 text-lg font-medium text-charcoal hover:text-ember border-b border-sand transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={`tel:${siteConfig.phone}`}
                onClick={() => {
                  analyticsEvents.phoneClick("mobile-menu");
                  setIsMobileOpen(false);
                }}
                className="btn-outline justify-center"
              >
                <Phone size={18} /> Call Us
              </a>
              <a
                href={getWhatsAppUrl(siteConfig.whatsapp, "general")}
                onClick={() => {
                  analyticsEvents.whatsappOrderClick("mobile-menu");
                  setIsMobileOpen(false);
                }}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary justify-center"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
