import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, CheckCircle2, Users, Globe2, Shield, Search, BarChart3, FileText, Briefcase, Zap } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import PageHero from '@/components/PageHero';
import { images } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Partner Solutions',
  description:
    'Medinsights+ partner solutions for consulting firms, market research agencies, and CROs: white-label fieldwork, panel access, KOL recruitment, multi-country coordination, and on-demand therapeutic expertise.',
};

const partnerServices = [
  {
    title: 'White-Label Primary Research',
    description:
      'Full primary research execution under your brand. We handle respondent recruitment, fieldwork, data collection, and quality assurance — you deliver the insights to your clients. Our white-label engagements are indistinguishable from your in-house work, with complete confidentiality and no attribution.',
    capabilities: [
      'Qualitative fieldwork: IDIs, focus groups, advisory boards',
      'Quantitative surveys: online, CATI, hybrid methodologies',
      'Discussion guide and questionnaire design support',
      'Real-time fieldwork reporting and mid-course adjustments',
      'Complete deliverable preparation under your branding',
    ],
  },
  {
    title: 'KOL Network & Panel Access',
    description:
      'Leverage our proprietary network of 10,000+ healthcare professionals across 30+ countries. We provide rapid, reliable access to hard-to-reach respondent populations — from niche rare disease KOLs to large-sample physician panels — with validated credentials and screened eligibility.',
    capabilities: [
      '10,000+ active HCPs across 50+ therapeutic areas',
      'Rapid KOL identification, profiling, and recruitment',
      'Patient and caregiver recruitment for complex conditions',
      'Payer, pharmacist, and nurse specialist panels',
      'Multi-country panel access with local-language support',
    ],
  },
  {
    title: 'On-Demand Therapeutic Expertise',
    description:
      'Augment your team with our disease area specialists when you need depth you don\'t carry in-house. Our analysts hold advanced degrees in life sciences and health economics, and bring hands-on experience in the therapeutic areas that matter to your clients.',
    capabilities: [
      'Oncology, immunology, rare disease, CNS, CV, metabolic specialists',
      'Clinical and regulatory landscape analysis',
      'Competitive intelligence and pipeline assessment',
      'Report writing and deliverable authoring',
      'Project-based or retainer-style specialist access',
    ],
  },
  {
    title: 'Multi-Country Research Coordination',
    description:
      'Execute complex multi-market studies with local expertise in every market. We coordinate fieldwork across geographies, ensuring harmonized methodology, consistent data quality, and culturally adapted instruments — so your multi-country projects deliver comparable, actionable results.',
    capabilities: [
      'Fieldwork coordination across 30+ countries',
      'Local-language moderation and translation services',
      'Harmonized data collection and quality assurance',
      'Country-specific regulatory and compliance management',
      'Single point of contact for global project delivery',
    ],
  },
];

const partnerBenefits = [
  { icon: Zap, title: 'Scale On Demand', description: 'Expand your healthcare research capacity without fixed overhead. Engage us for peak periods or specialized projects.' },
  { icon: Shield, title: 'Complete Confidentiality', description: 'All work is performed under strict NDA. Your clients never know we\'re involved. Full white-label capability.' },
  { icon: Globe2, title: 'Global Reach', description: 'Access respondents and market expertise across 30+ countries through a single partnership.' },
  { icon: Users, title: 'Dedicated Account Team', description: 'Named project managers who understand your standards, processes, and client expectations.' },
];

const stats = [
  { value: '10,000+', label: 'HCPs in Network' },
  { value: '30+', label: 'Countries Covered' },
  { value: '50+', label: 'Therapeutic Areas' },
  { value: '48hrs', label: 'Avg. Recruitment Start' },
  { value: '95%', label: 'Fieldwork Completion Rate' },
  { value: '100%', label: 'White-Label Confidentiality' },
];

