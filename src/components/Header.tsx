'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Services',
    href: '/services',
    children: [
      {
        name: 'Primary Research',
        href: '/services/primary-research',
        description: 'Qualitative & quantitative insights from KOLs, HCPs, and patients',
      },
      {
        name: 'Secondary Research',
        href: '/services/secondary-research',
        description: 'Comprehensive desk research and data analysis',
      },
      {
        name: 'Syndicated Reports',
        href: '/services/syndicated-reports',
        description: 'Pre-built market reports across therapeutic areas',
      },
      {
        name: 'Consulting',
        href: '/services/consulting',
        description: 'Strategic advisory for healthcare organizations',
      },
    ],
  },
  { name: 'Industries', href: '/industries' },
  { name: 'Insights', href: '/insights' },
  { name: 'Join Our Panel', href: '/join-panel' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleServicesEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
      servicesTimeoutRef.current = null;
    }
    setServicesOpen(true);
  };

  const handleServicesLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 150);
  };

  const isHomePage = pathname === '/';
  const showTransparent = !scrolled && isHomePage;

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-[0_1px_3px_rgba(0,0,0,0.08)]'
          : isHomePage
          ? 'bg-transparent'
          : 'bg-primary'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 relative z-10">
            <Image
              src={
                scrolled
                  ? `${basePath}/logo-color.png`
                  : `${basePath}/logo-white.png`
              }
              alt="Medinsights+"
              width={240}
              height={48}
              className="h-10 sm:h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-0.5">
            {navigation.map((item) =>
              item.children ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={handleServicesEnter}
                  onMouseLeave={handleServicesLeave}
                >
                  <button
                    className={`nav-link inline-flex items-center gap-1 px-4 py-2 text-[0.8125rem] font-medium tracking-wide transition-colors rounded-lg ${
                      isActive(item.href)
                        ? showTransparent
                          ? 'text-primary'
                          : scrolled
                          ? 'text-primary'
                          : 'text-accent'
                        : showTransparent
                        ? 'text-white/90 hover:text-white'
                        : scrolled
                        ? 'text-slate-600 hover:text-primary'
                        : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {item.name}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        servicesOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Dropdown */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-300 ${
                      servicesOpen
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-2 pointer-events-none'
                    }`}
                  >
                    <div className="w-[340px] bg-white rounded-xl shadow-[0_20px_60px_-12px_rgba(2,43,135,0.15)] border border-slate-100/80 py-2 overflow-hidden">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="group flex flex-col gap-0.5 px-5 py-3 transition-colors hover:bg-slate-50"
                        >
                          <span className="text-sm font-semibold text-slate-800 group-hover:text-primary transition-colors">
                            {child.name}
                          </span>
                          <span className="text-xs text-slate-400 leading-relaxed">
                            {child.description}
                          </span>
                        </Link>
                      ))}
                      <div className="border-t border-slate-100 mt-1 pt-1">
                        <Link
                          href="/services"
                          className="group flex items-center gap-2 px-5 py-3 text-sm font-medium text-accent hover:text-accent-dark transition-colors"
                        >
                          View all services
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`nav-link px-4 py-2 text-[0.8125rem] font-medium tracking-wide transition-colors rounded-lg ${
                    isActive(item.href)
                      ? showTransparent
                        ? 'text-primary'
                        : scrolled
                        ? 'text-primary'
                        : 'text-accent'
                      : showTransparent
                      ? 'text-white/90 hover:text-white'
                      : scrolled
                      ? 'text-slate-600 hover:text-primary'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}

            <Link
              href="/contact"
              className="ml-5 inline-flex items-center gap-2 px-6 py-2.5 rounded-sm bg-primary text-white text-sm font-semibold hover:bg-primary-light transition-all duration-300 shadow-[0_4px_16px_rgba(11,31,74,0.25)] hover:shadow-[0_8px_30px_rgba(11,31,74,0.35)] hover:-translate-y-px"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2.5 rounded-xl transition-colors ${
              showTransparent
                ? 'text-white hover:bg-white/10'
                : scrolled
                ? 'text-slate-700 hover:bg-slate-100'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-20 z-40 transition-all duration-300 ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`relative mx-4 mt-2 bg-white rounded-2xl shadow-[0_20px_60px_-12px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden max-h-[calc(100vh-6rem)] overflow-y-auto transition-all duration-300 ${
            mobileMenuOpen
              ? 'translate-y-0 opacity-100'
              : '-translate-y-4 opacity-0'
          }`}
        >
          <div className="p-4">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  <>
                    <button
                      onClick={() =>
                        setMobileServicesOpen(!mobileServicesOpen)
                      }
                      className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-medium transition-colors ${
                        isActive(item.href)
                          ? 'bg-primary/5 text-primary'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {item.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          mobileServicesOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        mobileServicesOpen
                          ? 'max-h-96 opacity-100'
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="ml-4 border-l-2 border-accent/20 pl-4 py-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className={`block px-4 py-2.5 text-sm transition-colors rounded-lg ${
                              isActive(child.href)
                                ? 'text-primary font-medium'
                                : 'text-slate-500 hover:text-primary hover:bg-slate-50'
                            }`}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`block px-4 py-3.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'bg-primary/5 text-primary'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            <div className="mt-4 pt-4 border-t border-slate-100">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-full bg-accent text-white text-sm font-semibold hover:bg-accent-dark transition-colors shadow-[0_4px_16px_rgba(0,211,216,0.3)]"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
