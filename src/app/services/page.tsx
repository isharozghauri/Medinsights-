import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Search,
  BarChart3,
  FileText,
  Users,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Layers,
  Lightbulb,
  Target,
  Briefcase,
  Globe2,
  TrendingUp,
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore Medinsights+ healthcare market research services: primary research, secondary research, syndicated reports, and strategic consulting for pharma, biotech, and medtech companies worldwide.',
};

const services = [
  {
    icon: Search,
    title: 'Primary Market Research',
    href: '/services/primary-research',
    description:
      'Gain first-hand intelligence from the healthcare professionals, patients, and payers who shape your market. Our primary research practice combines rigorous qualitative and quantitative methodologies to uncover the attitudes, behaviors, and unmet needs that drive prescribing decisions and market access outcomes.',
    highlights: [
      'KOL interviews and advisory boards',
      'Physician, patient, and payer surveys',
      'Ethnographic studies and patient journey mapping',
      'Conjoint analysis and MaxDiff exercises',
      'Multi-country fieldwork coordination',
    ],
    color: 'from-primary to-primary/80',
  },
  {
    icon: BarChart3,
    title: 'Secondary & Desk Research',
    href: '/services/secondary-research',
    description:
      'Transform published data into strategic intelligence. We systematically analyze clinical, regulatory, commercial, and epidemiological data sources to build comprehensive market landscapes, competitive benchmarks, and evidence-based forecasts that inform critical business decisions.',
    highlights: [
      'Competitive intelligence and pipeline tracking',
      'Market sizing and epidemiology modeling',
      'Regulatory intelligence (FDA/EMA)',
      'Pricing and market access analysis',
      'Patent and exclusivity landscape reviews',
    ],
    color: 'from-accent to-accent/80',
  },
  {
    icon: FileText,
    title: 'Syndicated Research Reports',
    href: '/services/syndicated-reports',
    description:
      'Access deep market intelligence through our library of multi-client research reports. Our syndicated program covers high-value therapeutic areas with regularly updated landscape analyses, pipeline monitors, market trackers, and market access digests that keep your team informed year-round.',
    highlights: [
      'Therapeutic landscape reports',
      'Quarterly market trackers',
      'Pipeline monitors with regulatory milestones',
      'Market access and pricing digests',
      'Flexible subscription and licensing models',
    ],
    color: 'from-primary to-accent',
  },
  {
    icon: Briefcase,
    title: 'Strategic Consulting',
    href: '/services/consulting',
    description:
      'Translate research into action with our strategic consulting practice. We partner with pharmaceutical, biotechnology, and medical technology companies to develop market entry strategies, optimize competitive positioning, support commercial due diligence, and drive launch excellence across global markets.',
    highlights: [
      'Market entry and launch strategy',
      'Competitive positioning and differentiation',
      'Commercial due diligence for M&A',
      'Lifecycle management and portfolio optimization',
      'Embedded team and retainer models',
    ],
    color: 'from-accent to-primary',
  },
];

