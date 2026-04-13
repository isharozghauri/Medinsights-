import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, CheckCircle2, FileText, Search, BarChart3, Briefcase, BookOpen, Layers, TrendingUp, Calendar, Globe2 } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { images } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Syndicated Reports',
  description: 'Medinsights+ syndicated research reports: therapeutic landscape analyses, market trackers, pipeline monitors, and market access digests across oncology, immunology, rare disease, and more.',
};

const reportCategories = [
  { icon: BookOpen, title: 'Therapeutic Landscape Reports', description: 'Comprehensive single-point-in-time analyses covering disease overview, epidemiology, treatment landscape, competitive environment, pipeline assessment, market sizing, and 10-year forecasts. Each report runs 150-300 pages and is supported by proprietary primary research with 50-100+ KOL interviews.', features: ['Disease overview and pathophysiology', 'Epidemiology and patient segmentation', 'Current treatment algorithms and guidelines', 'Competitive product profiles and positioning', 'Pipeline analysis across all phases', 'Market sizing and revenue forecasts', 'Unmet needs and future outlook'], image: images.research2 },
  { icon: TrendingUp, title: 'Quarterly Market Trackers', description: 'Ongoing monitoring studies that track prescribing patterns, market shares, brand perceptions, and emerging trends through quarterly physician surveys and secondary data analysis. Ideal for commercial teams needing continuous competitive intelligence.', features: ['Brand awareness and perception tracking', 'Prescribing behavior and switching analysis', 'Market share trending and forecasting', 'Competitive messaging effectiveness', 'Quarterly KOL sentiment updates', 'Emerging competitor monitoring'], image: images.dataAnalytics },
  { icon: Layers, title: 'Pipeline Monitors', description: 'Regular updates on clinical development activity, regulatory milestones, and launch timelines across therapeutic areas. Our pipeline monitors combine secondary tracking with analyst commentary on competitive implications and probability-adjusted forecasts.', features: ['Phase-by-phase pipeline mapping', 'Clinical trial design and endpoint analysis', 'Regulatory milestone tracking', 'Launch timeline projections', 'Competitive impact assessment', 'Probability-adjusted revenue forecasts'], image: images.microscope },
  { icon: Globe2, title: 'Market Access Digests', description: 'Country-specific market access intelligence covering HTA decisions, formulary placements, reimbursement conditions, and pricing benchmarks. Available for major markets including US, EU5, Japan, Canada, Australia, and emerging markets.', features: ['HTA decision summaries and rationale', 'Formulary status and tier positioning', 'Reimbursement conditions and restrictions', 'Pricing benchmarks and comparisons', 'Market access strategy implications', 'Payer landscape and decision-maker mapping'], image: images.pills },
];

const therapeuticAreas = [
  'Oncology & Hematology', 'Immunology & Inflammation', 'Rare & Orphan Diseases', 'CNS & Neurology',
  'Cardiovascular', 'Metabolic & Endocrinology', 'Infectious Disease', 'Respiratory',
  'Dermatology', 'Gastroenterology', 'Gene & Cell Therapy', 'Ophthalmology',
];

const reportIncludes = [
  'Executive summary and strategic implications', 'Detailed epidemiology and patient flow analysis', 'Treatment landscape and prescribing algorithm mapping',
  'Competitive product profiles with SWOT analysis', 'Pipeline assessment across all development phases', 'Market sizing with 10-year revenue forecasts',
  'Primary research insights from KOL interviews', 'Data tables, charts, and competitive matrices', 'Analyst commentary and strategic recommendations',
];

const subscriptionModels = [
  { title: 'Single Report Purchase', description: 'Access individual reports on a per-title basis. Ideal for teams with focused, one-time intelligence needs in specific therapeutic areas or markets.', features: ['One-time purchase of any report', 'PDF and PowerPoint formats', '12 months of access to updates', 'Analyst inquiry time included'] },
  { title: 'Annual Subscription', description: 'Subscribe to a therapeutic area or report series for ongoing intelligence. Receive all new reports and updates published within your subscription scope throughout the year.', features: ['All reports in selected therapeutic area(s)', 'Quarterly updates and supplements', 'Priority analyst inquiry access', 'Custom data cuts on request', 'Annual strategy briefing'] },
  { title: 'Enterprise License', description: 'Organization-wide access to our full syndicated library. Designed for large pharmaceutical and consulting organizations that require broad therapeutic coverage across multiple teams.', features: ['Unlimited access to entire report library', 'Unlimited internal distribution rights', 'Dedicated account management', 'Custom analytics and data extracts', 'Quarterly strategic advisory sessions', 'Early access to new publications'] },
];

