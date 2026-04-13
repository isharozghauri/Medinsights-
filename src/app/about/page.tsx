import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Target,
  Eye,
  Shield,
  Lightbulb,
  Users,
  Globe2,
  TrendingUp,
  ArrowUpRight,
  Award,
  CheckCircle2,
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { images } from '@/lib/images';

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
        {/* Background image with gradient overlay */}
        <div className="absolute inset-0">
          <Image
            src={images.heroAbout}
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
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
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={images.teamMeeting}
                  alt="Medinsights+ team collaboration"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                {/* Floating stats overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-primary/90 to-transparent p-6 pt-16">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">200+</div>
                      <div className="text-xs text-white/70">Clients Served</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">500+</div>
                      <div className="text-xs text-white/70">Projects Delivered</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src={images.officeModern}
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '30+', label: 'Countries Covered', icon: Globe2 },
              { value: '200+', label: 'Clients Served', icon: Users },
              { value: '500+', label: 'Projects Delivered', icon: TrendingUp },
              { value: '98%', label: 'Client Retention', icon: Target },
            ].map((stat, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="text-center group">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 transition-colors">
                    <stat.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/60 mt-1">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
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
                <div className="text-center p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
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

      {/* Quality / Research Excellence Section */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={images.dataAnalytics}
                  alt="Data analytics and research excellence"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">ISO 27001 Certified</p>
                      <p className="text-white/70 text-xs">GDPR & HIPAA Compliant</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div>
                <p className="text-accent font-semibold text-sm uppercase tracking-wider">Quality Commitment</p>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
                  Research Excellence at Every Step
                </h2>
                <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    Every Medinsights+ project follows our proprietary quality framework,
                    ensuring rigorous methodology, data accuracy, and actionable deliverables.
                  </p>
                </div>
                <div className="mt-8 space-y-4">
                  {[
                    'Proprietary research quality framework',
                    'Multi-stage data validation process',
                    'Expert peer review on all deliverables',
                    'Enterprise-grade data security',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-accent font-semibold text-sm uppercase tracking-wider">Our Journey</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
                Key Milestones
              </h2>
            </div>
          </AnimatedSection>

          <div className="mt-16 max-w-4xl mx-auto relative">
            {/* Central connecting line */}
            <div className="absolute left-[7.5rem] top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-primary to-accent/30 hidden sm:block" />

            {milestones.map((milestone, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="flex gap-6 mb-10 relative group">
                  <div className="shrink-0 w-24 text-right pt-3">
                    <span className="text-lg font-bold text-primary">{milestone.year}</span>
                  </div>
                  <div className="relative shrink-0 hidden sm:flex items-start pt-2">
                    <div className="w-4 h-4 rounded-full bg-accent border-[3px] border-white shadow-md z-10 group-hover:scale-125 transition-transform" />
                  </div>
                  <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex-1 group-hover:shadow-md group-hover:border-accent/30 transition-all">
                    <p className="text-slate-700 leading-relaxed">{milestone.event}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        {/* Subtle background image */}
        <div className="absolute inset-0">
          <Image
            src={images.consulting}
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/95" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mx-auto flex items-center justify-center shadow-lg">
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

      {/* Global Presence Section */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div>
                <p className="text-accent font-semibold text-sm uppercase tracking-wider">Global Reach</p>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
                  Research Coverage Across 30+ Countries
                </h2>
                <p className="mt-6 text-slate-600 leading-relaxed">
                  With offices in New York, London, and Frankfurt, Medinsights+ provides on-the-ground
                  expertise across North America and Europe. Our global KOL network of 10,000+
                  healthcare professionals ensures rapid access to critical insights in any market.
                </p>
                <div className="mt-8 grid grid-cols-3 gap-6">
                  <div>
                    <div className="text-2xl font-bold text-primary">3</div>
                    <div className="text-sm text-slate-500">Global Offices</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">10K+</div>
                    <div className="text-sm text-slate-500">KOL Network</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <div className="text-sm text-slate-500">Therapeutic Areas</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={images.globalMap}
                  alt="Global research coverage map"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 text-white text-sm font-medium">
                    <Globe2 className="w-4 h-4 text-accent" />
                    North America & Europe Coverage
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src={images.labResearch}
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/90" />

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
