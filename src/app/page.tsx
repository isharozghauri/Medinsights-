import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Search,
  BarChart3,
  FileText,
  Briefcase,
  CheckCircle2,
  Globe2,
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { images } from '@/lib/images';

/* ── Data ──────────────────────────────────────────────────────────── */

const services = [
  {
    icon: Search,
    title: 'Primary Research',
    description:
      'First-hand intelligence from healthcare professionals, patients, and payers through rigorous qualitative and quantitative methodologies.',
    href: '/services/primary-research',
    image: images.labResearch,
  },
  {
    icon: BarChart3,
    title: 'Secondary Research',
    description:
      'Evidence-based market intelligence synthesized from clinical, regulatory, and commercial data sources worldwide.',
    href: '/services/secondary-research',
    image: images.dataAnalytics,
  },
  {
    icon: FileText,
    title: 'Syndicated Reports',
    description:
      'Multi-client landscape reports and market trackers covering high-value therapeutic areas with continuous updates.',
    href: '/services/syndicated-reports',
    image: images.chartsDashboard,
  },
  {
    icon: Briefcase,
    title: 'Strategic Consulting',
    description:
      'Research-informed advisory for market entry, competitive positioning, commercial due diligence, and launch excellence.',
    href: '/services/consulting',
    image: images.consulting,
  },
];

const stats = [
  { value: '500+', label: 'Projects' },
  { value: '50+', label: 'Therapeutic Areas' },
  { value: '30+', label: 'Countries' },
  { value: '10K+', label: 'KOLs in Network' },
  { value: '200+', label: 'Clients Served' },
  { value: '98%', label: 'Client Retention' },
];

const industries = [
  {
    title: 'Pharmaceuticals',
    description:
      'Market access, competitive intelligence, and commercial strategy for global pharma leaders.',
    href: '/industries#pharmaceuticals',
    image: images.pharmaceutical,
  },
  {
    title: 'Biotechnology',
    description:
      'Pipeline assessment, KOL mapping, and launch readiness for emerging biotech innovators.',
    href: '/industries#biotechnology',
    image: images.biotech,
  },
  {
    title: 'MedTech & Diagnostics',
    description:
      'Device landscape analysis, IVD research, and market sizing for medtech and diagnostic companies.',
    href: '/industries#medtech',
    image: images.medicalDevice,
  },
  {
    title: 'Digital Health',
    description:
      'Adoption, reimbursement, and engagement research for digital therapeutics and health platforms.',
    href: '/industries#digital-health',
    image: images.dataAnalytics,
  },
  {
    title: 'Healthcare Investors',
    description:
      'Commercial due diligence for venture capital, private equity, and institutional investors.',
    href: '/industries#investors',
    image: images.chartsDashboard,
  },
  {
    title: 'Research Agencies',
    description:
      'White-label research support and panel access for consulting and research firms.',
    href: '/industries#agencies',
    image: images.teamMeeting,
  },
];

const testimonials = [
  {
    quote:
      'Medinsights+ delivered a competitive landscape analysis that directly informed our go-to-market strategy. Their depth of expertise in oncology research is unmatched.',
    author: 'Vice President, Strategy',
    company: 'Top 10 Global Pharmaceutical Company',
  },
  {
    quote:
      'Their ability to recruit hard-to-reach KOLs and extract meaningful insights from primary research has been invaluable for our pipeline prioritization decisions.',
    author: 'Director of Market Research',
    company: 'Leading Biotechnology Firm',
  },
  {
    quote:
      'We rely on Medinsights+ for syndicated reports that provide consistently accurate, well-structured intelligence across multiple therapeutic areas.',
    author: 'Head of Competitive Intelligence',
    company: 'Major Medical Device Manufacturer',
  },
];

