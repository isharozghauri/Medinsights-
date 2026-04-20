'use client';

import { useState, useEffect, useCallback } from 'react';
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
      { name: 'Primary Research', href: '/services/primary-research', description: 'Qualitative & quantitative insights' },
      { name: 'Secondary Research', href: '/services/secondary-research', description: 'Desk research and data analysis' },
      { name: 'Syndicated Reports', href: '/services/syndicated-reports', description: 'Market reports across therapeutic areas' },
      { name: 'Consulting', href: '/services/consulting', description: 'Strategic advisory services' },
      { name: 'Partner Solutions', href: '/services/partner-solutions', description: 'White-label research for agencies & firms' },
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
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_2px_8px_rgba(0,0,0,0.06)]' : 'border-b border-gray-100'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 hover:no-underline">
            <Image
              src={`${basePath}/logo-color.png`}
              alt="Medinsights+"
              width={240}
              height={48}
              className="h-10 sm:h-11 w-auto"
              priority
            />
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
                  <button
                    className={`inline-flex items-center gap-1 px-3.5 py-2 text-sm font-medium transition-colors ${
                      isActive(item.href) ? 'text-primary' : 'text-gray-700 hover:text-primary'
                    }`}
                  >
                    {item.name}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 ${
                      servicesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-1 pointer-events-none'
                    }`}
                  >
                    <div className="w-72 bg-white rounded-lg shadow-lg border border-gray-100 py-2 overflow-hidden">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-3 transition-colors hover:bg-gray-50 hover:no-underline"
                        >
                          <div className="text-sm font-semibold text-primary">{child.name}</div>
                          <div className="text-xs text-gray-500 mt-0.5">{child.description}</div>
                        </Link>
                      ))}
                      <div className="border-t border-gray-100 mt-1 pt-1">
                        <Link
                          href="/services"
                          className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-accent-dark hover:bg-gray-50 hover:no-underline"
                        >
                          View all services <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3.5 py-2 text-sm font-medium transition-colors hover:no-underline ${
                    isActive(item.href) ? 'text-primary' : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}

            <Link
              href="/contact"
              className="ml-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-accent text-white text-sm font-semibold hover:bg-accent-dark hover:no-underline transition-all duration-200 hover:-translate-y-px"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  <>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileServicesOpen && (
                      <div className="ml-4 border-l-2 border-gray-100 pl-3 py-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-primary hover:no-underline"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`block px-4 py-3 rounded-md text-sm font-medium hover:no-underline ${
                      isActive(item.href) ? 'text-primary bg-gray-50' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="block mt-4 text-center px-5 py-3 rounded-md bg-accent text-white text-sm font-semibold hover:no-underline"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
