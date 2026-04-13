import Link from 'next/link';
import Image from 'next/image';
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ArrowUpRight,
} from 'lucide-react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const footerLinks = {
  services: [
    { name: 'Primary Research', href: '/services#primary-research' },
    { name: 'Secondary Research', href: '/services#secondary-research' },
    { name: 'Syndicated Research', href: '/services#syndicated-research' },
    { name: 'Consulting Services', href: '/services#consulting' },
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
    { name: 'Careers', href: '/contact' },
    { name: 'Contact', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold">
                Ready to Transform Your Healthcare Research?
              </h2>
              <p className="mt-2 text-white/70 text-lg">
                Partner with Medinsights+ for data-driven decisions.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-white font-semibold hover:bg-accent-light transition-all shadow-lg shadow-accent/25 whitespace-nowrap"
            >
              Schedule a Consultation
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/">
              <Image
                src={`${basePath}/logo-white.png`}
                alt="Medinsights+"
                width={220}
                height={44}
                className="h-11 w-auto"
              />
            </Link>
            <p className="mt-6 text-white/60 leading-relaxed max-w-sm">
              Empowering healthcare stakeholders with actionable market intelligence
              across North America and Europe. Your trusted partner in healthcare
              market research.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="X"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Industries
            </h3>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-8 text-sm text-white/50">
            <a href="mailto:info@medinsightsplus.com" className="inline-flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="w-4 h-4" />
              info@medinsightsplus.com
            </a>
            <a href="tel:+1-555-0123" className="inline-flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              +1 (555) 012-3456
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              New York | London | Frankfurt
            </span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} Medinsights+. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <Link href="#" className="hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white/60 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white/60 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
