import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const footerLinks = {
  services: [
    { name: 'Primary Research', href: '/services/primary-research' },
    { name: 'Secondary Research', href: '/services/secondary-research' },
    { name: 'Syndicated Reports', href: '/services/syndicated-reports' },
    { name: 'Consulting', href: '/services/consulting' },
  ],
  industries: [
    { name: 'Pharmaceuticals', href: '/industries#pharmaceuticals' },
    { name: 'Biotechnology', href: '/industries#biotechnology' },
    { name: 'Medical Technology', href: '/industries#medtech' },
    { name: 'Market Research Agencies', href: '/industries#agencies' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Insights', href: '/insights' },
    { name: 'Join Our Panel', href: '/join-panel' },
    { name: 'Contact', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* CTA Banner */}
      <div className="relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-white blur-3xl" />
        </div>

        <div className="relative border-b border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                  Ready to Transform Your
                  <br className="hidden sm:block" />
                  <span className="text-accent"> Healthcare Research?</span>
                </h2>
                <p className="mt-3 text-white/60 text-base sm:text-lg max-w-xl">
                  Partner with Medinsights+ for data-driven decisions that
                  accelerate your market success worldwide.
                </p>
              </div>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-accent text-white font-semibold hover:bg-accent-light transition-all duration-300 shadow-[0_4px_20px_rgba(0,211,216,0.3)] hover:shadow-[0_8px_40px_rgba(0,211,216,0.4)] whitespace-nowrap hover:-translate-y-px"
              >
                Schedule a Consultation
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block">
              <Image
                src={`${basePath}/logo-white.png`}
                alt="Medinsights+"
                width={220}
                height={44}
                className="h-11 w-auto"
              />
            </Link>
            <p className="mt-6 text-white/50 leading-relaxed text-sm max-w-sm">
              Empowering healthcare stakeholders with actionable market
              intelligence worldwide. Your trusted partner for pharmaceutical,
              biotechnology, and medtech research across global markets.
            </p>

            {/* Social Icons */}
            <div className="mt-8 flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-[18px] h-[18px] text-white/60 group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300 group"
                aria-label="X (Twitter)"
              >
                <svg
                  className="w-[18px] h-[18px] text-white/60 group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/30 mb-5">
              Services
            </h3>
            <ul className="space-y-3.5">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group text-sm text-white/50 hover:text-accent transition-colors duration-300 inline-flex items-center gap-1"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/30 mb-5">
              Industries
            </h3>
            <ul className="space-y-3.5">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group text-sm text-white/50 hover:text-accent transition-colors duration-300 inline-flex items-center gap-1"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/30 mb-5">
              Company
            </h3>
            <ul className="space-y-3.5">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group text-sm text-white/50 hover:text-accent transition-colors duration-300 inline-flex items-center gap-1"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.06]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/40">
              <a
                href="mailto:info@medinsightsplus.com"
                className="inline-flex items-center gap-2 hover:text-accent transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                info@medinsightsplus.com
              </a>
              <a
                href="tel:+1-555-0123"
                className="inline-flex items-center gap-2 hover:text-accent transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                +1 (555) 012-3456
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                New York | London | Singapore | Frankfurt
              </span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Medinsights+. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/30">
            <Link
              href="/privacy"
              className="hover:text-white/50 transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-white/50 transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="hover:text-white/50 transition-colors duration-300"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
