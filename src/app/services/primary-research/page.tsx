import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Search,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  MessageSquare,
  ClipboardList,
  Users,
  Target,
  Shield,
  Globe2,
  BarChart3,
  FileText,
  Briefcase,
  Microscope,
  HeartPulse,
  Stethoscope,
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { images } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Primary Market Research',
  description:
    'Medinsights+ primary market research services: KOL interviews, physician surveys, patient research, advisory boards, and multi-country fieldwork across 50+ therapeutic areas.',
};

const qualitativeServices = [
  {
    icon: MessageSquare,
    title: 'KOL In-Depth Interviews',
    description:
      'One-on-one interviews with key opinion leaders and leading specialists to capture expert perspectives on treatment algorithms, pipeline expectations, competitive positioning, and unmet needs. Our experienced moderators navigate complex clinical discussions to extract strategic insights that inform product development and commercialization decisions.',
  },
  {
    icon: Users,
    title: 'Advisory Boards & Expert Panels',
    description:
      'Structured advisory board meetings bringing together 6-12 KOLs to provide collective expert input on clinical development strategy, positioning, messaging, and market access. We manage end-to-end logistics including recruitment, moderation, compliance, and reporting.',
  },
  {
    icon: Target,
    title: 'Focus Groups & Concept Testing',
    description:
      'Moderated focus groups with physicians, patients, or payers to test product concepts, marketing materials, value propositions, and educational content. Our qualitative researchers apply projective techniques and laddering to uncover underlying motivations and perceptions.',
  },
  {
    icon: HeartPulse,
    title: 'Patient Journey Mapping',
    description:
      'Comprehensive ethnographic research tracing the patient experience from symptom onset through diagnosis, treatment initiation, switching, and ongoing management. We identify critical touchpoints, barriers, and unmet needs that shape therapeutic decision-making.',
  },
  {
    icon: Stethoscope,
    title: 'Ethnographic & Observational Research',
    description:
      'In-context observation studies in clinical settings to understand real-world prescribing behaviors, workflow integration, device usability, and patient-provider interactions that surveys alone cannot capture.',
  },
];

const quantitativeServices = [
  {
    icon: ClipboardList,
    title: 'Physician & Specialist Surveys',
    description:
      'Large-scale quantitative surveys with statistically robust sample sizes to measure treatment patterns, brand perceptions, switching triggers, formulary influence, and unmet need across therapeutic areas. We support both online and telephone-administered methodologies.',
  },
  {
    icon: HeartPulse,
    title: 'Patient & Caregiver Surveys',
    description:
      'Validated patient-reported outcome studies measuring treatment satisfaction, quality of life impact, symptom burden, and willingness to switch. Our patient recruitment capabilities span rare diseases to large chronic conditions.',
  },
  {
    icon: Shield,
    title: 'Payer & Market Access Research',
    description:
      'Quantitative payer research covering formulary decision-making, reimbursement criteria, step therapy protocols, prior authorization requirements, and willingness-to-pay thresholds across public and private payers.',
  },
  {
    icon: BarChart3,
    title: 'Conjoint & MaxDiff Analysis',
    description:
      'Advanced analytical techniques including discrete choice experiments, conjoint analysis, and MaxDiff exercises to quantify the relative importance of product attributes, price sensitivity, and preference share simulations.',
  },
];

const therapeuticAreas = [
  'Oncology & Hematology', 'Immunology & Inflammation', 'Rare & Orphan Diseases',
  'CNS & Neurology', 'Cardiovascular', 'Metabolic & Endocrinology',
  'Infectious Disease', 'Respiratory', 'Dermatology', 'Gastroenterology',
  'Ophthalmology', 'Musculoskeletal', 'Gene & Cell Therapy',
  "Women's Health", 'Pediatrics', 'Psychiatry & Mental Health',
];

