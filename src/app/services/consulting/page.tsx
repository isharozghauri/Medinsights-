import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, CheckCircle2, Briefcase, Search, BarChart3, FileText, Target, Users, LineChart, TrendingUp, Shield, Layers, Globe2 } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { images } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Strategic Consulting',
  description: 'Medinsights+ strategic consulting: market entry strategy, competitive positioning, commercial due diligence, launch excellence, and lifecycle management for pharma, biotech, and medtech.',
};

const serviceAreas = [
  { icon: Target, title: 'Market Entry Strategy', description: 'Comprehensive go/no-go assessments that evaluate market opportunity, competitive intensity, regulatory pathway complexity, market access landscape, and commercial infrastructure requirements. We deliver data-driven recommendations on indication sequencing, geographic prioritization, and launch timing to maximize commercial potential.', outcomes: ['Market opportunity quantification', 'Go/no-go decision frameworks', 'Launch sequencing recommendations', 'Geographic market prioritization'] },
  { icon: Users, title: 'Competitive Positioning & Differentiation', description: 'Research-informed brand positioning strategies that identify optimal differentiation platforms, messaging hierarchies, and value propositions. We combine primary research with competitive analysis to develop positioning that resonates with physicians, payers, and patients while defensibly differentiating from competitors.', outcomes: ['Brand positioning platform development', 'Message testing and optimization', 'Competitive differentiation mapping', 'Stakeholder-specific value propositions'] },
  { icon: LineChart, title: 'Commercial Due Diligence', description: 'Rigorous market assessments that support business development, licensing, and M&A decisions. We provide independent commercial evaluations covering market attractiveness, competitive dynamics, revenue potential, and risk factors to inform asset valuation and deal structuring.', outcomes: ['Independent market attractiveness scoring', 'Revenue forecast modeling with scenarios', 'Competitive risk assessment', 'Deal-relevant strategic recommendations'] },
  { icon: TrendingUp, title: 'Launch Excellence', description: 'End-to-end pre-launch and launch planning that integrates market research, competitive intelligence, and strategic advisory. We help teams build launch readiness across medical affairs, commercial operations, and market access to ensure successful market entry.', outcomes: ['Launch readiness assessment and gap analysis', 'KOL engagement and medical affairs planning', 'Pre-launch market shaping strategy', 'Launch metric definition and tracking'] },
  { icon: Layers, title: 'Lifecycle Management', description: 'Strategic advisory for products approaching or past loss of exclusivity, including indication expansion evaluation, line extension assessment, reformulation strategy, and lifecycle optimization. We help maximize the value of your existing portfolio while managing competitive threats.', outcomes: ['Indication expansion opportunity assessment', 'LOE defense strategy development', 'Line extension and reformulation evaluation', 'Portfolio optimization recommendations'] },
  { icon: Shield, title: 'Portfolio Prioritization', description: 'Structured frameworks for evaluating and prioritizing pipeline assets across therapeutic areas, development stages, and strategic fit. We apply quantitative scoring methodologies and strategic alignment analysis to support resource allocation decisions.', outcomes: ['Multi-criteria pipeline scoring frameworks', 'Resource allocation recommendations', 'Strategic fit and synergy assessment', 'Risk-adjusted portfolio valuation'] },
];

const engagementModels = [
  { title: 'Project-Based', description: 'Discrete consulting engagements scoped around specific strategic questions. Ideal for one-time assessments such as market entry evaluation, commercial due diligence, or competitive positioning studies. Typical duration: 4-12 weeks.', icon: Target },
  { title: 'Retainer Advisory', description: 'Ongoing strategic advisory relationship providing continuous access to our consulting team for ad-hoc strategic questions, market developments interpretation, and decision support. Includes monthly strategy calls and quarterly deep-dives.', icon: Users },
  { title: 'Embedded Team', description: 'Dedicated Medinsights+ consultants embedded within your organization for extended engagements. Functions as an extension of your internal strategy or commercial team, providing day-to-day analytical and strategic support.', icon: Globe2 },
];

const processSteps = [
  { step: '01', title: 'Diagnose', description: 'We begin with a structured diagnostic to understand your strategic context, decision framework, key assumptions, and information gaps. This ensures every recommendation is anchored to your specific situation.' },
  { step: '02', title: 'Design', description: 'We develop a customized analytical framework and workplan that combines primary research, secondary analysis, and strategic modeling to address your questions comprehensively.' },
  { step: '03', title: 'Deliver', description: 'We execute the analysis and synthesize findings into actionable recommendations, delivered through structured presentations and working sessions with your leadership team.' },
  { step: '04', title: 'Support', description: 'We provide ongoing support during implementation, including stakeholder alignment sessions, scenario planning workshops, and strategic advisory as market conditions evolve.' },
];

