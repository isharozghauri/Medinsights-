import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Search,
  BarChart3,
  FileText,
  Users,
  ArrowUpRight,
  CheckCircle2,
  MessageSquare,
  ClipboardList,
  Database,
  LineChart,
  Target,
  Briefcase,
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore Medinsights+ healthcare market research services: primary research, secondary research, syndicated studies, and strategic consulting for pharma, biotech, and medtech.',
};

const services = [
  {
    id: 'primary-research',
    icon: Search,
    title: 'Primary Research',
    subtitle: 'Direct insights from the field',
    description:
      'Our primary research capabilities span qualitative and quantitative methodologies, delivering first-hand insights from key healthcare stakeholders across North America and Europe.',
    offerings: [
      {
        icon: MessageSquare,
        title: 'KOL & Physician Interviews',
        description: 'In-depth interviews and advisory boards with leading healthcare professionals across 50+ therapeutic areas.',
      },
      {
        icon: ClipboardList,
        title: 'Quantitative Surveys',
        description: 'Large-scale physician, patient, and payer surveys with robust sample sizes for statistically significant insights.',
      },
      {
        icon: Users,
        title: 'Patient Research',
        description: 'Ethnographic studies, patient journey mapping, and unmet need assessments across rare and common diseases.',
      },
      {
        icon: Target,
        title: 'Payer & Market Access',
        description: 'Payer research, formulary intelligence, and reimbursement landscape assessments across key markets.',
      },
    ],
    capabilities: [
      'KOL identification and recruitment',
      'Discussion guide development',
      'Multi-country fieldwork coordination',
      'Real-time insight synthesis',
      'Advisory board facilitation',
      'Patient advocacy group engagement',
    ],
  },
  {
    id: 'secondary-research',
    icon: BarChart3,
    title: 'Secondary Research',
    subtitle: 'Evidence-based intelligence',
    description:
      'We analyze vast datasets — clinical, regulatory, commercial, and epidemiological — to build comprehensive market landscapes and competitive intelligence frameworks.',
    offerings: [
      {
        icon: Database,
        title: 'Competitive Intelligence',
        description: 'Comprehensive pipeline tracking, competitive benchmarking, and SWOT analysis across therapeutic areas.',
      },
      {
        icon: LineChart,
        title: 'Market Sizing & Forecasting',
        description: 'Epidemiology-based market models, revenue forecasts, and scenario analysis for pipeline and commercial assets.',
      },
      {
        icon: FileText,
        title: 'Regulatory & Clinical Analysis',
        description: 'FDA/EMA filing analysis, clinical trial data interpretation, and regulatory pathway assessments.',
      },
      {
        icon: BarChart3,
        title: 'Pricing & Reimbursement',
        description: 'Ex-manufacturer pricing databases, international reference pricing analysis, and HTA outcome tracking.',
      },
    ],
    capabilities: [
      'Published literature review and synthesis',
      'Clinical trial database monitoring',
      'Regulatory intelligence tracking',
      'Epidemiological modeling',
      'Patent and exclusivity analysis',
      'Conference coverage and analysis',
    ],
  },
  {
    id: 'syndicated-research',
    icon: FileText,
    title: 'Syndicated Research',
    subtitle: 'Multi-client intelligence reports',
    description:
      'Our syndicated research program offers cost-effective access to deep market intelligence through multi-client studies covering high-value therapeutic areas and market dynamics.',
    offerings: [
      {
        icon: FileText,
        title: 'Therapeutic Area Reports',
        description: 'Comprehensive landscape reports covering market dynamics, competitive environment, and future outlook.',
      },
      {
        icon: LineChart,
        title: 'Market Trackers',
        description: 'Quarterly and annual tracking studies monitoring prescribing patterns, market shares, and emerging trends.',
      },
      {
        icon: Database,
        title: 'Pipeline Monitors',
        description: 'Regular updates on clinical development activity, regulatory milestones, and launch timelines.',
      },
      {
        icon: Target,
        title: 'Market Access Digests',
        description: 'Country-specific market access intelligence including formulary status, HTA decisions, and payer dynamics.',
      },
    ],
    capabilities: [
      'Oncology and immunology landscapes',
      'Rare disease market monitors',
      'CNS and neurology trackers',
      'Cardiovascular and metabolic reports',
      'Infectious disease intelligence',
      'Gene therapy and cell therapy outlooks',
    ],
  },
  {
    id: 'consulting',
    icon: Briefcase,
    title: 'Strategic Consulting',
    subtitle: 'Advisory for critical decisions',
    description:
      'Our consulting team partners with healthcare companies to translate research insights into actionable commercial strategy, from early pipeline decisions through to launch and lifecycle management.',
    offerings: [
      {
        icon: Target,
        title: 'Market Entry Strategy',
        description: 'Go/no-go assessments, market opportunity evaluation, and launch sequencing for new markets.',
      },
      {
        icon: Users,
        title: 'Competitive Positioning',
        description: 'Brand positioning research, messaging optimization, and differentiation strategy development.',
      },
      {
        icon: LineChart,
        title: 'Commercial Due Diligence',
        description: 'Asset valuation support, market attractiveness scoring, and risk assessment for M&A and licensing.',
      },
      {
        icon: Briefcase,
        title: 'Launch Excellence',
        description: 'Pre-launch analytics, KOL engagement strategy, and medical affairs planning for successful market entry.',
      },
    ],
    capabilities: [
      'Portfolio prioritization frameworks',
      'Indication sequencing analysis',
      'Pricing and market access strategy',
      'KOL engagement planning',
      'Lifecycle management strategy',
      'Business development target identification',
    ],
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

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider">Our Services</p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold leading-tight">
              End-to-End Healthcare{' '}
              <span className="text-accent">Research & Intelligence</span>
            </h1>
            <p className="mt-6 text-xl text-white/70 leading-relaxed">
              From primary fieldwork to strategic consulting, Medinsights+ provides the
              full spectrum of research services that healthcare companies need to compete.
            </p>
          </div>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service, sectionIndex) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-24 lg:py-32 ${sectionIndex % 2 === 1 ? 'bg-slate-50' : ''}`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="max-w-3xl">
                <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h2 className="mt-5 text-3xl sm:text-4xl font-bold text-slate-900">
                  {service.title}
                </h2>
                <p className="text-accent font-medium mt-2">{service.subtitle}</p>
                <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </AnimatedSection>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.offerings.map((offering, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow h-full">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <offering.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-slate-900">{offering.title}</h3>
                    <p className="mt-2 text-slate-600 leading-relaxed">{offering.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={300}>
              <div className="mt-12 bg-primary/5 rounded-2xl p-8">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Key Capabilities</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {service.capabilities.map((capability, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                      {capability}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      ))}

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
            </div>
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Deep-dive into your strategic questions, market context, and desired outcomes.' },
              { step: '02', title: 'Design', description: 'Custom research methodology, sample design, and analytical framework development.' },
              { step: '03', title: 'Execute', description: 'Rigorous fieldwork and data collection with real-time quality monitoring.' },
              { step: '04', title: 'Deliver', description: 'Actionable insights, strategic recommendations, and ongoing support.' },
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Need a Custom Research Solution?
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Every engagement is tailored to your unique strategic questions.
              Let&apos;s discuss how we can help.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-white font-semibold hover:bg-accent-dark transition-all shadow-lg shadow-accent/25"
              >
                Request a Proposal
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
