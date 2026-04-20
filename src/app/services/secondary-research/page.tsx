import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, CheckCircle2, BarChart3, FileText, Search, Briefcase, Database, LineChart, Shield, Globe2, TrendingUp } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import PageHero from '@/components/PageHero';
import { images } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Secondary Research',
  description: 'Medinsights+ secondary research: competitive intelligence, market sizing, regulatory analysis, pricing research, and evidence-based healthcare market analysis.',
};

const serviceAreas = [
  {
    icon: TrendingUp,
    title: 'Competitive Intelligence & Pipeline Tracking',
    description: 'Comprehensive monitoring and analysis of competitor pipelines, clinical development programs, regulatory milestones, and commercial strategies. We deliver structured competitive landscapes that map the current and future competitive environment across therapeutic areas, including SWOT analysis, competitive benchmarking, and strategic implications for your portfolio.',
    capabilities: ['Pipeline tracking across all development phases', 'Competitive SWOT and benchmarking analysis', 'Patent and exclusivity landscape reviews', 'Conference coverage and competitor monitoring', 'Quarterly competitive update reports'],
    image: images.pharmaceutical,
  },
  {
    icon: LineChart,
    title: 'Market Sizing & Forecasting',
    description: 'Epidemiology-based market models that quantify addressable patient populations, treatment rates, market penetration, and revenue potential across geographies. Our forecasting methodology integrates clinical, commercial, and market access variables to deliver scenario-based projections that inform pipeline valuation and commercial planning.',
    capabilities: ['Epidemiology-based patient flow modeling', 'Revenue forecasting with scenario analysis', 'Market share estimation and projection', 'Addressable market quantification', 'Sensitivity analysis and assumption testing'],
    image: images.chartsDashboard,
  },
  {
    icon: Shield,
    title: 'Regulatory Intelligence',
    description: 'Systematic analysis of regulatory filings, approval pathways, clinical trial data, and labeling across FDA, EMA, PMDA, and other global regulatory agencies. We monitor regulatory actions, advisory committee outcomes, and evolving requirements to identify risks and opportunities for your development and commercial programs.',
    capabilities: ['FDA/EMA filing and approval analysis', 'Clinical trial database monitoring (ClinicalTrials.gov)', 'Advisory committee briefing documents review', 'Regulatory pathway assessment and comparison', 'Labeling and indication analysis'],
    image: images.research2,
  },
  {
    icon: Database,
    title: 'Pricing & Market Access Analysis',
    description: 'Data-driven pricing intelligence covering ex-manufacturer pricing, international reference pricing, gross-to-net dynamics, HTA outcomes, and formulary positioning. We analyze reimbursement landscapes across public and private payers to support market access strategy and pricing optimization.',
    capabilities: ['International reference pricing analysis', 'HTA decision tracking (NICE, G-BA, HAS, PBAC)', 'Formulary status monitoring across markets', 'Gross-to-net and contracting analysis', 'Value dossier and AMCP format support'],
    image: images.pills,
  },
];

const dataSources = [
  'PubMed & MEDLINE', 'ClinicalTrials.gov & EU CTR', 'FDA Orange Book & Purple Book', 'EMA Public Assessment Reports',
  'SEC/EDGAR Filings', 'USPTO & EPO Patent Databases', 'IQVIA & Evaluate Pharma', 'GlobalData & Datamonitor',
  'Conference Proceedings (ASCO, ESMO, AAN, ACR, etc.)', 'WHO & CDC Epidemiology Data', 'National Formulary Databases',
  'Health Technology Assessment Bodies', 'Published Literature & Systematic Reviews', 'Company Annual Reports & Press Releases',
];

const deliverables = [
  'Comprehensive market landscape reports', 'Competitive intelligence dashboards', 'Market sizing and forecast models (Excel)',
  'Regulatory pathway comparison matrices', 'Pricing and market access scorecards', 'Pipeline tracker databases',
  'Executive briefing presentations', 'Periodic update reports (quarterly/annual)',
];

