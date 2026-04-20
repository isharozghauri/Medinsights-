import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Shield,
  Lock,
  FileCheck,
  Users,
  Globe2,
  Search,
  BarChart3,
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import PageHero from '@/components/PageHero';
import { images } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Our Methodology',
  description:
    'Learn about the Medinsights+ research methodology, quality framework, data security standards, and compliance certifications that ensure accurate, reliable healthcare market intelligence.',
};

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Scoping',
    description:
      'Every engagement begins with a structured diagnostic to understand your strategic context, decision framework, key assumptions, and information gaps. We identify the specific decisions our research needs to support and work backwards to design an approach calibrated to your timeline and budget.',
    deliverables: ['Strategic brief and research objectives', 'Methodology proposal', 'Timeline and budget alignment'],
  },
  {
    step: '02',
    title: 'Research Design',
    description:
      'Our research design phase translates strategic questions into rigorous fieldwork. We develop discussion guides grounded in clinical and commercial context, design sampling frameworks to ensure representativeness, and select analytical approaches matched to the decision at hand.',
    deliverables: ['Discussion guide / questionnaire', 'Sample design and recruitment plan', 'Analytical framework'],
  },
  {
    step: '03',
    title: 'Fieldwork & Data Collection',
    description:
      'We execute fieldwork with embedded quality monitoring at every stage. For primary research, our moderators bring therapeutic expertise to every interview. For secondary research, our analysts apply structured frameworks to extract maximum signal from published data.',
    deliverables: ['Real-time fieldwork progress reporting', 'Mid-course insights and adjustments', 'Data quality dashboards'],
  },
  {
    step: '04',
    title: 'Analysis & Synthesis',
    description:
      'Raw data becomes strategic insight through our proprietary analytical framework. We triangulate across data sources, validate findings against known benchmarks, and develop implications tailored to your specific commercial context — not generic observations.',
    deliverables: ['Multi-method data triangulation', 'Statistical analysis and significance testing', 'Strategic implications mapping'],
  },
  {
    step: '05',
    title: 'Delivery & Activation',
    description:
      'We deliver findings through structured presentations, detailed reports, and interactive working sessions designed to drive organizational alignment. Our work doesn\'t end at the deliverable — we support implementation through follow-up advisory and stakeholder briefings.',
    deliverables: ['Executive presentation', 'Detailed findings report with appendices', 'Stakeholder briefings and advisory support'],
  },
];

const qualityPrinciples = [
  {
    icon: FileCheck,
    title: 'Multi-Layer Quality Assurance',
    description:
      'Every project undergoes three distinct QA checkpoints: respondent validation (credential verification, attention checks, consistency logic), data quality review (outlier analysis, completion patterns, verbatim quality scoring), and deliverable review (peer review by a senior analyst not on the project team).',
  },
  {
    icon: Users,
    title: 'Therapeutic Area Specialization',
    description:
      'Our analysts hold advanced degrees in life sciences, health economics, public health, and clinical research. Projects are staffed with disease area specialists who bring genuine clinical and commercial literacy — not generalists learning on the job.',
  },
  {
    icon: Globe2,
    title: 'Harmonized Multi-Country Methodology',
    description:
      'For global studies, we apply consistent methodology across markets while adapting for local context. Instruments are translated by medical linguists, fieldwork is coordinated through a single project manager, and data is harmonized to enable valid cross-market comparisons.',
  },
  {
    icon: BarChart3,
    title: 'Analytical Rigor',
    description:
      'We apply statistical testing to quantitative findings, systematic coding frameworks to qualitative data, and triangulation across primary and secondary sources. Our market models are transparent, assumption-documented, and sensitivity-tested.',
  },
];

const certifications = [
  {
    title: 'ISO 27001',
    description: 'Information security management system certified. Controls covering data access, encryption, incident response, and continuous monitoring.',
  },
  {
    title: 'GDPR Compliant',
    description: 'Full compliance with EU General Data Protection Regulation including lawful basis for processing, data minimization, right to erasure, and Data Protection Officer.',
  },
  {
    title: 'HIPAA Compliant',
    description: 'US Health Insurance Portability and Accountability Act compliant for handling of protected health information (PHI) in patient research.',
  },
  {
    title: 'ESOMAR Member',
    description: 'Adherent to ESOMAR/GRBN international code of research ethics and professional standards for market research conduct.',
  },
];

