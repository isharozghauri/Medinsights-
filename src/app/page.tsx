import Link from 'next/link';
import Image from 'next/image';
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
  Briefcase,
  Shield,
  Zap,
  Lock,
  UserCheck,
  Stethoscope,
  Heart,
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { images } from '@/lib/images';

const services = [
  {
    icon: Search,
    title: 'Primary Research',
    description: 'In-depth qualitative and quantitative research with KOLs, physicians, patients, and payers across 50+ therapeutic areas worldwide.',
    href: '/services/primary-research',
    image: images.doctor,
  },
  {
    icon: BarChart3,
    title: 'Secondary Research',
    description: 'Comprehensive desk research — competitive intelligence, market sizing, regulatory analysis, and pricing benchmarks from 100+ data sources.',
    href: '/services/secondary-research',
    image: images.dataAnalytics,
  },
  {
    icon: FileText,
    title: 'Syndicated Reports',
    description: 'Multi-client landscape reports, pipeline monitors, and market trackers covering high-value therapeutic areas with regular updates.',
    href: '/services/syndicated-reports',
    image: images.chartsDashboard,
  },
  {
    icon: Briefcase,
    title: 'Strategic Consulting',
    description: 'Research-informed advisory for market entry, competitive positioning, commercial due diligence, and launch excellence.',
    href: '/services/consulting',
    image: images.consulting,
  },
];

const industries = [
  { icon: Pill, title: 'Pharmaceuticals', description: 'Market access, pricing intelligence, and competitive landscape analysis for global pharma.', href: '/industries#pharmaceuticals', image: images.pharmaceutical },
  { icon: Microscope, title: 'Biotechnology', description: 'Pipeline assessment, KOL mapping, and market opportunity evaluation for emerging therapies.', href: '/industries#biotechnology', image: images.microscope },
  { icon: HeartPulse, title: 'Medical Technology', description: 'Device adoption research, HCP preference studies, and market sizing for medtech.', href: '/industries#medtech', image: images.medicalDevice },
  { icon: Building2, title: 'Research Agencies', description: 'White-label research, fieldwork, and analytical support for market research firms.', href: '/industries#agencies', image: images.teamMeeting },
];

const stats = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '50+', label: 'Therapeutic Areas' },
  { value: '30+', label: 'Countries Covered' },
  { value: '10,000+', label: 'KOL Network' },
  { value: '200+', label: 'Clients Served' },
  { value: '98%', label: 'Client Retention' },
];

const testimonials = [
  {
    quote: 'Medinsights+ delivered a comprehensive competitive landscape analysis that directly informed our go-to-market strategy. Their depth of expertise in oncology research is unmatched.',
    author: 'VP of Strategy',
    company: 'Top 10 Global Pharmaceutical Company',
    image: images.insight1,
  },
  {
    quote: "The team's ability to recruit hard-to-reach KOLs and extract meaningful insights from primary research has been invaluable for our pipeline prioritization decisions.",
    author: 'Director of Market Research',
    company: 'Leading Biotechnology Firm',
    image: images.insight2,
  },
  {
    quote: 'We rely on Medinsights+ as an extension of our in-house research team. Their turnaround times and quality of deliverables consistently exceed expectations.',
    author: 'Head of Commercial Strategy',
    company: 'Global MedTech Company',
    image: images.insight3,
  },
];

const whyUs = [
  { icon: Award, title: 'Therapeutic Expertise', description: 'Specialized analysts across 50+ disease areas including oncology, immunology, rare diseases, CNS, and cardiovascular.' },
  { icon: Globe2, title: 'Global KOL Network', description: 'Proprietary panel of 10,000+ healthcare professionals across 30+ countries for rapid recruitment.' },
  { icon: Shield, title: 'Rigorous Methodology', description: 'Every project follows our proprietary quality framework ensuring accuracy, reliability, and actionability.' },
  { icon: Users, title: 'Client Partnership', description: 'Dedicated project teams that function as an extension of your organization.' },
  { icon: Zap, title: 'Speed & Agility', description: 'Flexible engagement models with rapid turnaround — from 2-week sprints to multi-year programs.' },
  { icon: Lock, title: 'Data Security & Compliance', description: 'GDPR, HIPAA, and ISO 27001 compliant. Enterprise-grade data protection for sensitive research.' },
];