const respondentTypes = [
  { title: 'Physicians & Specialists', description: 'Board-certified specialists, general practitioners, and sub-specialists across all therapeutic areas' },
  { title: 'Key Opinion Leaders', description: 'Nationally and internationally recognized clinical experts, researchers, and guideline authors' },
  { title: 'Patients & Caregivers', description: 'Diagnosed patients and their caregivers across rare and common disease areas worldwide' },
  { title: 'Payers & Formulary Decision-Makers', description: 'Health plan medical directors, P&T committee members, and government payer officials' },
  { title: 'Pharmacists & Nurses', description: 'Hospital pharmacists, specialty pharmacists, oncology nurses, and nurse practitioners' },
  { title: 'Hospital Administrators', description: 'C-suite executives, procurement directors, and department heads at hospitals and health systems' },
];

const methodologySteps = [
  { title: 'Discussion Guide Development', description: 'Collaborative guide design grounded in your strategic questions, incorporating skip logic, projective exercises, and validated scales.' },
  { title: 'Sample Design & Recruitment', description: 'Rigorous sampling frameworks using our proprietary panel of 10,000+ healthcare professionals and established patient recruitment partnerships.' },
  { title: 'Multi-Country Coordination', description: 'Seamless fieldwork execution across global markets with local-language moderation, cultural adaptation, and harmonized data collection.' },
  { title: 'Real-Time Insight Synthesis', description: 'Progressive analysis throughout fieldwork, enabling mid-course corrections and preliminary findings delivery before final reporting.' },
  { title: 'Quality Assurance', description: 'Multi-layer QA including respondent validation, data cleaning, verbatim verification, and statistical testing to ensure reliability.' },
];

const deliverables = [
  'Executive summary with strategic implications',
  'Detailed findings report with data tables and charts',
  'Verbatim quotes and illustrative case studies',
  'Statistical analysis and significance testing',
  'Competitive benchmarking matrices',
  'Actionable recommendations aligned to business objectives',
  'Raw data files and cross-tabulations',
  'Presentation deck for internal stakeholder communication',
];

