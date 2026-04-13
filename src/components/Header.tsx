'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Services',
    href: '/services',
    children: [
      { name: 'Primary Research', href: '/services#primary-research' },
      { name: 'Secondary Research', href: '/services#secondary-research' },
      { name: 'Syndicated Research', href: '/services#syndicated-research' },
      { name: 'Consulting', href: '/services#consulting' },
    ],
  },
  { name: 'Industries', href: '/industries' },
  { name: 'Insights', href: '/insights' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div className="ml-3">
                <span className={`text-xl font-bold tracking-tight ${scrolled ? 'text-primary' : 'text-white'}`}>
                  Med<span className="text-accent">Insights</span>
                </span>
                <p className={`text-[10px] tracking-[0.2em] uppercase ${scrolled ? 'text-slate-500' : 'text-white/70'}`}>
                  Healthcare Research
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navigation.map((item) =>
              item.children ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={`nav-link inline-flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${
                      pathname === item.href
                        ? 'text-accent'
                        : scrolled
                        ? 'text-slate-700 hover:text-accent'
                        : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {item.name}
                    <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                  </Link>
                  {servicesOpen && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-slate-100 py-2 animate-in fade-in slide-in-from-top-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-accent transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`nav-link px-4 py-2 text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? 'text-accent'
                      : scrolled
                      ? 'text-slate-700 hover:text-accent'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
            <Link
              href="/contact"
              className="ml-4 inline-flex items-center px-5 py-2.5 rounded-full bg-accent text-white text-sm font-semibold hover:bg-accent-dark transition-all shadow-lg shadow-accent/25 hover:shadow-accent/40"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-slate-700' : 'text-white'}`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white rounded-2xl shadow-xl mt-2 p-4 border border-slate-100">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium ${
                    pathname === item.href
                      ? 'bg-accent/10 text-accent'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="ml-4 border-l-2 border-slate-100 pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-slate-500 hover:text-accent"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="block mt-4 text-center px-5 py-3 rounded-full bg-accent text-white text-sm font-semibold"
            >
              Get Started
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