export default function SyndicatedReportsPage() {
  return (
    <>
      <section className="relative text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={images.chartsDashboard} alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link href="/services" className="inline-flex items-center gap-2 text-accent text-sm font-medium mb-4 hover:text-accent-light transition-colors"><ArrowRight className="w-4 h-4 rotate-180" /> All Services</Link>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">Syndicated Research <span className="text-accent">Reports</span></h1>
            <p className="mt-6 text-xl text-white/70 leading-relaxed">Access deep market intelligence through our library of multi-client research reports. Our syndicated program covers high-value therapeutic areas with regularly updated landscape analyses, pipeline monitors, and market access digests that keep your team informed and competitive.</p>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="max-w-4xl">
                <p className="text-accent font-semibold text-sm uppercase tracking-wider">Overview</p>
                <h2 className="mt-3 text-3xl font-bold text-slate-900">Multi-Client Intelligence, Single-Source Depth</h2>
                <div className="mt-6 space-y-4 text-slate-600 leading-relaxed text-lg">
                  <p>Not every strategic question requires a custom research engagement. Our syndicated research program provides cost-effective access to the same caliber of market intelligence that drives decision-making at the world&apos;s leading healthcare companies — at a fraction of the cost and timeline of bespoke research.</p>
                  <p>Each syndicated report is developed by our therapeutic area specialists, combining rigorous secondary research with proprietary primary data from 50-100+ KOL interviews. Reports are updated regularly to reflect new clinical data, regulatory actions, and competitive developments, ensuring your team operates with current intelligence.</p>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden h-96 hidden lg:block">
                <Image src={images.officeModern} alt="Modern research office" fill className="object-cover" />
                <div className="absolute inset-0 bg-primary/20" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {reportCategories.map((cat, idx) => (
        <section key={idx} className={`py-24 lg:py-32 ${idx % 2 === 0 ? 'bg-slate-50' : ''}`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <AnimatedSection>
                  <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center"><cat.icon className="w-7 h-7 text-primary" /></div>
                  <h2 className="mt-5 text-2xl font-bold text-slate-900">{cat.title}</h2>
                  <p className="mt-4 text-slate-600 leading-relaxed text-lg">{cat.description}</p>
                </AnimatedSection>
                <AnimatedSection delay={150}>
                  <div className="mt-6 bg-white rounded-2xl p-8 border border-slate-200">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">What&apos;s Included</h3>
                    <div className="space-y-3">
                      {cat.features.map((f, i) => (<div key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" /><span className="text-slate-700">{f}</span></div>))}
                    </div>
                  </div>
                </AnimatedSection>
              </div>
              <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <AnimatedSection delay={200}>
                  <div className="relative rounded-2xl overflow-hidden h-80">
                    <Image src={cat.image} alt={cat.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection><p className="text-accent font-semibold text-sm uppercase tracking-wider">Coverage</p><h2 className="mt-3 text-3xl font-bold text-slate-900">Therapeutic Areas Covered</h2></AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="mt-10 flex flex-wrap gap-3">
              {therapeuticAreas.map((area) => (<span key={area} className="px-5 py-2.5 bg-white rounded-full text-sm text-primary font-medium border border-slate-200 hover:border-accent hover:text-accent transition-colors cursor-default">{area}</span>))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection><p className="text-accent font-semibold text-sm uppercase tracking-wider">Subscription Models</p><h2 className="mt-3 text-3xl font-bold text-slate-900">Flexible Access Options</h2><p className="mt-4 text-lg text-slate-600">Choose the model that fits your organization&apos;s intelligence needs and budget.</p></AnimatedSection>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {subscriptionModels.map((model, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className={`card-premium p-8 h-full flex flex-col ${i === 2 ? 'ring-2 ring-accent' : ''}`}>
                  {i === 2 && <span className="inline-block px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full mb-4 self-start">Most Popular</span>}
                  <h3 className="text-xl font-bold text-slate-900">{model.title}</h3>
                  <p className="mt-3 text-slate-600 text-sm leading-relaxed">{model.description}</p>
                  <div className="mt-6 space-y-2 flex-grow">
                    {model.features.map((f, j) => (<div key={j} className="flex items-start gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" /><span className="text-slate-700">{f}</span></div>))}
                  </div>
                  <Link href="/contact" className="mt-8 inline-flex items-center justify-center gap-2 w-full py-3 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary-light transition-colors">
                    Request Pricing <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection><p className="text-accent font-semibold text-sm uppercase tracking-wider">Related Services</p><h2 className="mt-3 text-3xl font-bold text-slate-900">Explore More Capabilities</h2></AnimatedSection>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Search, title: 'Primary Research', href: '/services/primary-research', desc: 'Custom qualitative and quantitative research with KOLs, physicians, and patients.', image: images.doctor },
              { icon: BarChart3, title: 'Secondary Research', href: '/services/secondary-research', desc: 'Competitive intelligence, market sizing, and regulatory analysis.', image: images.dataAnalytics },
              { icon: Briefcase, title: 'Strategic Consulting', href: '/services/consulting', desc: 'Advisory for market entry, positioning, and commercial strategy.', image: images.consulting },
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
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Request a Sample Report</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">Interested in seeing the depth and quality of our syndicated intelligence? Request a sample report or table of contents for any therapeutic area.</p>
            <div className="mt-10"><Link href="/contact" className="btn-primary px-8 py-4">Request a Sample <ArrowUpRight className="w-5 h-5" /></Link></div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