export default function PrimaryResearchPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-ink text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={images.doctor} alt="" fill className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-primary/90 to-primary/80" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link href="/services" className="inline-flex items-center gap-2 text-accent text-sm font-medium mb-4 hover:text-accent-light transition-colors">
              <ArrowRight className="w-4 h-4 rotate-180" /> All Services
            </Link>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Primary Market <span className="text-accent">Research</span>
            </h1>
            <p className="mt-6 text-xl text-white/70 leading-relaxed">
              Gain first-hand intelligence from the healthcare professionals, patients, and payers who shape your market. Our primary research practice combines rigorous qualitative and quantitative methodologies with deep therapeutic expertise to uncover the attitudes, behaviors, and unmet needs that drive prescribing decisions and market access outcomes globally.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="max-w-4xl">
                <p className="text-accent font-semibold text-sm uppercase tracking-wider">Overview</p>
                <h2 className="mt-3 text-3xl font-bold text-slate-900">First-Hand Intelligence From the Stakeholders Who Matter</h2>
                <div className="mt-6 space-y-4 text-slate-600 leading-relaxed text-lg">
                  <p>
                    In an industry where clinical data alone cannot predict commercial success, understanding the human factors — physician prescribing habits, patient treatment preferences, payer reimbursement logic — is essential. Medinsights+ primary research delivers these insights through direct engagement with the people who influence healthcare decisions.
                  </p>
                  <p>
                    Our team of experienced researchers brings specialized therapeutic knowledge to every engagement, ensuring that interviews, surveys, and advisory boards are designed to extract actionable insights rather than surface-level opinions. We recruit from our proprietary network of 10,000+ healthcare professionals across 30+ countries, enabling rapid fieldwork execution even in niche specialties and rare disease areas.
                  </p>
                  <p>
                    Whether you need a focused qualitative exploration with 15 KOLs or a multi-country quantitative study surveying 1,000+ physicians, our flexible engagement model scales to match your strategic questions, timeline, and budget.
                  </p>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden h-96 hidden lg:block">
                <Image src={images.teamMeeting} alt="Research team meeting" fill className="object-cover" />
                <div className="absolute inset-0 bg-primary/20" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Qualitative Research */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-accent font-semibold text-sm uppercase tracking-wider">Qualitative Research</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">Deep Insights Through Expert Engagement</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-3xl">Our qualitative capabilities are designed to capture the nuanced perspectives that quantitative data cannot reveal — the &ldquo;why&rdquo; behind clinical decisions, patient behaviors, and market dynamics.</p>
          </AnimatedSection>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {qualitativeServices.map((service, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="card-premium p-8 h-full">
                  <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">{service.title}</h3>
                  <p className="mt-3 text-slate-600 leading-relaxed">{service.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quantitative Research */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <AnimatedSection>
                <p className="text-accent font-semibold text-sm uppercase tracking-wider">Quantitative Research</p>
                <h2 className="mt-3 text-3xl font-bold text-slate-900">Statistically Rigorous, Strategically Relevant</h2>
                <p className="mt-4 text-lg text-slate-600 max-w-3xl">Our quantitative research programs deliver the statistical power and analytical depth needed to support high-stakes commercial and clinical decisions with confidence.</p>
              </AnimatedSection>
              <div className="mt-12 space-y-8">
                {quantitativeServices.map((service, i) => (
                  <AnimatedSection key={i} delay={i * 100}>
                    <div className="card-premium p-8 h-full">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="mt-4 text-lg font-bold text-slate-900">{service.title}</h3>
                      <p className="mt-3 text-slate-600 leading-relaxed">{service.description}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
            <AnimatedSection delay={200}>
              <div className="relative rounded-2xl overflow-hidden h-[500px] sticky top-32 hidden lg:block">
                <Image src={images.dataAnalytics} alt="Data analytics" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Therapeutic Areas */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-accent font-semibold text-sm uppercase tracking-wider">Coverage</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">Therapeutic Area Expertise</h2>
            <p className="mt-4 text-lg text-slate-600">Our research team brings specialized clinical knowledge across the full spectrum of therapeutic areas.</p>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="mt-10 flex flex-wrap gap-3">
              {therapeuticAreas.map((area) => (
                <span key={area} className="px-5 py-2.5 bg-white rounded-full text-sm text-primary font-medium border border-slate-200 hover:border-accent hover:text-accent transition-colors cursor-default">
                  {area}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Respondent Types */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-accent font-semibold text-sm uppercase tracking-wider">Respondent Access</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">Who We Reach</h2>
          </AnimatedSection>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {respondentTypes.map((type, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="p-6 bg-primary/[0.02] rounded-xl border border-slate-100">
                  <h3 className="font-bold text-slate-900">{type.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{type.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="relative py-24 lg:py-32 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src={images.microscope} alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-primary/95" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-accent font-semibold text-sm uppercase tracking-wider">Our Methodology</p>
            <h2 className="mt-3 text-3xl font-bold">Rigorous Process, Actionable Outcomes</h2>
          </AnimatedSection>
          <div className="mt-12 space-y-8">
            {methodologySteps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="flex gap-6 items-start">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-sm">{String(i + 1).padStart(2, '0')}</div>
                  <div>
                    <h3 className="text-lg font-bold">{step.title}</h3>
                    <p className="mt-1 text-white/70">{step.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
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
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={200}>
              <div className="relative rounded-2xl overflow-hidden h-80 hidden lg:block">
                <Image src={images.research2} alt="Research deliverables" fill className="object-cover" />
                <div className="absolute inset-0 bg-primary/20" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-accent font-semibold text-sm uppercase tracking-wider">Related Services</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">Explore More Capabilities</h2>
          </AnimatedSection>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: BarChart3, title: 'Secondary Research', href: '/services/secondary-research', desc: 'Evidence-based competitive intelligence and market analysis from published data sources.', image: images.dataAnalytics },
              { icon: FileText, title: 'Syndicated Reports', href: '/services/syndicated-reports', desc: 'Multi-client research reports covering therapeutic landscapes and market trackers.', image: images.chartsDashboard },
              { icon: Briefcase, title: 'Strategic Consulting', href: '/services/consulting', desc: 'Advisory services for market entry, competitive positioning, and launch excellence.', image: images.consulting },
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
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                      Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Need a Custom Primary Research Project?</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Every engagement is tailored to your strategic questions, therapeutic area, and geographic scope. Let&apos;s discuss how we can help.
            </p>
            <div className="mt-10">
              <Link href="/contact" className="btn-primary px-8 py-4">
                Request a Proposal <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