const whyUsPoints = [
  {
    title: 'Therapeutic Depth Across 50+ Areas',
    description:
      'Specialized analysts with advanced degrees in life sciences, health economics, and clinical research.',
  },
  {
    title: 'Global Reach, Local Insight',
    description:
      'Proprietary network of 10,000+ healthcare professionals across every major global market.',
  },
  {
    title: 'Rigorous Proprietary Methodology',
    description:
      'Every engagement follows our quality framework for accurate, reliable, and actionable intelligence.',
  },
  {
    title: 'Enterprise-Grade Data Security',
    description:
      'GDPR, HIPAA, and ISO 27001 compliant operations protect your most sensitive research.',
  },
];

/* ── Page ──────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      {/* ════════════════════ HERO ════════════════════ */}
      <section className="relative bg-white pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        {/* Cyan arc decoration -- top left */}
        <div
          aria-hidden="true"
          className="absolute -top-24 -left-24 w-64 h-64 rounded-full border-[24px] border-accent opacity-[0.15] pointer-events-none"
        />
        {/* Navy dot grid decoration -- bottom right */}
        <div
          aria-hidden="true"
          className="absolute bottom-12 right-8 lg:right-16 w-36 h-36 opacity-[0.12] pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle, #022b87 1.5px, transparent 1.5px)',
            backgroundSize: '14px 14px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text */}
            <div>
              <p className="text-accent-dark font-semibold text-sm uppercase tracking-wider mb-4">
                Global Healthcare Intelligence
              </p>
              <h1 className="text-primary">
                Research that shapes the future of healthcare.
              </h1>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
                Medinsights+ partners with pharmaceutical, biotechnology, and
                medical technology leaders worldwide to deliver research and
                intelligence that drives confident, evidence-based decisions.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Get Started <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/services" className="btn-outline">
                  Our Services
                </Link>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src={images.heroMain}
                alt="Healthcare research laboratory"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════ STATS ROW ════════════════════ */}
      <section className="border-y border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-gray-200">
            {stats.map((stat, i) => (
              <AnimatedSection key={i} delay={i * 60}>
                <div className="py-8 lg:py-10 px-4 text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-gray-500">
                    {stat.label}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════ SERVICES ════════════════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-accent-dark font-semibold text-sm uppercase tracking-wider mb-4">
                What We Do
              </p>
              <h2 className="text-primary accent-underline">Our Services</h2>
              <p className="mt-8 text-lg text-gray-600 leading-relaxed">
                Four integrated practice areas delivering the breadth and depth
                required for today&apos;s most complex healthcare decisions.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={i} delay={i * 100}>
                  <Link
                    href={service.href}
                    className="group card block overflow-hidden no-underline hover:no-underline"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Icon className="w-5 h-5 text-primary" />
                        <h3 className="text-primary text-lg">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-[0.9375rem]">
                        {service.description}
                      </p>
                      <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════ ABOUT / WHY US — NAVY AUTHORITY BLOCK ════════════════════ */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <div>
                <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                  Why Medinsights+
                </p>
                <h2 className="text-white">The research partner global healthcare companies trust.</h2>
                <p className="mt-6 text-white/70 text-lg leading-relaxed">
                  For over fifteen years, we have combined deep therapeutic expertise
                  with rigorous methodology to deliver intelligence that directly
                  impacts our clients&apos; most critical business decisions.
                </p>

                <div className="mt-10 space-y-6">
                  {whyUsPoints.map((point, i) => (
                    <div key={i} className="flex gap-4">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-white font-semibold text-base">
                          {point.title}
                        </h4>
                        <p className="mt-1 text-white/60 text-[0.9375rem] leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 mt-10 text-accent font-semibold hover:gap-3 transition-all no-underline hover:no-underline"
                >
                  Learn more about our firm{' '}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src={images.teamMeeting}
                  alt="Medinsights+ team"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ════════════════════ INDUSTRIES ════════════════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-accent-dark font-semibold text-sm uppercase tracking-wider mb-4">
                Who We Serve
              </p>
              <h2 className="text-primary accent-underline">
                Industries We Serve
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <Link
                  href={industry.href}
                  className="group card block overflow-hidden no-underline hover:no-underline"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-primary text-base">
                      {industry.title}
                    </h3>
                    <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                      {industry.description}
                    </p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════ TESTIMONIALS ════════════════════ */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-accent-dark font-semibold text-sm uppercase tracking-wider mb-4">
                What Clients Say
              </p>
              <h2 className="text-primary">Trusted by Industry Leaders</h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="card p-8 h-full flex flex-col">
                  <blockquote className="text-gray-700 leading-relaxed flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="font-bold text-primary">{t.author}</div>
                    <div className="text-sm text-gray-500 mt-1">
                      {t.company}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════ FOR RESEARCH PARTNERS ════════════════════ */}
      <section className="py-20 lg:py-28 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <div>
                <p className="text-accent-dark font-semibold text-sm uppercase tracking-wider mb-4">
                  For Consulting &amp; Research Partners
                </p>
                <h2 className="text-primary">
                  Built to extend your team, not compete with it.
                </h2>
                <p className="mt-4 text-gray-600 leading-relaxed text-lg">
                  Leading management consulting firms, market research agencies, and CROs partner
                  with Medinsights+ for white-label fieldwork, panel access, therapeutic expertise,
                  and multi-country coordination — delivered seamlessly under your brand.
                </p>
                <div className="mt-8 grid grid-cols-3 gap-6">
                  <div>
                    <div className="text-2xl font-bold text-primary">10K+</div>
                    <div className="text-sm text-gray-500 mt-1">HCPs in Panel</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">30+</div>
                    <div className="text-sm text-gray-500 mt-1">Countries</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">48hrs</div>
                    <div className="text-sm text-gray-500 mt-1">Avg. Recruitment Start</div>
                  </div>
                </div>
                <Link
                  href="/services/partner-solutions"
                  className="inline-flex items-center gap-2 mt-8 text-primary font-semibold hover:gap-3 transition-all no-underline hover:no-underline"
                >
                  Explore partner solutions <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src={images.consulting}
                  alt="Research partnership"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ════════════════════ GLOBAL PRESENCE + JOIN PANEL ════════════════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Global Presence */}
            <AnimatedSection>
              <div>
                <p className="text-accent-dark font-semibold text-sm uppercase tracking-wider mb-4">
                  Global Presence
                </p>
                <h2 className="text-primary">Research coverage across key markets worldwide.</h2>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  With offices and research capabilities across the Americas, Europe, and Asia-Pacific,
                  we deliver localized market intelligence with a global perspective.
                </p>
                <div className="mt-8 grid grid-cols-3 gap-6">
                  {[
                    { region: 'Americas', cities: 'New York · Boston · Toronto' },
                    { region: 'Europe', cities: 'London · Frankfurt · Paris' },
                    { region: 'Asia-Pacific', cities: 'Singapore · Tokyo · Sydney' },
                  ].map((r) => (
                    <div key={r.region}>
                      <div className="text-primary text-xs font-bold uppercase tracking-wider">{r.region}</div>
                      <div className="mt-2 text-gray-500 text-sm leading-relaxed">{r.cities}</div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Join Panel */}
            <AnimatedSection delay={150}>
              <div className="bg-gray-50 rounded-lg p-10 border border-gray-200 h-full flex flex-col justify-center">
                <Globe2 className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-primary text-2xl">Join Our Global Research Panel</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  Healthcare professionals, patients, and caregivers contribute to our research
                  worldwide. Share your expertise and receive competitive compensation.
                </p>
                <div className="mt-6 flex flex-wrap gap-6 text-sm text-primary font-bold">
                  <div>5,000+ <span className="text-gray-500 font-normal">Physicians</span></div>
                  <div>3,500+ <span className="text-gray-500 font-normal">Patients</span></div>
                  <div>1,500+ <span className="text-gray-500 font-normal">Caregivers</span></div>
                </div>
                <Link href="/join-panel" className="btn-primary mt-8 self-start">
                  Join the Panel <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
