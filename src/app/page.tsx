import Link from 'next/link';
import {
  ArrowRight,
  Search,
  BarChart3,
  FileText,
  Users,
  Microscope,
  Pill,
  HeartPulse,
  Building2,
  Globe2,
  Award,
  CheckCircle2,
  ArrowUpRight,
  ChevronRight,
  MapPin,
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const services = [
  {
    icon: Search,
    title: 'Primary Research',
    description:
      'In-depth qualitative and quantitative research with KOLs, physicians, patients, and payers to uncover actionable insights.',
    href: '/services/primary-research',
  },
  {
    icon: BarChart3,
    title: 'Secondary Research',
    description:
      'Comprehensive desk research and analysis of published data, regulatory filings, clinical trials, and market databases.',
    href: '/services/secondary-research',
  },
  {
    icon: FileText,
    title: 'Syndicated Research',
    description:
      'Multi-client research reports covering therapeutic areas, market landscapes, competitive intelligence, and forecasting.',
    href: '/services/syndicated-reports',
  },
  {
    icon: Users,
    title: 'Strategic Consulting',
    description:
      'Expert advisory services for market entry, competitive positioning, pipeline assessment, and commercialization strategy.',
    href: '/services/consulting',
  },
];

const industries = [
  {
    icon: Pill,
    title: 'Pharmaceuticals',
    description: 'Market access, pricing intelligence, and competitive landscape analysis for global pharma companies.',
    href: '/industries#pharmaceuticals',
  },
  {
    icon: Microscope,
    title: 'Biotechnology',
    description: 'Pipeline assessment, KOL mapping, and market opportunity evaluation for emerging biotech therapies.',
    href: '/industries#biotechnology',
  },
  {
    icon: HeartPulse,
    title: 'Medical Technology',
    description: 'Device adoption research, HCP preference studies, and market sizing for medtech innovators.',
    href: '/industries#medtech',
  },
  {
    icon: Building2,
    title: 'Research Agencies & Consulting',
    description: 'White-label research support, fieldwork, and analytical capabilities for market research firms.',
    href: '/industries#agencies',
  },
];

const stats = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '50+', label: 'Therapeutic Areas' },
  { value: '30+', label: 'Countries Covered' },
  { value: '98%', label: 'Client Retention' },
];

