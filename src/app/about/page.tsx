import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Target,
  Eye,
  Shield,
  Lightbulb,
  Users,
  Globe2,
  TrendingUp,
  ArrowUpRight,
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Medinsights+ — a leading healthcare market research firm delivering actionable intelligence to pharmaceutical, biotech, and medtech companies across North America and Europe.',
};

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    description:
      'We uphold the highest standards of ethical research, data privacy, and transparency in every engagement.',
  },
  {
    icon: Target,
    title: 'Precision',
    description:
      'Rigorous methodology and attention to detail ensure our insights are accurate, reliable, and actionable.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'We continuously evolve our research approaches, incorporating emerging data sources and analytical techniques.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description:
      'We embed ourselves in our clients\' strategic context, functioning as a trusted extension of their teams.',
  },
];

const leadership = [
  {
    name: 'Dr. Sarah Mitchell',
    role: 'Chief Executive Officer',
    bio: '20+ years in healthcare consulting. Former VP at McKinsey Health Practice. PhD in Health Economics from Harvard.',
  },
  {
    name: 'James Chen, MBA',
    role: 'Chief Research Officer',
    bio: '15+ years leading primary and secondary research for top-20 pharma. Former Director at IQVIA.',
  },
  {
    name: 'Dr. Elena Kowalski',
    role: 'Head of European Operations',
    bio: '18+ years in EU healthcare markets. Specialist in HTA, market access, and regulatory intelligence across EU5.',
  },
  {
    name: 'Michael Torres',
    role: 'VP of Client Strategy',
    bio: '12+ years in healthcare market research. Expert in oncology, immunology, and rare disease commercial strategy.',
  },
];

const milestones = [
  { year: '2009', event: 'Founded in New York with a focus on pharmaceutical primary research' },
  { year: '2012', event: 'Expanded to London, establishing European operations' },
  { year: '2015', event: 'Launched syndicated research division covering 20+ therapeutic areas' },
  { year: '2018', event: 'Opened Frankfurt office; surpassed 300 projects delivered' },
  { year: '2021', event: 'Introduced AI-enhanced research analytics platform' },
  { year: '2024', event: '500+ projects completed, serving 200+ healthcare organizations globally' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-[400px] h-[400px] border-[50px] border-accent rounded-full opacity-10" />
        <div className="absolute bottom-8 right-12 grid grid-cols-6 gap-3 opacity-10 hidden lg:grid">
          {Array.from({ length: 36 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-white" />
          ))}
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider">About Us</p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold leading-tight">
              Advancing Healthcare Decisions Through{' '}
              <span className="text-accent">Research Excellence</span>
            </h1>
            <p className="mt-6 text-xl text-white/70 leading-relaxed">
              Since 2009, Medinsights+ has been the trusted research partner for healthcare
              organizations seeking clarity in complex, rapidly evolving markets.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div>
                <p className="text-accent font-semibold text-sm uppercase tracking-wider">Our Story</p>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
                  Born from a Vision to Bridge the Healthcare Intelligence Gap
                </h2>
                <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    Medinsights+ was founded with a clear mission: to provide healthcare companies
                    with the caliber of market intelligence that was previously available only to
                    the largest global corporations.
                  </p>
                  <p>
                    Our founders recognized that critical healthcare decisions — from pipeline
                    prioritization to market access strategy — were often made without adequate
                    primary data, competitive intelligence, or local market expertise. This gap
                    was particularly acute for mid-sized pharmaceutical, biotech, and medtech
                    companies entering new markets.
                  </p>
                  <p>
                    Today, we serve over 200 clients across North America and Europe, combining
                    deep therapeutic expertise with innovative research methodologies to deliver
                    insights that matter.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-primary rounded-2xl p-8 text-white">
                  <Globe2 className="w-10 h-10 text-accent mb-4" />
                  <div className="text-3xl font-bold">30+</div>
                  <div className="text-sm text-white/60 mt-1">Countries Covered</div>
                </div>
                <div className="bg-slate-50 rounded-2xl p-8">
                  <Users className="w-10 h-10 text-primary mb-4" />
                  <div className="text-3xl font-bold text-primary">200+</div>
                  <div className="text-sm text-slate-500 mt-1">Clients Served</div>
                </div>
                <div className="bg-slate-50 rounded-2xl p-8">
                  <TrendingUp className="w-10 h-10 text-primary mb-4" />
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-slate-500 mt-1">Projects Delivered</div>
                </div>
                <div className="bg-accent rounded-2xl p-8 text-white">
                  <Target className="w-10 h-10 text-white mb-4" />
                  <div className="text-3xl font-bold">98%</div>
                  <div className="text-sm text-white/70 mt-1">Client Retention</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedSection>
              <div className="bg-white rounded-2xl p-10 border border-slate-200 h-full">
                <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="mt-5 text-2xl font-bold text-slate-900">Our Mission</h3>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  To empower healthcare organizations with actionable, high-quality market
                  intelligence that drives better decisions, accelerates market access, and
                  ultimately improves patient outcomes across North America and Europe.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={150}>
              <div className="bg-white rounded-2xl p-10 border border-slate-200 h-full">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Eye className="w-7 h-7 text-accent" />
                </div>
                <h3 className="mt-5 text-2xl font-bold text-slate-900">Our Vision</h3>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  To be the most trusted healthcare market research partner globally,
                  recognized for our depth of expertise, methodological rigor, and ability
                  to translate complex data into strategic clarity for our clients.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-accent font-semibold text-sm uppercase tracking-wider">Our Values</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
                The Principles That Guide Us
              </h2>
            </div>
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="text-center p-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent/80 flex items-center justify-center mx-auto">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">{value.title}</h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-accent font-semibold text-sm uppercase tracking-wider">Our Journey</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
                Key Milestones
              </h2>
            </div>
          </AnimatedSection>

          <div className="mt-16 max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="flex gap-6 mb-8">
                  <div className="shrink-0 w-20 text-right">
                    <span className="text-lg font-bold text-primary">{milestone.year}</span>
                  </div>
                  <div className="relative">
                    <div className="absolute top-2 -left-[25px] w-3 h-3 rounded-full bg-accent border-2 border-white" />
                    {index < milestones.length - 1 && (
                      <div className="absolute top-5 -left-[20px] w-0.5 h-full bg-slate-200" />
                    )}
                    <p className="text-slate-700 leading-relaxed pb-8">{milestone.event}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-accent font-semibold text-sm uppercase tracking-wider">Leadership</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
                Meet Our Senior Team
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Our leadership team brings decades of combined experience across healthcare
                consulting, market research, and life sciences strategy.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((person, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-white rounded-2xl p-8 border border-slate-200 text-center hover:shadow-lg transition-shadow">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mx-auto flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {person.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">{person.name}</h3>
                  <p className="text-sm font-medium text-accent mt-1">{person.role}</p>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">{person.bio}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-48 h-48 border-[30px] border-accent rounded-full opacity-15" />
        <div className="absolute bottom-8 left-8 grid grid-cols-5 gap-2 opacity-15 hidden lg:grid">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-white" />
          ))}
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Want to Join Our Growing Team?
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
              We&apos;re always looking for talented researchers, analysts, and strategists
              who are passionate about healthcare.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-white font-semibold hover:bg-accent-dark transition-all"
              >
                Get in Touch
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
