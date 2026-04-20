import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Target,
  TrendingUp,
  Users,
  Pill,
  Microscope,
  HeartPulse,
  Smartphone,
  Briefcase,
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import PageHero from '@/components/PageHero';
import { images } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Selected Medinsights+ engagements: anonymized case studies showing how we help pharmaceutical, biotech, medtech, and consulting clients make better healthcare decisions through research and intelligence.',
};

const caseStudies = [
  {
    industry: 'Pharmaceuticals',
    icon: Pill,
    service: 'Primary Research',
    title: 'Global oncology launch — 6-market KOL research in 8 weeks',
    client: 'Top-10 Global Pharmaceutical Company',
    challenge:
      'Client was preparing to launch a first-in-class oncology therapy across six European markets and needed rapid KOL input on positioning, competitive dynamics, and market access strategy within an 8-week window before executive approval of launch plans.',
    approach:
      'Deployed senior qualitative researchers in each market, recruited 45 oncology KOLs matching specific subspecialty and prescribing criteria, and conducted 60-minute in-depth interviews with a harmonized discussion guide translated into five languages. Delivered weekly progress reports and mid-course insights synthesis.',
    outcome: [
      '45 KOL interviews completed in 8 weeks across 6 markets',
      'Identified 3 critical positioning risks not previously flagged',
      'Informed go/no-go launch decision for 2 priority markets',
      'Findings directly shaped value proposition for health authority submissions',
    ],
    stats: [
      { label: 'KOL Interviews', value: '45' },
      { label: 'Markets', value: '6' },
      { label: 'Timeline', value: '8 weeks' },
    ],
    image: images.labResearch,
  },
  {
    industry: 'Biotechnology',
    icon: Microscope,
    service: 'Strategic Consulting',
    title: 'Rare disease indication prioritization for gene therapy asset',
    client: 'Mid-Cap Biotechnology Company',
    challenge:
      'A clinical-stage biotech with a novel gene therapy platform faced a strategic decision on which of four rare disease indications to advance to pivotal trials first, with significant implications for funding, partnership discussions, and regulatory strategy.',
    approach:
      'Conducted parallel market opportunity assessments for each indication including patient population sizing, competitive pipeline analysis, payer willingness to reimburse gene therapies, and KOL interviews on unmet need. Developed a multi-criteria scoring framework weighing commercial attractiveness against clinical feasibility.',
    outcome: [
      'Ranked all 4 indications with quantified opportunity estimates',
      'Identified 1 previously unconsidered indication as top opportunity',
      'Client advanced recommended indication to Phase 3',
      'Supporting analysis used in $180M Series C fundraise',
    ],
    stats: [
      { label: 'Indications Assessed', value: '4' },
      { label: 'KOL Interviews', value: '32' },
      { label: 'Timeline', value: '12 weeks' },
    ],
    image: images.microscope,
  },
  {
    industry: 'Medical Technology',
    icon: HeartPulse,
    service: 'Secondary Research',
    title: 'Competitive landscape for surgical robotics entry into EU',
    client: 'US-Based Medical Device Manufacturer',
    challenge:
      'A leading US surgical robotics company was evaluating European market entry and needed comprehensive competitive intelligence covering installed base, pricing, procurement dynamics, and regulatory pathways across EU5 markets.',
    approach:
      'Built a comprehensive competitive database tracking 8 active and 3 emerging competitors, analyzed 200+ hospital procurement decisions over 3 years, mapped reimbursement pathways in each market, and conducted interviews with 18 surgery department heads to validate market dynamics.',
    outcome: [
      'Installed base analysis across 5 EU markets',
      'Identified 2 underserved surgical specialties',
      'Pricing and contracting intelligence informed go-to-market',
      'Client secured commercial partnerships in 3 priority markets',
    ],
    stats: [
      { label: 'Competitors Tracked', value: '11' },
      { label: 'Hospital Decisions', value: '200+' },
      { label: 'Markets Analyzed', value: '5' },
    ],
    image: images.medicalDevice,
  },
  {
    industry: 'Digital Health',
    icon: Smartphone,
    service: 'Primary Research',
    title: 'Payer acceptance of digital therapeutics (DTx) for mental health',
    client: 'Series B Digital Therapeutics Company',
    challenge:
      'A digital therapeutics company with FDA-cleared products for anxiety and depression needed to understand US payer willingness to cover DTx, reimbursement pathway preferences, and evidence requirements before committing to a 2-year market access investment.',
    approach:
      'Conducted 60-minute interviews with 24 medical directors at regional and national payers covering 70M+ covered lives, supplemented by quantitative surveys of 150 P&T committee members. Analyzed coverage policies for the 5 prior DTx products to cross-validate findings.',
    outcome: [
      '24 payer medical director interviews',
      '150 P&T committee member survey completes',
      '3 viable reimbursement pathway models identified',
      'Client redirected go-to-market strategy based on findings',
    ],
    stats: [
      { label: 'Payer Interviews', value: '24' },
      { label: 'Lives Represented', value: '70M+' },
      { label: 'Timeline', value: '10 weeks' },
    ],
    image: images.dataAnalytics,
  },
  {
    industry: 'Healthcare Investors',
    icon: TrendingUp,
    service: 'Strategic Consulting',
    title: 'Commercial due diligence for $400M specialty pharma acquisition',
    client: 'Global Private Equity Firm',
    challenge:
      'A major PE firm was conducting diligence on a specialty pharma acquisition target with products in dermatology and rare disease, requiring rigorous commercial validation and competitive risk assessment within a compressed 6-week deal timeline.',
    approach:
      'Executed parallel workstreams covering market sizing, competitive intelligence, KOL validation of differentiation claims, payer research on pricing sustainability, and independent revenue forecasting. Delivered weekly findings updates to deal team and participated in management presentations.',
    outcome: [
      'Independent revenue forecast identified 20% variance from management case',
      'Flagged 1 significant competitive threat in Year 3',
      'Validated KOL endorsement of target\'s differentiation',
      'Supported final deal terms and value creation playbook',
    ],
    stats: [
      { label: 'Deal Size', value: '$400M' },
      { label: 'Expert Interviews', value: '38' },
      { label: 'Timeline', value: '6 weeks' },
    ],
    image: images.chartsDashboard,
  },
  {
    industry: 'Research Agencies',
    icon: Briefcase,
    service: 'Partner Solutions',
    title: 'White-label KOL research for top-3 global consulting firm',
    client: 'Global Management Consulting Firm',
    challenge:
      'A top-3 management consulting firm was supporting a pharma client on brand positioning and needed rapid KOL recruitment and qualitative fieldwork across 8 countries within their advisory timeline, without adding capacity to their internal research team.',
    approach:
      'Operated as a seamless extension of the consulting team under full white-label arrangement, recruiting 60 KOLs across 8 markets, executing 75-minute in-depth interviews, transcribing and coding responses, and delivering structured findings for the consulting team to integrate into their client deliverable.',
    outcome: [
      '60 KOL interviews across 8 countries in 7 weeks',
      'Full white-label delivery — client never engaged with us directly',
      'Enabled consulting firm to deliver on committed timeline',
      'Engagement converted to a 2-year preferred partner agreement',
    ],
    stats: [
      { label: 'KOL Interviews', value: '60' },
      { label: 'Countries', value: '8' },
      { label: 'Timeline', value: '7 weeks' },
    ],
    image: images.teamMeeting,
  },
  {
    industry: 'Pharmaceuticals',
    icon: Pill,
    service: 'Syndicated Reports',
    title: 'Immunology landscape intelligence for commercial planning',
    client: 'Top-20 Pharmaceutical Company',
    challenge:
      'Client\'s commercial organization needed ongoing intelligence on the rapidly evolving immunology therapeutic area to support portfolio strategy, competitive response planning, and lifecycle management across 3 marketed products and 2 pipeline assets.',
    approach:
      'Established an annual subscription to our Immunology Intelligence report series including quarterly updates, pipeline tracking across 200+ active programs, analyst commentary on regulatory developments, and quarterly strategic briefings tailored to client\'s portfolio context.',
    outcome: [
      'Ongoing competitive intelligence across 200+ programs',
      'Quarterly strategic briefings for commercial leadership',
      'Early identification of 5 pipeline threats',
      'Now in year 4 of multi-year subscription engagement',
    ],
    stats: [
      { label: 'Programs Tracked', value: '200+' },
      { label: 'Subscription Years', value: '4' },
      { label: 'Update Frequency', value: 'Quarterly' },
    ],
    image: images.pharmaceutical,
  },
  {
    industry: 'Biotechnology',
    icon: Microscope,
    service: 'Primary Research',
    title: 'Patient journey research for first-in-class rare disease therapy',
    client: 'Emerging Biotech Company',
    challenge:
      'An emerging biotech preparing to launch a first-in-class therapy for an ultra-rare genetic disease needed deep understanding of the patient journey, caregiver burden, and treatment decision-making to inform patient access programs and commercial infrastructure.',
    approach:
      'Conducted 90-minute ethnographic interviews with 28 patients and caregivers across the US and EU, supplemented by 15 physician interviews and patient advocacy group engagement. Developed comprehensive journey maps identifying critical touchpoints and unmet needs throughout diagnosis and treatment.',
    outcome: [
      '28 patient/caregiver ethnographic interviews',
      'Journey maps identifying 12 critical unmet needs',
      'Informed design of patient support program',
      'Cited in FDA advisory committee patient testimony',
    ],
    stats: [
      { label: 'Patient Interviews', value: '28' },
      { label: 'Physician Interviews', value: '15' },
      { label: 'Journey Stages Mapped', value: '7' },
    ],
    image: images.patient,
  },
];

