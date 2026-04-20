import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ArrowUpRight,
  Search,
  BarChart3,
  FileText,
  Briefcase,
  CheckCircle2,
  Globe2,
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { images } from '@/lib/images';

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
    description: 'Market access, competitive intelligence, and commercial strategy for global pharma leaders.',
    href: '/industries#pharmaceuticals',
    image: images.pharmaceutical,
  },
  {
    title: 'Biotechnology',
    description: 'Pipeline assessment, KOL mapping, and launch readiness for emerging biotech innovators.',
    href: '/industries#biotechnology',
    image: images.biotech,
  },
  {
    title: 'Medical Technology',
    description: 'Device landscape analysis, adoption research, and market sizing for medtech companies.',
    href: '/industries#medtech',
    image: images.medicalDevice,
  },
  {
    title: 'Research Agencies',
    description: 'White-label research support and panel access for consulting and research firms.',
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
    description: 'Specialized analysts with advanced degrees in life sciences, health economics, and clinical research.',
  },
  {
    title: 'Global Reach, Local Insight',
    description: 'Proprietary network of 10,000+ healthcare professionals across every major global market.',
  },
  {
    title: 'Rigorous Proprietary Methodology',
    description: 'Every engagement follows our quality framework for accurate, reliable, and actionable intelligence.',
  },
  {
    title: 'Enterprise-Grade Data Security',
    description: 'GDPR, HIPAA, and ISO 27001 compliant operations protect your most sensitive research.',
  },
];

export default function Home() {
  return (
    <>
      {/* ════════════════════ HERO ════════════════════ */}
      <section className="relative bg-white pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        {/* Cyan arc decoration - top left */}
        <div
          aria-hidden
          className="absolute -top-24 -left-24 w-64 h-64 rounded-full border-[24px] border-accent opacity-[0.15] pointer-events-none"
        />
        {/* Navy dot grid decoration - bottom right */}
        <div
          aria-hidden
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
                Medinsights+ partners with pharmaceutical, biotechnology, and medical technology
                leaders worldwide to deliver research and intelligence that drives confident,
                evidence-based decisions.
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
                  <div className="text-2xl lg:text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
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
                Four integrated practice areas delivering the breadth and depth required
                for today&apos;s most complex healthcare decisions.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={i} delay={i * 100}>
                  <Link href={service.href} className="group card block overflow-hidden no-underline hover:no-underline">
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
                        <h3 className="text-primary text-lg">{service.title}</h3>
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

      {/* ════════════════════ ABOUT / WHY US ════════════════════ */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Image */}
            <AnimatedSection>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src={images.teamMeeting}
                  alt="Medinsights+ team meeting"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>

            {/* Right: Text */}
            <AnimatedSection delay={150}>
              <div>
                <p className="text-accent-dark font-semibold text-sm uppercase tracking-wider mb-4">
                  About Us
                </p>
                <h2 className="text-primary">Why Medinsights+</h2>

                <div className="mt-8 space-y-6">
                  {whyUsPoints.map((point, i) => (
                    <div key={i} className="flex gap-4">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-primary font-semibold text-base">{point.title}</h4>
                        <p className="mt-1 text-gray-600 text-[0.9375rem] leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 mt-8 text-primary font-semibold hover:gap-3 transition-all no-underline hover:no-underline"
                >
                  Learn more about our firm <ArrowRight className="w-4 h-4" />
                </Link>
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
              <h2 className="text-primary accent-underline">Industries We Serve</h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <Link href={industry.href} className="group card block overflow-hidden no-underline hover:no-underline">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-primary text-base">{industry.title}</h3>
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
                    <div className="text-sm text-gray-500 mt-1">{t.company}</div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════ JOIN PANEL CTA ════════════════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <Globe2 className="w-10 h-10 text-accent mx-auto mb-6" />
            <h2 className="text-primary">Join Our Global Research Panel</h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Healthcare professionals, patients, and caregivers worldwide contribute to
              our research programs. Share your expertise and receive competitive compensation
              for your time.
            </p>
            <Link href="/join-panel" className="btn-primary mt-8">
              Join the Panel <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
