import Link from "next/link";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { InstagramIcon, FacebookIcon, YoutubeIcon } from "@/components/common/SocialIcons";
import { BrandLogo } from "@/components/common/BrandLogo";
import connectDB from "@/lib/db";
import { SiteConfigModel } from "@/models/SiteConfig";
import { siteConfig as fallbackSiteConfig } from "@/data/site-config";

export async function Footer() {
  await connectDB();
  const dbConfig = await SiteConfigModel.findOne({}).lean();
  const siteConfig = dbConfig || fallbackSiteConfig;

  return (
    <footer
      className="relative overflow-hidden bg-ember pt-16 pb-8 text-ivory/80"
      aria-label="Site footer"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 18%, rgba(200,90,47,0.22), transparent 26%), radial-gradient(circle at 78% 22%, rgba(212,168,83,0.10), transparent 20%), radial-gradient(circle at 54% 75%, rgba(200,90,47,0.12), transparent 22%)",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(42,22,16,0.12),rgba(42,22,16,0.88))]" aria-hidden="true" />
      <div className="absolute inset-0 premium-grid opacity-[0.03]" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative grid grid-cols-1 gap-10 border-b border-ivory/8 pb-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <BrandLogo variant="stacked" theme="light" size="md" className="mb-5" />
            <p className="text-on-dark-soft mb-5 text-sm leading-7">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/10 bg-charcoal-warm transition-colors hover:bg-ember hover:border-ember/40"
                aria-label="Claude Kitchen on Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/10 bg-charcoal-warm transition-colors hover:bg-ember hover:border-ember/40"
                aria-label="Claude Kitchen on Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              {siteConfig.social.youtube && (
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/10 bg-charcoal-warm transition-colors hover:bg-ember hover:border-ember/40"
                  aria-label="Claude Kitchen on YouTube"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="premium-kicker mb-4 text-gold">Navigation</h3>
            <ul className="space-y-2.5">
              {["Menu", "Our Story", "Catering", "Gallery"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-sm text-ivory/65 transition-colors hover:text-ivory"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="premium-kicker mb-4 text-gold">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-ivory/65">
                <MapPin className="mt-0.5 shrink-0 text-gold" size={15} />
                <span>
                  {siteConfig.address.line1}
                  <br />
                  {siteConfig.address.line2}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2 text-sm text-ivory/65 transition-colors hover:text-ivory"
                >
                  <Phone className="shrink-0 text-gold" size={15} />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-sm text-ivory/65 transition-colors hover:text-ivory"
                >
                  <Mail className="shrink-0 text-gold" size={15} />
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="rounded-2xl border border-ivory/5 bg-ivory/[0.02] p-5">
            <h3 className="premium-kicker mb-3 text-gold">Opening Hours</h3>
            <ul className="space-y-3">
              {siteConfig.hours.map((schedule: any) => (
                <li key={schedule.day}>
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-ivory/45">
                    <Clock size={12} className="text-gold" />
                    {schedule.day}
                  </div>
                  <div className="mt-1 text-sm text-ivory/70 ml-5">
                    {schedule.time}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="relative mt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ivory/40">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy-policy"
                className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ivory/40 transition-colors hover:text-ivory/80"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ivory/40 transition-colors hover:text-ivory/80"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