const integrationPoints = [
  {
    icon: Lightbulb,
    title: 'Research-Informed Strategy',
    description:
      'Primary and secondary research findings feed directly into our consulting engagements, ensuring every strategic recommendation is grounded in real-world evidence from the stakeholders who matter most.',
  },
  {
    icon: Layers,
    title: 'Multi-Method Triangulation',
    description:
      'We combine qualitative depth from KOL interviews with quantitative rigor from large-scale surveys and secondary data analysis, providing 360-degree visibility into your market.',
  },
  {
    icon: Target,
    title: 'Continuous Intelligence',
    description:
      'Syndicated reports and market trackers provide ongoing context that enhances the value of every custom project, so your team always operates with the latest competitive landscape in view.',
  },
  {
    icon: Globe2,
    title: 'Global Coordination',
    description:
      'Whether a single-country deep dive or a multi-market launch assessment, our integrated platform ensures consistent methodology, harmonized data, and unified insights across regions.',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-[400px] h-[400px] border-[50px] border-accent rounded-full opacity-10" />
        <div className="absolute -bottom-10 -right-10 w-[250px] h-[250px]">
          <div className="absolute inset-0 border-2 border-white/5 rounded-full" />
          <div className="absolute inset-4 border-2 border-white/5 rounded-full" />
          <div className="absolute inset-8 border-2 border-white/5 rounded-full" />
        </div>
        <div className="absolute top-16 right-16 grid grid-cols-6 gap-3 opacity-10 hidden lg:grid">
          {Array.from({ length: 36 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-white" />
          ))}
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider">Our Services</p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold leading-tight">
              End-to-End Healthcare{' '}
              <span className="text-accent">Research & Intelligence</span>
            </h1>
            <p className="mt-6 text-xl text-white/70 leading-relaxed">
              From primary fieldwork to strategic consulting, Medinsights+ provides the
              full spectrum of research services that healthcare companies need to compete
              and win in complex global markets. Our integrated approach ensures every
              insight connects to a strategic outcome.
            </p>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-accent font-semibold text-sm uppercase tracking-wider">What We Do</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
                Four Pillars of Healthcare Intelligence
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Each service line is designed to address a specific dimension of market intelligence.
                Together, they form a comprehensive ecosystem that powers smarter healthcare decisions.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Link
                  href={service.href}
                  className="group block bg-white rounded-2xl border border-slate-200 hover:border-accent/30 hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                    {/* Icon/Accent Bar */}
                    <div className={`lg:col-span-1 bg-gradient-to-b ${service.color} flex items-center justify-center p-6 lg:p-0`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-11 p-8 lg:p-10">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                            {service.title}
                          </h3>
                          <p className="mt-3 text-slate-600 leading-relaxed max-w-3xl">
                            {service.description}
                          </p>
                        </div>
                        <ArrowRight className="w-6 h-6 text-slate-300 group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                      </div>

                      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {service.highlights.map((highlight, hIndex) => (
                          <div key={hIndex} className="flex items-center gap-2 text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                            {highlight}
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                        Explore {service.title}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How Services Work Together */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-accent font-semibold text-sm uppercase tracking-wider">Integrated Approach</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
                How Our Services Work Together
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                The real power of Medinsights+ lies in the integration across our service lines.
                We do not operate in silos. Every engagement benefits from a connected intelligence
                ecosystem that multiplies the value of each individual research effort.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {integrationPoints.map((point, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center">
                    <point.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">{point.title}</h3>
                  <p className="mt-2 text-slate-600 leading-relaxed">{point.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Visual Integration Flow */}
          <AnimatedSection delay={300}>
            <div className="mt-16 bg-primary rounded-2xl p-10 lg:p-14 text-white relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-40 h-40 border-[25px] border-accent rounded-full opacity-15" />
              <div className="absolute bottom-6 left-6 grid grid-cols-5 gap-2 opacity-15">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-white" />
                ))}
              </div>

              <div className="relative">
                <TrendingUp className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-2xl font-bold">From Data to Decision</h3>
                <p className="mt-3 text-white/70 leading-relaxed max-w-3xl">
                  A typical integrated engagement begins with secondary research to map the competitive
                  landscape and identify knowledge gaps. Primary research then fills those gaps with
                  real-world perspectives from physicians, patients, and payers. Syndicated reports
                  provide ongoing market context. And our consulting team synthesizes everything into
                  a clear strategic roadmap your leadership team can act on immediately.
                </p>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-4 gap-6">
                  {[
                    { step: '01', label: 'Secondary Research', sub: 'Landscape mapping' },
                    { step: '02', label: 'Primary Research', sub: 'Stakeholder insights' },
                    { step: '03', label: 'Syndicated Intel', sub: 'Ongoing context' },
                    { step: '04', label: 'Strategic Consulting', sub: 'Actionable roadmap' },
                  ].map((step, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-accent/40">{step.step}</div>
                      <div className="mt-1 font-semibold text-sm">{step.label}</div>
                      <div className="text-xs text-white/50 mt-0.5">{step.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 lg:py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute -bottom-16 -left-16 w-48 h-48 border-[30px] border-accent rounded-full opacity-15" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-accent font-semibold text-sm uppercase tracking-wider">Our Process</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
                How We Deliver Results
              </h2>
              <p className="mt-4 text-white/60">
                Every engagement follows a structured process designed to maximize quality, speed, and strategic relevance.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Deep-dive into your strategic questions, market context, and desired outcomes to define scope and approach.' },
              { step: '02', title: 'Design', description: 'Custom research methodology, sample design, analytical framework, and timeline development tailored to your needs.' },
              { step: '03', title: 'Execute', description: 'Rigorous fieldwork and data collection with real-time quality monitoring, interim readouts, and transparent progress reporting.' },
              { step: '04', title: 'Deliver', description: 'Actionable insights, strategic recommendations, and ongoing support to ensure your team can act on findings with confidence.' },
            ].map((step, index) => (
              <AnimatedSection key={index} delay={index * 150}>
                <div className="text-center">
                  <div className="text-5xl font-bold text-accent/30">{step.step}</div>
                  <h3 className="mt-3 text-xl font-bold">{step.title}</h3>
                  <p className="mt-2 text-white/60 text-sm leading-relaxed">{step.description}</p>
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
            <div className="relative bg-gradient-to-br from-primary via-primary to-[#011d5c] rounded-3xl p-12 lg:p-20 text-center text-white overflow-hidden">
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
                  Need a Custom Research Solution?
                </h2>
                <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
                  Every engagement is tailored to your unique strategic questions. Tell us about
                  your market, your challenge, and your timeline, and we will design a research
                  approach that delivers exactly the intelligence you need.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-white font-semibold hover:bg-accent-dark transition-all shadow-lg shadow-accent/25"
                  >
                    Request a Proposal
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition-all border border-white/20"
                  >
                    Learn About Our Team
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