const testimonials = [
  {
    quote:
      'Medinsights+ delivered a comprehensive competitive landscape analysis that directly informed our go-to-market strategy. Their depth of expertise in oncology research is unmatched.',
    author: 'VP of Strategy',
    company: 'Top 10 Global Pharmaceutical Company',
  },
  {
    quote:
      "The team's ability to recruit hard-to-reach KOLs and extract meaningful insights from primary research has been invaluable for our pipeline prioritization decisions.",
    author: 'Director of Market Research',
    company: 'Leading Biotechnology Firm',
  },
  {
    quote:
      'We rely on Medinsights+ as an extension of our in-house research team. Their turnaround times and quality of deliverables consistently exceed expectations.',
    author: 'Head of Commercial Strategy',
    company: 'Global MedTech Company',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-primary overflow-hidden">
        {/* Background decorative elements matching brand patterns */}
        <div className="absolute inset-0">
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] border-[60px] border-accent rounded-full opacity-20" />
          <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px]">
            <div className="absolute inset-0 border-2 border-white/10 rounded-full" />
            <div className="absolute inset-4 border-2 border-white/10 rounded-full" />
            <div className="absolute inset-8 border-2 border-white/10 rounded-full" />
            <div className="absolute inset-12 border-2 border-white/10 rounded-full" />
            <div className="absolute inset-16 border-2 border-white/10 rounded-full" />
          </div>
          <div className="absolute top-1/2 left-8 -translate-y-1/2 grid grid-cols-6 gap-3 opacity-20 hidden lg:grid">
            {Array.from({ length: 36 }).map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-accent" />
            ))}
          </div>
          <div className="absolute top-32 right-16 grid grid-cols-6 gap-3 opacity-15 hidden lg:grid">
            {Array.from({ length: 36 }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-white" />
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-navy" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-accent text-sm font-medium mb-8 border border-white/10">
              <Globe2 className="w-4 h-4" />
              Trusted across North America & Europe
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Healthcare Market Intelligence That Drives{' '}
              <span className="text-accent">Strategic Decisions</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl">
              Medinsights+ empowers pharmaceutical, biotechnology, and medical technology
              companies with actionable research and intelligence to navigate complex
              healthcare markets with confidence.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-white font-semibold hover:bg-accent-dark transition-all shadow-lg shadow-accent/25 hover:shadow-accent/40"
              >
                Schedule a Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition-all border border-white/20"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative -mt-16 z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 grid grid-cols-2 lg:grid-cols-4 gap-8 border border-slate-100">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-primary">{stat.value}</div>
                  <div className="mt-1 text-sm text-slate-500 font-medium">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-accent font-semibold text-sm uppercase tracking-wider">Our Services</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
                Comprehensive Healthcare Research Solutions
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                From primary research to strategic consulting, we deliver the intelligence
                you need to make informed healthcare decisions.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Link
                  href={service.href}
                  className="group block p-8 rounded-2xl border border-slate-200 hover:border-accent/30 hover:shadow-xl transition-all duration-300 bg-white"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-accent font-semibold text-sm uppercase tracking-wider">Industries We Serve</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
                Deep Expertise Across Healthcare Sectors
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                We serve the full spectrum of healthcare industry stakeholders with
                tailored research and consulting services.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Link
                  href={industry.href}
                  className="group block p-8 rounded-2xl bg-white border border-slate-200 hover:border-primary/20 hover:shadow-lg transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent/80 flex items-center justify-center mx-auto">
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {industry.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {industry.description}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore <ChevronRight className="w-4 h-4" />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Medinsights+ Section */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div>
                <p className="text-accent font-semibold text-sm uppercase tracking-wider">Why Medinsights+</p>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
                  Your Strategic Advantage in Healthcare Intelligence
                </h2>
                <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                  We combine deep therapeutic expertise with rigorous research methodologies
                  to deliver insights that directly impact your business outcomes.
                </p>

                <div className="mt-10 space-y-6">
                  {[
                    {
                      title: 'Therapeutic Area Expertise',
                      description:
                        'Our team of analysts brings specialized knowledge across 50+ therapeutic areas including oncology, immunology, rare diseases, and CNS.',
                    },
                    {
                      title: 'Global KOL Network',
                      description:
                        'Access to 10,000+ healthcare professionals across North America and Europe for primary research and advisory engagements.',
                    },
                    {
                      title: 'Rigorous Methodology',
                      description:
                        'Every project follows our proprietary quality framework ensuring accurate, actionable, and timely deliverables.',
                    },
                    {
                      title: 'Client-Centric Approach',
                      description:
                        'Dedicated project teams that function as an extension of your organization, understanding your strategic context.',
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-slate-900">{item.title}</h3>
                        <p className="mt-1 text-sm text-slate-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative">
                <div className="bg-primary rounded-2xl p-10 text-white relative overflow-hidden">
                  <div className="absolute -top-16 -right-16 w-48 h-48 border-[30px] border-accent rounded-full opacity-20" />
                  <div className="absolute bottom-6 left-6 grid grid-cols-5 gap-2 opacity-20">
                    {Array.from({ length: 25 }).map((_, i) => (
                      <div key={i} className="w-1.5 h-1.5 rounded-full bg-white" />
                    ))}
                  </div>

                  <Award className="w-12 h-12 text-accent mb-6" />
                  <h3 className="text-2xl font-bold">Trusted by Industry Leaders</h3>
                  <p className="mt-3 text-white/70 leading-relaxed">
                    Over 200 healthcare organizations across 30+ countries trust Medinsights+
                    for critical market intelligence and strategic advisory.
                  </p>

                  <div className="mt-8 grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-3xl font-bold text-accent">15+</div>
                      <div className="text-sm text-white/60 mt-1">Years of Experience</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-accent">200+</div>
                      <div className="text-sm text-white/60 mt-1">Clients Served</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-accent font-semibold text-sm uppercase tracking-wider">Client Testimonials</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
                What Our Clients Say
              </h2>
            </div>
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 150}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 h-full flex flex-col">
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-slate-700 leading-relaxed flex-grow">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <div className="font-semibold text-slate-900">{testimonial.author}</div>
                    <div className="text-sm text-slate-500 mt-0.5">{testimonial.company}</div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-24 lg:py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-[350px] h-[350px] border-[50px] border-accent rounded-full opacity-10" />
        <div className="absolute -bottom-16 -right-16 w-[300px] h-[300px]">
          <div className="absolute inset-0 border-2 border-white/5 rounded-full" />
          <div className="absolute inset-4 border-2 border-white/5 rounded-full" />
          <div className="absolute inset-8 border-2 border-white/5 rounded-full" />
          <div className="absolute inset-12 border-2 border-white/5 rounded-full" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-accent font-semibold text-sm uppercase tracking-wider">Global Presence</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
                Research Coverage Across Key Markets
              </h2>
              <p className="mt-4 text-lg text-white/70">
                With offices strategically located across North America and Europe, we
                provide localized insights with a global perspective.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                region: 'North America',
                locations: ['New York, USA', 'Boston, USA', 'Toronto, Canada'],
                coverage: 'Full US & Canada coverage including payer landscape, FDA/Health Canada regulatory intelligence',
              },
              {
                region: 'Western Europe',
                locations: ['London, UK', 'Frankfurt, Germany', 'Paris, France'],
                coverage: 'EU5 markets, EMA regulatory tracking, health technology assessment (HTA) insights',
              },
              {
                region: 'Nordics & Emerging EU',
                locations: ['Stockholm, Sweden', 'Amsterdam, Netherlands'],
                coverage: 'Nordic markets, Benelux, and expanding Central & Eastern European coverage',
              },
            ].map((region, index) => (
              <AnimatedSection key={index} delay={index * 150}>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h3 className="text-xl font-bold text-accent">{region.region}</h3>
                  <div className="mt-4 space-y-2">
                    {region.locations.map((location) => (
                      <div key={location} className="flex items-center gap-2 text-sm text-white/80">
                        <MapPin className="w-4 h-4 text-accent shrink-0" />
                        {location}
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-white/60 leading-relaxed">{region.coverage}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="relative bg-gradient-to-br from-primary via-primary to-navy rounded-3xl p-12 lg:p-20 text-center text-white overflow-hidden">
              <div className="absolute -top-10 -left-10 w-48 h-48 border-[30px] border-accent rounded-full opacity-15" />
              <div className="absolute top-8 right-12 grid grid-cols-5 gap-2 opacity-15 hidden sm:grid">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-white" />
                ))}
              </div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40">
                <div className="absolute inset-0 border-2 border-white/10 rounded-full" />
                <div className="absolute inset-3 border-2 border-white/10 rounded-full" />
                <div className="absolute inset-6 border-2 border-white/10 rounded-full" />
              </div>

              <div className="relative">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                  Ready to Gain a Competitive Edge?
                </h2>
                <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
                  Let&apos;s discuss how Medinsights+ can help you make smarter, faster,
                  and more confident healthcare market decisions.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-white font-semibold hover:bg-accent-dark transition-all shadow-lg shadow-accent/25"
                  >
                    Contact Our Team
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition-all border border-white/20"
                  >
                    Learn About Us
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
