'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowUpRight,
  Send,
  CheckCircle2,
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import PageHero from '@/components/PageHero';
import { images } from '@/lib/images';

const offices = [
  {
    city: 'New York',
    country: 'United States',
    address: '350 Fifth Avenue, Suite 4500',
    phone: '+1 (212) 555-0123',
    email: 'newyork@medinsightsplus.com',
    hours: 'Mon-Fri: 9:00 AM - 6:00 PM EST',
    image: images.officeModern,
  },
  {
    city: 'London',
    country: 'United Kingdom',
    address: '1 Canada Square, Canary Wharf',
    phone: '+44 (0)20 7946 0123',
    email: 'london@medinsightsplus.com',
    hours: 'Mon-Fri: 9:00 AM - 6:00 PM GMT',
    image: images.teamMeeting,
  },
  {
    city: 'Frankfurt',
    country: 'Germany',
    address: 'Taunusanlage 12, 60325',
    phone: '+49 (0)69 1234 5678',
    email: 'frankfurt@medinsightsplus.com',
    hours: 'Mon-Fri: 9:00 AM - 6:00 PM CET',
    image: images.globalMap,
  },
];

const inquiryTypes = [
  'Primary Research Project',
  'Secondary Research / Desk Research',
  'Syndicated Report Inquiry',
  'Strategic Consulting Engagement',
  'Partnership / White-Label Services',
  'General Inquiry',
];

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_CONTACT || '';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    if (FORMSPREE_ID) {
      const formData = new FormData(e.currentTarget);
      await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
    }

    setSubmitting(false);
    setFormSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's discuss your research needs."
        description="Whether you need a custom research proposal, want to explore our syndicated reports, or have a strategic question — we're here to help."
        image={images.heroContact}
      />

      {/* Contact Form + Info */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <AnimatedSection>
                <div className="bg-white rounded-2xl p-8 lg:p-10 border border-slate-200 shadow-sm">
                  <h2 className="text-2xl font-bold text-slate-900">Send Us a Message</h2>
                  <p className="mt-2 text-slate-600">
                    Fill out the form below and our team will respond within 24 business hours.
                  </p>

                  {formSubmitted ? (
                    <div className="mt-8 text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-8 h-8 text-accent" />
                      </div>
                      <h3 className="mt-4 text-xl font-bold text-slate-900">Thank You!</h3>
                      <p className="mt-2 text-slate-600">
                        Your message has been received. A member of our team will be in touch shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            First Name *
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors"
                            name="first_name"
                            placeholder="John"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors"
                            name="last_name"
                            placeholder="Smith"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Work Email *
                          </label>
                          <input
                            type="email"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors"
                            name="email"
                            placeholder="john@company.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Phone
                          </label>
                          <input
                            type="tel"
                            className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors"
                            name="phone"
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Company *
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors"
                            name="company"
                            placeholder="Company Name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Job Title
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors"
                            name="job_title"
                            placeholder="VP of Strategy"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Inquiry Type *
                        </label>
                        <select
                          name="inquiry_type"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors text-slate-700"
                        >
                          <option value="">Select inquiry type</option>
                          {inquiryTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          required
                          rows={5}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors resize-none"
                          placeholder="Tell us about your research needs, therapeutic areas of interest, timeline, and any specific requirements..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full sm:w-auto btn-primary px-8 py-4 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {submitting ? 'Sending...' : 'Send Message'}
                        <Send className="w-4 h-4" />
                      </button>
                    </form>
                  )}
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-5">
              <AnimatedSection delay={200}>
                <div className="space-y-8">
                  {/* Sidebar Image */}
                  <div className="relative h-56 rounded-2xl overflow-hidden">
                    <Image
                      src={images.teamMeeting}
                      alt="Our team"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-semibold text-sm">
                        Our global team is ready to support your research needs
                      </p>
                    </div>
                  </div>

                  {/* Quick Contact */}
                  <div className="bg-primary rounded-2xl p-8 text-white relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-32 h-32 border-[20px] border-accent rounded-full opacity-20" />

                    <h3 className="text-xl font-bold relative">Get in Touch</h3>
                    <div className="mt-6 space-y-4 relative">
                      <a
                        href="mailto:info@medinsightsplus.com"
                        className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors"
                      >
                        <Mail className="w-5 h-5 text-accent shrink-0" />
                        <span className="text-sm">info@medinsightsplus.com</span>
                      </a>
                      <a
                        href="tel:+12125550123"
                        className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors"
                      >
                        <Phone className="w-5 h-5 text-accent shrink-0" />
                        <span className="text-sm">+1 (212) 555-0123</span>
                      </a>
                      <div className="flex items-center gap-3 text-white/80">
                        <Clock className="w-5 h-5 text-accent shrink-0" />
                        <span className="text-sm">Response within 24 business hours</span>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-white/10">
                      <p className="text-sm text-white/50 mb-3">Follow us</p>
                      <div className="flex gap-3">
                        <a
                          href="#"
                          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                          aria-label="LinkedIn"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                        </a>
                        <a
                          href="#"
                          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                          aria-label="X"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Office Locations */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-4">Our Offices</h3>
                    <div className="space-y-4">
                      {offices.map((office) => (
                        <div
                          key={office.city}
                          className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-md transition-shadow"
                        >
                          <div className="relative h-32">
                            <Image
                              src={office.image}
                              alt={`${office.city} office`}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            <div className="absolute bottom-3 left-4">
                              <h4 className="font-semibold text-white">
                                {office.city}, {office.country}
                              </h4>
                            </div>
                          </div>
                          <div className="p-5">
                            <div className="flex items-start gap-3">
                              <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                              <div>
                                <p className="text-sm text-slate-500">{office.address}</p>
                                <p className="text-sm text-slate-500 mt-1">{office.phone}</p>
                                <p className="text-sm text-accent mt-1">{office.email}</p>
                                <p className="text-xs text-slate-400 mt-2 flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  {office.hours}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-accent font-semibold text-sm uppercase tracking-wider">FAQ</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
                Frequently Asked Questions
              </h2>
            </div>
          </AnimatedSection>

          <div className="mt-16 max-w-3xl mx-auto space-y-6">
            {[
              {
                q: 'What therapeutic areas do you cover?',
                a: 'We cover 50+ therapeutic areas including oncology, immunology, rare diseases, CNS, cardiovascular, metabolic, infectious disease, and more. Our team includes specialists across all major disease areas.',
              },
              {
                q: 'Which geographies do you cover?',
                a: 'Our primary coverage spans North America (US, Canada) and Europe (EU5, UK, Nordics, Benelux). We can also coordinate research in additional markets through our partner network.',
              },
              {
                q: 'How long does a typical research project take?',
                a: 'Timelines vary by scope and methodology. A focused primary research project may take 4-6 weeks, while comprehensive market landscape studies can take 8-12 weeks. We also offer expedited timelines for urgent needs.',
              },
              {
                q: 'Do you work with mid-sized companies or only large pharma?',
                a: 'We serve the full range — from top-20 global pharma to emerging biotech, specialty medtech, and market research agencies. We scale our approach and pricing to match each client\'s needs.',
              },
              {
                q: 'Can you provide white-label research services?',
                a: 'Yes, we partner with market research agencies and consulting firms to provide white-label primary research, secondary research, and analytical support under their brand.',
              },
            ].map((faq, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-white rounded-xl p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900">{faq.q}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