export default function PartnerSolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Partner Solutions"
        backLink={{ href: '/services', label: 'All Services' }}
        title="Built to extend your team, not compete with it."
        description="Consulting firms, market research agencies, and CROs partner with Medinsights+ for white-label fieldwork, panel access, therapeutic expertise, and multi-country coordination — delivered seamlessly under your brand."
        image={images.consulting}
      />

      {/* Stats */}
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

      {/* Why Partner Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl">
              <p className="text-accent-dark font-semibold text-sm uppercase tracking-wider mb-4">Why Partner With Us</p>
              <h2 className="text-primary">Research execution that meets the standards your clients expect.</h2>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                When your clients commission healthcare market research, they expect institutional-quality
                intelligence delivered on time and on budget. We exist to help you deliver exactly that —
                whether you need a single KOL recruited in 48 hours or a 15-country quantitative study
                fielded in six weeks.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerBenefits.map((benefit, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="card p-6 h-full">
                  <benefit.icon className="w-8 h-8 text-accent mb-4" />
                  <h4 className="text-primary">{benefit.title}</h4>
                  <p className="mt-2 text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Services */}
      {partnerServices.map((service, idx) => (
        <section key={idx} className={`py-20 lg:py-28 ${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-7">
                <AnimatedSection>
                  <div className="text-sm font-bold text-accent-dark uppercase tracking-wider mb-2">0{idx + 1}</div>
                  <h2 className="text-primary">{service.title}</h2>
                  <p className="mt-4 text-gray-600 leading-relaxed text-lg">{service.description}</p>
                </AnimatedSection>
              </div>
              <div className="lg:col-span-5">
                <AnimatedSection delay={150}>
                  <div className="bg-white rounded-lg p-8 border border-gray-200">
                    <h4 className="text-primary mb-4">Capabilities</h4>
                    <div className="space-y-3">
                      {service.capabilities.map((cap, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Who We Partner With */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">Who We Work With</p>
              <h2 className="text-white">Trusted by leading research and consulting organizations worldwide.</h2>
            </div>
          </AnimatedSection>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Management Consulting Firms', description: 'Strategy consultancies that need healthcare-specific primary research, CI, and market analysis to support their advisory engagements.' },
              { title: 'Market Research Agencies', description: 'Full-service and specialist research firms that need fieldwork execution, panel access, and therapeutic expertise for healthcare projects.' },
              { title: 'CROs & Healthcare Services', description: 'Contract research organizations and healthcare service companies that need market intelligence to support their clients\' commercial decisions.' },
            ].map((type, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="bg-white/10 rounded-lg p-8 border border-white/10">
                  <h3 className="text-white text-lg">{type.title}</h3>
                  <p className="mt-3 text-white/70 text-sm leading-relaxed">{type.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl">
              <p className="text-accent-dark font-semibold text-sm uppercase tracking-wider mb-4">Engagement Models</p>
              <h2 className="text-primary">Flexible partnership structures designed around your workflow.</h2>
            </div>
          </AnimatedSection>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Project-Based', description: 'Engage us for individual projects. Ideal for testing the partnership or handling overflow capacity. No minimum commitment.', metric: 'From 2-week sprints' },
              { title: 'Preferred Partner', description: 'Establish a framework agreement with preferred pricing and priority access to our panel and specialists. Quarterly business reviews included.', metric: 'Annual framework' },
              { title: 'Embedded Team', description: 'Dedicated Medinsights+ analysts integrated into your project teams. Functions as an extension of your organization with full access to our platform.', metric: 'Ongoing retainer' },
            ].map((model, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="card p-8 h-full">
                  <div className="text-xs font-bold text-accent-dark uppercase tracking-wider">{model.metric}</div>
                  <h3 className="text-primary mt-3">{model.title}</h3>
                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">{model.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-primary">Let&apos;s discuss a partnership.</h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Tell us about your team&apos;s healthcare research needs and we&apos;ll propose
              a partnership structure that fits your workflow and quality standards.
            </p>
            <Link href="/contact" className="btn-primary mt-8">
              Schedule a Partnership Discussion <ArrowUpRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-accent-dark font-semibold text-sm uppercase tracking-wider mb-4">Our Service Pillars</p>
            <h2 className="text-primary">Explore our full capabilities.</h2>
          </AnimatedSection>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Search, title: 'Primary Research', href: '/services/primary-research' },
              { icon: BarChart3, title: 'Secondary Research', href: '/services/secondary-research' },
              { icon: FileText, title: 'Syndicated Reports', href: '/services/syndicated-reports' },
              { icon: Briefcase, title: 'Consulting', href: '/services/consulting' },
            ].map((svc, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <Link href={svc.href} className="group card block p-6 no-underline hover:no-underline">
                  <svc.icon className="w-6 h-6 text-primary mb-3" />
                  <h4 className="text-primary">{svc.title}</h4>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
