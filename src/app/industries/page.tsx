import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Pill,
  Microscope,
  HeartPulse,
  Building2,
  ArrowUpRight,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Industries',
  description:
    'Medinsights+ serves pharmaceutical, biotechnology, medical technology, and market research companies with tailored healthcare market intelligence.',
};

const industries = [
  {
    id: 'pharmaceuticals',
    icon: Pill,
    title: 'Pharmaceuticals',
    subtitle: 'Powering pharma decisions from pipeline to patient',
    description:
      'We serve top-20 global pharmaceutical companies and emerging specialty pharma with research and intelligence that spans the entire product lifecycle — from early pipeline assessment through post-launch lifecycle management.',
    challenges: [
      'Navigating complex and evolving regulatory landscapes across multiple markets',
      'Understanding payer decision-making and securing optimal market access',
      'Differentiating in crowded therapeutic areas with me-too competition',
      'Optimizing launch sequencing across global markets',
    ],
    solutions: [
      'Competitive landscape and pipeline intelligence across 50+ therapeutic areas',
      'Multi-country payer research and market access strategy',
      'KOL identification, mapping, and engagement planning',
      'Launch readiness assessments and go-to-market strategy',
      'Pricing benchmarking and international reference pricing analysis',
      'Post-launch tracking and brand performance monitoring',
    ],
    therapeuticAreas: [
      'Oncology & Hematology',
      'Immunology & Inflammation',
      'Rare Diseases',
      'CNS & Neurology',
      'Cardiovascular & Metabolic',
      'Infectious Disease',
    ],
  },
  {
    id: 'biotechnology',
    icon: Microscope,
    title: 'Biotechnology',
    subtitle: 'Strategic intelligence for innovation-driven companies',
    description:
      'Biotech companies face unique challenges — from securing funding and partnerships to navigating first-in-class development and commercialization. Our research helps biotech organizations make critical decisions with confidence.',
    challenges: [
      'Validating commercial opportunity for novel therapeutic modalities',
      'Identifying optimal indications and patient populations',
      'Building compelling value stories for investors and partners',
      'Planning for commercial infrastructure in advance of launch',
    ],
    solutions: [
      'Market opportunity assessment for novel mechanisms and modalities',
      'Indication prioritization and patient segmentation research',
      'Competitive positioning for first-in-class and best-in-class assets',
      'Commercial due diligence for licensing and M&A transactions',
      'Pre-launch market shaping and KOL engagement strategy',
      'Gene therapy, cell therapy, and RNA therapeutics intelligence',
    ],
    therapeuticAreas: [
      'Gene & Cell Therapy',
      'ADC & Bispecific Antibodies',
      'RNA Therapeutics',
      'Immuno-Oncology',
      'Orphan Drugs',
      'Precision Medicine',
    ],
  },
  {
    id: 'medtech',
    icon: HeartPulse,
    title: 'Medical Technology',
    subtitle: 'Market intelligence for device and diagnostic innovators',
    description:
      'The medtech landscape demands a unique research approach — understanding clinician preferences, procurement dynamics, and evolving evidence requirements. We provide specialized intelligence tailored for medical device and diagnostic companies.',
    challenges: [
      'Understanding clinician adoption drivers and switching behavior',
      'Navigating hospital and IDN procurement processes',
      'Demonstrating value in evidence-based healthcare purchasing',
      'Managing complex multi-stakeholder sales environments',
    ],
    solutions: [
      'HCP preference and adoption research for devices and diagnostics',
      'Hospital and IDN purchasing pathway analysis',
      'Health economics and outcomes research (HEOR) support',
      'Competitive benchmarking for medical devices and equipment',
      'Market sizing and penetration analysis across device categories',
      'Regulatory pathway assessment (FDA 510(k), PMA, CE marking)',
    ],
    therapeuticAreas: [
      'Surgical Robotics',
      'In Vitro Diagnostics',
      'Cardiology Devices',
      'Orthopedic Implants',
      'Digital Health',
      'Point-of-Care Testing',
    ],
  },
  {
    id: 'agencies',
    icon: Building2,
    title: 'Market Research Agencies & Consulting Firms',
    subtitle: 'Research partnership for the research industry',
    description:
      'Leading market research agencies and management consulting firms partner with Medinsights+ to extend their healthcare research capabilities, access specialized expertise, and deliver more comprehensive solutions to their end clients.',
    challenges: [
      'Scaling healthcare research capacity for peak demand periods',
      'Accessing specialized therapeutic area expertise on-demand',
      'Recruiting hard-to-reach healthcare professional respondents',
      'Maintaining quality and consistency across multi-market studies',
    ],
    solutions: [
      'White-label primary research — qualitative and quantitative fieldwork',
      'Specialist therapeutic area analysis and report writing',
      'Healthcare professional panel access and recruitment services',
      'Multi-country project coordination and local market expertise',
      'Secondary research and desk research outsourcing',
      'Quality assurance and methodological consulting',
    ],
    therapeuticAreas: [
      'Full Therapeutic Coverage',
      'Multi-Country Fieldwork',
      'HCP Panel Access',
      'Patient Recruitment',
      'Payer Research',
      'Medical Device Research',
    ],
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] border-[50px] border-accent rounded-full opacity-10" />
        <div className="absolute bottom-8 left-12 grid grid-cols-6 gap-3 opacity-10 hidden lg:grid">
          {Array.from({ length: 36 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-accent" />
          ))}
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider">Industries We Serve</p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold leading-tight">
              Specialized Intelligence for{' '}
              <span className="text-accent">Every Healthcare Stakeholder</span>
            </h1>
            <p className="mt-6 text-xl text-white/70 leading-relaxed">
              We understand the unique challenges and decision-making processes
              across the healthcare value chain — and tailor our research accordingly.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Sections */}
      {industries.map((industry, sectionIndex) => (
        <section
          key={industry.id}
          id={industry.id}
          className={`py-24 lg:py-32 ${sectionIndex % 2 === 1 ? 'bg-slate-50' : ''}`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-5">
                <AnimatedSection>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent/80 flex items-center justify-center">
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="mt-5 text-3xl font-bold text-slate-900">{industry.title}</h2>
                  <p className="text-accent font-medium mt-2">{industry.subtitle}</p>
                  <p className="mt-4 text-slate-600 leading-relaxed">{industry.description}</p>

                  <div className="mt-8">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">
                      Key Challenges We Address
                    </h3>
                    <div className="space-y-3">
                      {industry.challenges.map((challenge, index) => (
                        <div key={index} className="flex gap-3 text-sm text-slate-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                          {challenge}
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              <div className="lg:col-span-7">
                <AnimatedSection delay={150}>
                  <div className="bg-white rounded-2xl p-8 border border-slate-200">
                    <h3 className="text-lg font-bold text-slate-900 mb-6">
                      How We Help
                    </h3>
                    <div className="space-y-4">
                      {industry.solutions.map((solution, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                          <span className="text-slate-700">{solution}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 bg-primary/5 rounded-2xl p-8">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">
                      {industry.id === 'agencies' ? 'Service Areas' : 'Focus Areas'}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {industry.therapeuticAreas.map((area, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-white rounded-full text-sm text-primary font-medium border border-slate-200"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
                    >
                      Discuss your {industry.title.toLowerCase()} research needs
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute -top-16 -left-16 w-48 h-48 border-[30px] border-accent rounded-full opacity-15" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Don&apos;t See Your Industry?
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
              Our healthcare expertise extends beyond these categories. Contact us to
              discuss your specific research needs and how we can help.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-white font-semibold hover:bg-accent-dark transition-all"
              >
                Contact Us
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