export default function SecondaryResearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Service"
        backLink={{ href: '/services', label: 'All Services' }}
        title="Secondary & desk research."
        description="Transform published data into strategic intelligence. We analyze clinical, regulatory, commercial, and epidemiological data to build comprehensive market landscapes."
        image={images.dataAnalytics}
      />

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="max-w-4xl">
                <p className="text-accent font-semibold text-sm uppercase tracking-wider">Overview</p>
                <h2 className="mt-3 text-3xl font-bold text-slate-900">Evidence-Based Intelligence for Strategic Decisions</h2>
                <div className="mt-6 space-y-4 text-slate-600 leading-relaxed text-lg">
                  <p>The healthcare industry generates vast quantities of publicly available data — clinical trial results, regulatory filings, epidemiological studies, pricing databases, patent records, and conference presentations. The challenge is not access to data, but the ability to synthesize it into coherent, actionable intelligence that answers your specific strategic questions.</p>
                  <p>Medinsights+ secondary research practice brings together experienced healthcare analysts with structured analytical frameworks to convert raw data into strategic insight. Every project is designed around your decision context — whether you need to size a market opportunity, map a competitive landscape, assess a regulatory pathway, or benchmark pricing across markets.</p>
                  <p>Our analysts hold advanced degrees in life sciences, health economics, and public health, bringing the clinical and commercial literacy needed to interpret complex healthcare data accurately and extract meaningful strategic implications.</p>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden h-96 hidden lg:block">
                <Image src={images.labResearch} alt="Research laboratory" fill className="object-cover" />
                <div className="absolute inset-0 bg-primary/20" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {serviceAreas.map((area, idx) => (
        <section key={idx} className={`py-24 lg:py-32 ${idx % 2 === 0 ? 'bg-slate-50' : ''}`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className={`lg:col-span-7 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <AnimatedSection>
                  <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center">
                    <area.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="mt-5 text-2xl font-bold text-slate-900">{area.title}</h2>
                  <p className="mt-4 text-slate-600 leading-relaxed text-lg">{area.description}</p>
                </AnimatedSection>
                <AnimatedSection delay={150}>
                  <div className="mt-8 bg-white rounded-2xl p-8 border border-slate-200">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">Key Capabilities</h3>
                    <div className="space-y-3">
                      {area.capabilities.map((cap, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                          <span className="text-slate-700">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              </div>
              <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <AnimatedSection delay={200}>
                  <div className="relative rounded-2xl overflow-hidden h-80">
                    <Image src={area.image} alt={area.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="relative py-24 lg:py-32 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src={images.biotech} alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-primary/95" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-accent font-semibold text-sm uppercase tracking-wider">Data Sources</p>
            <h2 className="mt-3 text-3xl font-bold">Comprehensive Data Coverage</h2>
            <p className="mt-4 text-white/70 text-lg max-w-3xl">We leverage a wide range of proprietary and public data sources to ensure completeness and accuracy in every analysis.</p>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="mt-10 flex flex-wrap gap-3">
              {dataSources.map((source) => (
                <span key={source} className="px-4 py-2 bg-white/10 rounded-full text-sm text-white/80 border border-white/10">{source}</span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <AnimatedSection>
                <p className="text-accent font-semibold text-sm uppercase tracking-wider">Deliverables</p>
                <h2 className="mt-3 text-3xl font-bold text-slate-900">What You Receive</h2>
              </AnimatedSection>
              <AnimatedSection delay={150}>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" /><span className="text-slate-700">{item}</span></div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={200}>
              <div className="relative rounded-2xl overflow-hidden h-80 hidden lg:block">
                <Image src={images.officeModern} alt="Modern office" fill className="object-cover" />
                <div className="absolute inset-0 bg-primary/20" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection><p className="text-accent font-semibold text-sm uppercase tracking-wider">Related Services</p><h2 className="mt-3 text-3xl font-bold text-slate-900">Explore More Capabilities</h2></AnimatedSection>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Search, title: 'Primary Research', href: '/services/primary-research', desc: 'First-hand intelligence from KOLs, physicians, patients, and payers.', image: images.doctor },
              { icon: FileText, title: 'Syndicated Reports', href: '/services/syndicated-reports', desc: 'Multi-client reports covering therapeutic landscapes and market trackers.', image: images.chartsDashboard },
              { icon: Briefcase, title: 'Strategic Consulting', href: '/services/consulting', desc: 'Advisory for market entry, competitive positioning, and launch excellence.', image: images.consulting },
            ].map((svc, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <Link href={svc.href} className="group block bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image src={svc.image} alt={svc.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <svc.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900">{svc.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{svc.desc}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-accent transition-colors">Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Need a Custom Secondary Research Project?</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">From competitive landscapes to market forecasts, our team delivers evidence-based intelligence tailored to your strategic questions.</p>
            <div className="mt-10"><Link href="/contact" className="btn-primary px-8 py-4">Request a Proposal <ArrowUpRight className="w-5 h-5" /></Link></div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