const dataSecurityMeasures = [
  'End-to-end encryption for all data in transit and at rest',
  'Role-based access controls with audit logging',
  'Anonymization and pseudonymization of respondent data',
  'Secure, SOC 2-compliant cloud infrastructure',
  'Regular penetration testing and vulnerability assessments',
  'Employee background checks and annual security training',
  'Client-specific data handling agreements and NDAs',
  'Data retention policies aligned to regulatory requirements',
];

export default function MethodologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Methodology"
        title="How we deliver intelligence you can trust."
        description="Our research methodology, quality framework, and compliance standards are designed to ensure every insight we deliver is accurate, reliable, and actionable — regardless of complexity, geography, or timeline."
        image={images.labResearch}
      />

      {/* Process Steps */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">Our Process</p>
              <h2 className="text-primary">Five phases. One integrated approach.</h2>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                Every engagement follows our structured research process — from initial scoping through
                delivery and activation. This ensures consistency, quality, and strategic relevance
                at every stage.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-16 space-y-0 border-t border-gray-200">
            {processSteps.map((step, idx) => (
              <AnimatedSection key={idx} delay={idx * 80}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 border-b border-gray-200">
                  <div className="lg:col-span-1">
                    <div className="text-sm font-bold text-accent-dark tracking-widest">{step.step}</div>
                  </div>
                  <div className="lg:col-span-5">
                    <h3 className="text-primary">{step.title}</h3>
                    <p className="mt-3 text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                  <div className="lg:col-span-5 lg:col-start-8">
                    <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Key Deliverables</p>
                      {step.deliverables.map((d, i) => (
                        <div key={i} className="flex items-start gap-2 mt-2">
                          <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Framework */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">Quality Framework</p>
              <h2 className="text-primary">Built for accuracy, designed for reliability.</h2>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                Our proprietary quality framework ensures that every deliverable meets the standard
                our clients expect — institutional-quality intelligence that can inform critical decisions.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {qualityPrinciples.map((principle, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="card p-8 h-full">
                  <principle.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-primary">{principle.title}</h3>
                  <p className="mt-3 text-gray-600 leading-relaxed">{principle.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Data Security & Compliance */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <div>
                <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">Data Security & Compliance</p>
                <h2 className="text-white">Enterprise-grade protection for your most sensitive research.</h2>
                <p className="mt-4 text-white/70 text-lg leading-relaxed">
                  Healthcare market research involves sensitive clinical, commercial, and personal data.
                  Our security infrastructure and compliance program are built to protect this data at every
                  stage of the research process.
                </p>

                <div className="mt-10 space-y-3">
                  {dataSecurityMeasures.map((measure, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Lock className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-white/80 text-sm">{measure}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div className="space-y-6">
                {certifications.map((cert, i) => (
                  <div key={i} className="bg-white/10 border border-white/10 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Shield className="w-5 h-5 text-accent" />
                      <h4 className="text-white font-bold">{cert.title}</h4>
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed">{cert.description}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Respondent Verification */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image src={images.doctor} alt="" fill className="object-cover" />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <p className="eyebrow mb-4">Respondent Verification</p>
              <h2 className="text-primary">Every voice is verified.</h2>
              <p className="mt-4 text-gray-600 leading-relaxed text-lg">
                In an industry where respondent authenticity directly impacts the quality of
                intelligence, we take verification seriously. Every healthcare professional in
                our panel is credentialed through a multi-step process.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  'NPI / medical license verification for all physician respondents',
                  'Digital fingerprinting and duplicate detection across studies',
                  'Specialty-specific screening questions validated by clinical advisors',
                  'Real-time quality monitoring during survey completion',
                  'Post-completion consistency and attention checks',
                  'Patient respondents verified through diagnosis documentation',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-primary">Want to understand our approach in more detail?</h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              We&apos;re happy to walk through our methodology, quality standards, and compliance
              program in a discovery conversation.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Schedule a Discussion <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link href="/services" className="btn-outline">
                Explore Our Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
