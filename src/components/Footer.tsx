import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, ArrowUpRight, ArrowRight } from 'lucide-react';

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
    { name: 'Research Agencies', href: '/industries#agencies' },
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
    <footer className="bg-white">
      {/* CTA Banner - Navy */}
      <div className="bg-primary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14 sm:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h2 className="text-white text-2xl sm:text-3xl font-bold leading-tight">
                Ready to transform your healthcare research?
              </h2>
              <p className="mt-3 text-white/70 text-base max-w-xl">
                Partner with Medinsights+ for data-driven decisions that accelerate your market success.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white text-primary font-semibold text-sm hover:bg-accent hover:text-white hover:no-underline transition-all duration-200 whitespace-nowrap"
            >
              Schedule a Consultation <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer - Light */}
      <div className="border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-4">
              <Link href="/" className="inline-block hover:no-underline">
                <Image
                  src={`${basePath}/logo-color.png`}
                  alt="Medinsights+"
                  width={220}
                  height={44}
                  className="h-10 w-auto"
                />
              </Link>
              <p className="mt-6 text-gray-600 leading-relaxed text-sm max-w-sm">
                Empowering healthcare stakeholders with actionable market intelligence. Your trusted partner for pharmaceutical, biotechnology, and medtech research worldwide.
              </p>

              {/* Social Icons */}
              <div className="mt-6 flex gap-2">
                <a
                  href="#"
                  className="w-9 h-9 rounded-md border border-gray-200 flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-md border border-gray-200 flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary transition-colors"
                  aria-label="X (Twitter)"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-2 lg:col-start-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-primary mb-4">
                Services
              </h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-primary hover:no-underline transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-primary mb-4">
                Industries
              </h3>
              <ul className="space-y-3">
                {footerLinks.industries.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-primary hover:no-underline transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-primary mb-4">
                Company
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-primary hover:no-underline transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-gray-100 space-y-2.5">
                <a
                  href="mailto:info@medinsightsplus.com"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary hover:no-underline transition-colors"
                >
                  <Mail className="w-4 h-4 text-accent" />
                  info@medinsightsplus.com
                </a>
                <a
                  href="tel:+1-212-555-0123"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary hover:no-underline transition-colors"
                >
                  <Phone className="w-4 h-4 text-accent" />
                  +1 (212) 555-0123
                </a>
                <div className="flex items-start gap-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <span>New York · London · Singapore</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} Medinsights+. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-gray-500">
              <Link href="#" className="hover:text-primary hover:no-underline transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-primary hover:no-underline transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-primary hover:no-underline transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
