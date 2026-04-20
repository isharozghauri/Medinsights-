'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || '';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
    if (consent === 'accepted' && GA_ID) {
      loadGA();
    }
  }, []);

  const loadGA = () => {
    if (typeof window === 'undefined' || !GA_ID) return;
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = window as any;
      w.dataLayer = w.dataLayer || [];
      function gtag(...args: unknown[]) {
        w.dataLayer.push(args);
      }
      gtag('js', new Date());
      gtag('config', GA_ID, { anonymize_ip: true });
    };
  };

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
    if (GA_ID) loadGA();
  };

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] p-4">
      <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-lg shadow-lg p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-gray-600 flex-1">
          We use cookies to analyze site traffic and improve your experience.
          By continuing, you agree to our{' '}
          <Link href="#" className="text-primary font-medium hover:no-underline">Privacy Policy</Link>.
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-sm font-medium text-gray-600 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary-light transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