const filterCategories = ['All', 'Pharmaceuticals', 'Biotechnology', 'Medical Technology', 'Digital Health', 'Healthcare Investors', 'Research Agencies'];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Selected engagements across healthcare."
        description="Anonymized examples of how we help pharmaceutical, biotechnology, medical technology, and consulting clients turn complex questions into confident decisions."
        image={images.teamMeeting}
      />

      {/* Stats Bar */}
      <section className="border-y border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
            {[
              { value: '500+', label: 'Projects Delivered' },
              { value: '200+', label: 'Client Organizations' },
              { value: '50+', label: 'Therapeutic Areas' },
              { value: '98%', label: 'Client Retention' },
            ].map((stat, i) => (
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

      {/* Filter chips - static display */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {filterCategories.map((cat, i) => (
              <span
                key={cat}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  i === 0
                    ? 'bg-primary text-white'
                    : 'bg-gray-50 text-gray-600 border border-gray-200'
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      {caseStudies.map((cs, idx) => (
        <section key={idx} className={`py-16 lg:py-20 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Image */}
              <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <AnimatedSection>
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                    <Image src={cs.image} alt="" fill className="object-cover" />
                  </div>
                </AnimatedSection>
              </div>

              {/* Content */}
              <div className={`lg:col-span-7 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <AnimatedSection delay={100}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 rounded-md text-xs font-bold text-primary uppercase tracking-wider">
                      <cs.icon className="w-3.5 h-3.5" />
                      {cs.industry}
                    </div>
                    <span className="text-xs text-gray-500 font-medium">{cs.service}</span>
                  </div>

                  <h2 className="text-primary">{cs.title}</h2>
                  <p className="mt-2 text-sm font-medium text-gray-500">Client: {cs.client}</p>

                  {/* Stats row */}
                  <div className="mt-6 grid grid-cols-3 gap-6 pb-6 border-b border-gray-200">
                    {cs.stats.map((s, i) => (
                      <div key={i}>
                        <div className="text-xl font-bold text-primary">{s.value}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Challenge */}
                  <div className="mt-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-accent-dark mb-2">The Challenge</div>
                    <p className="text-gray-700 leading-relaxed text-[0.9375rem]">{cs.challenge}</p>
                  </div>

                  {/* Approach */}
                  <div className="mt-5">
                    <div className="text-xs font-bold uppercase tracking-wider text-accent-dark mb-2">Our Approach</div>
                    <p className="text-gray-700 leading-relaxed text-[0.9375rem]">{cs.approach}</p>
                  </div>

                  {/* Outcome */}
                  <div className="mt-5">
                    <div className="text-xs font-bold uppercase tracking-wider text-accent-dark mb-2">Outcome</div>
                    <ul className="space-y-2">
                      {cs.outcome.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-[0.9375rem] leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">Your Next Engagement</p>
            <h2 className="text-white">Every great outcome starts with a conversation.</h2>
            <p className="mt-4 text-lg text-white/70 leading-relaxed">
              Tell us about the decision you need to make. We&apos;ll propose a research
              approach calibrated to your timeline, stakeholders, and strategic context.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-md bg-accent text-white font-semibold hover:bg-accent-dark hover:no-underline transition-all"
            >
              Start a Conversation <ArrowUpRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