export default function ConsultingPage() {
  return (
    <>
      <section className="relative text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={images.consulting} alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link href="/services" className="inline-flex items-center gap-2 text-accent text-sm font-medium mb-4 hover:text-accent-light transition-colors"><ArrowRight className="w-4 h-4 rotate-180" /> All Services</Link>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">Strategic <span className="text-accent">Consulting</span></h1>
            <p className="mt-6 text-xl text-white/70 leading-relaxed">Translate research into action. We partner with pharmaceutical, biotechnology, and medical technology companies to develop market entry strategies, optimize competitive positioning, support commercial due diligence, and drive launch excellence across global markets.</p>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-4xl">
              <p className="text-accent font-semibold text-sm uppercase tracking-wider">Overview</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900">Research-Informed Strategy for Healthcare Leaders</h2>
              <div className="mt-6 space-y-4 text-slate-600 leading-relaxed text-lg">
                <p>The best strategy is built on the best evidence. Our consulting practice is unique in that every strategic recommendation we make is grounded in primary research insights, competitive intelligence, and analytical rigor — not opinion. This research-informed approach ensures that our clients make decisions based on what the market actually looks like, not what they assume it to be.</p>
                <p>Our consulting team brings a blend of life sciences strategy consulting experience (from firms like McKinsey, BCG, and LEK) with deep healthcare industry expertise. We understand both the analytical frameworks that drive strategic clarity and the clinical, regulatory, and commercial realities that determine execution success.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {serviceAreas.map((area, idx) => (
        <section key={idx} className={`py-20 lg:py-24 ${idx % 2 === 0 ? 'bg-slate-50' : ''}`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-7">
                <AnimatedSection>
                  <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center"><area.icon className="w-6 h-6 text-primary" /></div>
                  <h2 className="mt-4 text-2xl font-bold text-slate-900">{area.title}</h2>
                  <p className="mt-4 text-slate-600 leading-relaxed">{area.description}</p>
                </AnimatedSection>
              </div>
              <div className="lg:col-span-5">
                <AnimatedSection delay={150}>
                  <div className="bg-white rounded-xl p-6 border border-slate-200">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3">Key Outcomes</h3>
                    {area.outcomes.map((o, i) => (<div key={i} className="flex items-start gap-2 mt-2"><CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" /><span className="text-sm text-slate-700">{o}</span></div>))}
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-24 lg:py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute -bottom-16 -left-16 w-48 h-48 border-[30px] border-accent rounded-full opacity-15" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection><p className="text-accent font-semibold text-sm uppercase tracking-wider">Our Approach</p><h2 className="mt-3 text-3xl font-bold">How We Work</h2></AnimatedSection>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 150}>
                <div className="text-center"><div className="text-5xl font-bold text-accent/30">{step.step}</div><h3 className="mt-3 text-xl font-bold">{step.title}</h3><p className="mt-2 text-white/60 text-sm leading-relaxed">{step.description}</p></div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection><p className="text-accent font-semibold text-sm uppercase tracking-wider">Engagement Models</p><h2 className="mt-3 text-3xl font-bold text-slate-900">Flexible Partnership Options</h2></AnimatedSection>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {engagementModels.map((model, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="card-premium p-8 h-full">
                  <model.icon className="w-8 h-8 text-primary" />
                  <h3 className="mt-4 text-xl font-bold text-slate-900">{model.title}</h3>
                  <p className="mt-3 text-slate-600 leading-relaxed">{model.description}</p>
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
              { icon: Search, title: 'Primary Research', href: '/services/primary-research', desc: 'First-hand intelligence from KOLs, physicians, patients, and payers.' },
              { icon: BarChart3, title: 'Secondary Research', href: '/services/secondary-research', desc: 'Competitive intelligence, market sizing, and regulatory analysis.' },
              { icon: FileText, title: 'Syndicated Reports', href: '/services/syndicated-reports', desc: 'Multi-client reports covering therapeutic landscapes and pipelines.' },
            ].map((svc, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <Link href={svc.href} className="group card-premium p-8 block h-full"><svc.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" /><h3 className="mt-4 text-lg font-bold text-slate-900">{svc.title}</h3><p className="mt-2 text-sm text-slate-600">{svc.desc}</p><span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-accent transition-colors">Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span></Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Ready to Turn Insights Into Strategy?</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">Let&apos;s discuss how our consulting team can help you navigate your most critical strategic challenges.</p>
            <div className="mt-10"><Link href="/contact" className="btn-primary px-8 py-4">Schedule a Discussion <ArrowUpRight className="w-5 h-5" /></Link></div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
