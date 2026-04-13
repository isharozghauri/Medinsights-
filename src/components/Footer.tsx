import Link from 'next/link';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  ArrowUpRight,
} from 'lucide-react';

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
                Partner with MedInsights for data-driven decisions.
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
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent-light rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div>
                <span className="text-xl font-bold">
                  Med<span className="text-accent-light">Insights</span>
                </span>
                <p className="text-[10px] tracking-[0.2em] uppercase text-white/50">
                  Healthcare Research
                </p>
              </div>
            </div>
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
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
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
                    className="text-white/60 hover:text-accent-light transition-colors text-sm"
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
                    className="text-white/60 hover:text-accent-light transition-colors text-sm"
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
                    className="text-white/60 hover:text-accent-light transition-colors text-sm"
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
            <a href="mailto:info@medinsights.com" className="inline-flex items-center gap-2 hover:text-accent-light transition-colors">
              <Mail className="w-4 h-4" />
              info@medinsights.com
            </a>
            <a href="tel:+1-555-0123" className="inline-flex items-center gap-2 hover:text-accent-light transition-colors">
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
            &copy; {new Date().getFullYear()} MedInsights. All rights reserved.
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