export default function Home() {
  return (
    <>
      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={images.heroMain}
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-accent text-sm font-medium mb-8 border border-white/10">
              <Globe2 className="w-4 h-4" />
              Global Healthcare Market Intelligence
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
              Insights That Drive
              <span className="block text-accent mt-2">Smarter Healthcare Decisions</span>
            </h1>

            <p className="mt-8 text-lg text-white/70 leading-relaxed max-w-xl">
              Medinsights+ empowers pharmaceutical, biotechnology, and medical technology
              companies with actionable research and intelligence to navigate complex
              healthcare markets with confidence.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary px-8 py-4 text-base justify-center">
                Schedule a Consultation <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/services" className="btn-secondary px-8 py-4 text-base justify-center">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-accent rounded-full" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════ STATS BAR ═══════════════════════ */}
      <section className="relative -mt-20 z-10 pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 border border-slate-100">
            {stats.map((stat, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="mt-1 text-xs sm:text-sm text-slate-500 font-medium">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ SERVICES ═══════════════════════ */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-accent font-semibold text-sm uppercase tracking-wider">Our Services</p>
              <h2 className="mt-3 text-slate-900">Comprehensive Healthcare Research Solutions</h2>
              <p className="mt-4 text-lg text-slate-600">Four integrated service pillars designed to power every dimension of your healthcare market intelligence.</p>
            </div>
          </AnimatedSection>

          <div className="mt-16 space-y-6">
            {services.map((service, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <Link href={service.href} className="group grid grid-cols-1 lg:grid-cols-12 gap-0 bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-slate-300 transition-all duration-500">
                  {/* Image */}
                  <div className={`relative h-64 lg:h-auto lg:col-span-4 overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <Image src={service.image} alt={service.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent lg:bg-gradient-to-r" />
                    <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6">
                      <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  {/* Content */}
                  <div className={`p-8 lg:p-10 lg:col-span-8 flex flex-col justify-center ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="mt-3 text-slate-600 leading-relaxed text-lg">{service.description}</p>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                      Explore {service.title} <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ WHY US - with background image ═══════════════════════ */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={images.labResearch} alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-primary/95" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto text-white">
              <p className="text-accent font-semibold text-sm uppercase tracking-wider">Why Medinsights+</p>
              <h2 className="mt-3">Your Strategic Advantage in Healthcare Intelligence</h2>
              <p className="mt-4 text-lg text-white/60">We combine deep therapeutic expertise with rigorous methodology to deliver insights that directly impact your business outcomes.</p>
            </div>
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="bg-white/[0.06] backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/[0.1] transition-colors h-full">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-white/60 text-sm leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ INDUSTRIES ═══════════════════════ */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-accent font-semibold text-sm uppercase tracking-wider">Industries We Serve</p>
              <h2 className="mt-3 text-slate-900">Deep Expertise Across Healthcare Sectors</h2>
            </div>
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <Link href={industry.href} className="group relative block rounded-2xl overflow-hidden h-72">
                  <Image src={industry.image} alt={industry.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-accent/20 backdrop-blur-sm flex items-center justify-center">
                        <industry.icon className="w-5 h-5 text-accent" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{industry.title}</h3>
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed">{industry.description}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ METHODOLOGY INFOGRAPHIC ═══════════════════════ */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-accent font-semibold text-sm uppercase tracking-wider">Our Process</p>
              <h2 className="mt-3 text-slate-900">How We Deliver Results</h2>
              <p className="mt-4 text-lg text-slate-600">A proven four-phase methodology that ensures every engagement delivers actionable, high-quality intelligence.</p>
            </div>
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-0">
            {[
              { step: '01', title: 'Discovery', description: 'Deep-dive into your strategic questions, market context, stakeholders, and desired outcomes.', color: 'bg-primary' },
              { step: '02', title: 'Design', description: 'Custom research methodology, sample framework, and analytical approach tailored to your needs.', color: 'bg-primary-light' },
              { step: '03', title: 'Execute', description: 'Rigorous fieldwork, data collection, and analysis with real-time quality monitoring and updates.', color: 'bg-accent-dark' },
              { step: '04', title: 'Deliver', description: 'Actionable insights, strategic recommendations, presentations, and ongoing advisory support.', color: 'bg-accent' },
            ].map((step, i) => (
              <AnimatedSection key={i} delay={i * 150}>
                <div className={`${step.color} text-white p-8 lg:p-10 relative ${i === 0 ? 'rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none' : ''} ${i === 3 ? 'rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none' : ''}`}>
                  <div className="text-4xl font-bold text-white/20">{step.step}</div>
                  <h3 className="mt-2 text-xl font-bold">{step.title}</h3>
                  <p className="mt-2 text-white/70 text-sm leading-relaxed">{step.description}</p>
                  {i < 3 && (
                    <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10">
                      <ChevronRight className="w-6 h-6 text-white/40" />
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ TESTIMONIALS ═══════════════════════ */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-accent font-semibold text-sm uppercase tracking-wider">Client Testimonials</p>
              <h2 className="mt-3 text-slate-900">Trusted by Healthcare Leaders Worldwide</h2>
            </div>
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 150}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 h-full flex flex-col">
                  <div className="relative h-48">
                    <Image src={t.image} alt="" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <svg key={j} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-slate-700 leading-relaxed text-sm flex-grow italic">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <div className="mt-6 pt-4 border-t border-slate-100">
                      <div className="font-semibold text-slate-900 text-sm">{t.author}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{t.company}</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ JOIN PANEL CTA ═══════════════════════ */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={images.heroPanel} alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-accent-dark/95 to-primary/90" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6">
                  <UserCheck className="w-4 h-4 text-accent" />
                  Join Our Research Panel
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                  Are You a Healthcare Professional, Patient, or Caregiver?
                </h2>
                <p className="mt-4 text-lg text-white/70 leading-relaxed">
                  Join our global panel of 10,000+ participants. Share your expertise, participate in meaningful research, and receive competitive compensation for your time.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link href="/join-panel" className="btn-primary px-8 py-4 text-base justify-center bg-white text-primary hover:bg-slate-100 shadow-none">
                    Sign Up Now <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link href="/join-panel#how-it-works" className="btn-secondary px-8 py-4 text-base justify-center">
                    Learn How It Works
                  </Link>
                </div>
              </div>
              <div className="hidden lg:grid grid-cols-3 gap-4">
                {[
                  { icon: Stethoscope, label: 'Physicians & Specialists', count: '5,000+' },
                  { icon: Heart, label: 'Patients', count: '3,500+' },
                  { icon: Users, label: 'Caregivers', count: '1,500+' },
                ].map((item, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10">
                    <item.icon className="w-8 h-8 text-accent mx-auto" />
                    <div className="mt-3 text-2xl font-bold text-white">{item.count}</div>
                    <div className="mt-1 text-xs text-white/60">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════ GLOBAL PRESENCE ═══════════════════════ */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="text-accent font-semibold text-sm uppercase tracking-wider">Global Presence</p>
              <h2 className="mt-3 text-slate-900">Research Coverage Across Key Markets</h2>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                With offices and research capabilities spanning major healthcare markets, we provide localized insights with a global perspective.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { region: 'Americas', cities: 'New York, Boston, Toronto, Sao Paulo' },
                  { region: 'Europe', cities: 'London, Frankfurt, Paris, Stockholm' },
                  { region: 'Asia-Pacific', cities: 'Singapore, Tokyo, Sydney, Seoul' },
                ].map((r) => (
                  <div key={r.region} className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900">{r.region}</div>
                      <div className="text-sm text-slate-500">{r.cities}</div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="relative rounded-2xl overflow-hidden h-96">
                <Image src={images.globalMap} alt="Global presence" fill className="object-cover" />
                <div className="absolute inset-0 bg-primary/30" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ FINAL CTA ═══════════════════════ */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="relative bg-gradient-to-br from-primary via-primary to-navy rounded-3xl p-12 lg:p-20 text-center text-white overflow-hidden">
              <div className="absolute -top-10 -left-10 w-48 h-48 border-[30px] border-accent rounded-full opacity-15" />
              <div className="absolute -bottom-8 -right-8 w-40 h-40">
                <div className="absolute inset-0 border-2 border-white/10 rounded-full" />
                <div className="absolute inset-3 border-2 border-white/10 rounded-full" />
                <div className="absolute inset-6 border-2 border-white/10 rounded-full" />
              </div>
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Ready to Gain a Competitive Edge?</h2>
                <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
                  Let&apos;s discuss how Medinsights+ can help you make smarter, faster, and more confident healthcare market decisions.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="btn-primary px-8 py-4 text-base justify-center">
                    Contact Our Team <ArrowUpRight className="w-5 h-5" />
                  </Link>
                  <Link href="/about" className="btn-secondary px-8 py-4 text-base justify-center">
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
