import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ArrowUpRight,
  Search,
  BarChart3,
  FileText,
  Briefcase,
  CheckCircle2,
  Globe2,
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { images } from '@/lib/images';

const services = [
  {
    number: '01',
    icon: Search,
    title: 'Primary Research',
    description:
      'First-hand intelligence from healthcare professionals, patients, and payers through rigorous qualitative and quantitative research.',
    href: '/services/primary-research',
    image: images.labResearch,
  },
  {
    number: '02',
    icon: BarChart3,
    title: 'Secondary Research',
    description:
      'Evidence-based market intelligence synthesized from clinical, regulatory, and commercial data sources worldwide.',
    href: '/services/secondary-research',
    image: images.dataAnalytics,
  },
  {
    number: '03',
    icon: FileText,
    title: 'Syndicated Reports',
    description:
      'Multi-client landscape reports and market trackers covering high-value therapeutic areas with continuous updates.',
    href: '/services/syndicated-reports',
    image: images.chartsDashboard,
  },
  {
    number: '04',
    icon: Briefcase,
    title: 'Strategic Consulting',
    description:
      'Research-informed advisory for market entry, competitive positioning, commercial due diligence, and launch excellence.',
    href: '/services/consulting',
    image: images.consulting,
  },
];

const industries = [
  { title: 'Pharmaceuticals', href: '/industries#pharmaceuticals', image: images.pharmaceutical },
  { title: 'Biotechnology', href: '/industries#biotechnology', image: images.biotech },
  { title: 'Medical Technology', href: '/industries#medtech', image: images.medicalDevice },
  { title: 'Research Agencies', href: '/industries#agencies', image: images.teamMeeting },
];

const stats = [
  { value: '500+', label: 'Projects Delivered Worldwide' },
  { value: '50+', label: 'Therapeutic Areas Covered' },
  { value: '10,000+', label: 'Healthcare Professionals in Network' },
  { value: '98%', label: 'Client Retention Rate' },
];

const testimonials = [
  {
    quote:
      'Medinsights+ delivered a competitive landscape analysis that directly informed our go-to-market strategy. Their depth of expertise in oncology research is unmatched.',
    author: 'Vice President, Strategy',
    company: 'Top 10 Global Pharmaceutical Company',
  },
  {
    quote:
      "Their ability to recruit hard-to-reach KOLs and extract meaningful insights from primary research has been invaluable for our pipeline prioritization decisions.",
    author: 'Director of Market Research',
    company: 'Leading Biotechnology Firm',
  },
];

export default function Home() {
  return (
    <>
      {/* ════════════════════ HERO - Editorial ════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-ink">
        <div className="absolute inset-0">
          <Image
            src={images.heroMain}
            alt=""
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-primary/90 to-primary/60" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-32 w-full">
          <div className="max-w-3xl">
            <div className="eyebrow text-white/60 mb-8">Global Healthcare Intelligence</div>
            <h1 className="text-white">
              Research that shapes the future of healthcare.
            </h1>
            <p className="mt-8 text-lg lg:text-xl text-white/70 max-w-2xl leading-relaxed font-light">
              Medinsights+ partners with pharmaceutical, biotechnology, and medical technology
              leaders worldwide to deliver research and intelligence that drives confident,
              evidence-based decisions.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Start a Conversation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services" className="btn-secondary">
                Explore Our Capabilities
              </Link>
            </div>
          </div>
        </div>

        {/* Corner mark */}
        <div className="absolute bottom-8 right-8 text-white/30 text-xs font-mono tracking-widest hidden lg:block">
          EST. 2009 · GLOBAL
        </div>
      </section>

      {/* ════════════════════ INTRO + STATS ════════════════════ */}
      <section className="py-24 lg:py-32 border-b border-stone-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <div className="eyebrow">About Medinsights+</div>
              <div className="section-divider mt-4" />
              <h2 className="mt-6 text-ink">
                A research partner to healthcare&apos;s most ambitious organizations.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-lg text-stone-600 leading-relaxed">
                For over fifteen years, we have been the research partner of choice for
                healthcare organizations seeking clarity in complex, rapidly evolving markets.
                Our work combines deep therapeutic expertise, rigorous methodology, and global
                reach to produce intelligence that our clients rely on to make critical decisions.
              </p>
              <p className="mt-6 text-lg text-stone-600 leading-relaxed">
                We serve over 200 pharmaceutical, biotechnology, medical technology, and consulting
                organizations across every major global market, from established therapeutic areas
                to the most advanced gene and cell therapies.
              </p>
              <Link href="/about" className="btn-ghost mt-8">
                Learn about our firm <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Editorial stats bar */}
          <div className="mt-24 pt-16 border-t border-stone-200 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div>
                  <div className="text-4xl lg:text-5xl font-serif text-primary" style={{ fontWeight: 400 }}>{stat.value}</div>
                  <div className="mt-3 text-sm text-stone-500 max-w-[180px] leading-snug">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════ SERVICES - Editorial Numbered List ════════════════════ */}
      <section className="py-24 lg:py-32 bg-paper">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
            <div className="lg:col-span-5">
              <div className="eyebrow">Our Capabilities</div>
              <div className="section-divider mt-4" />
              <h2 className="mt-6 text-ink">Four practice areas. One integrated platform.</h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="text-lg text-stone-600 leading-relaxed">
                Each of our four practice areas is designed to address a distinct dimension of
                market intelligence. Together, they form a comprehensive ecosystem that delivers
                the breadth and depth required for today&apos;s most complex healthcare decisions.
              </p>
            </div>
          </div>

          <div className="space-y-0 border-t border-stone-300">
            {services.map((service, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <Link href={service.href} className="group grid grid-cols-1 lg:grid-cols-12 gap-8 py-10 lg:py-12 border-b border-stone-300 hover:bg-white transition-colors duration-500 px-4 -mx-4">
                  <div className="lg:col-span-1">
                    <div className="text-sm font-mono text-stone-400 tracking-widest">{service.number}</div>
                  </div>
                  <div className="lg:col-span-5">
                    <h3 className="text-ink group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="mt-3 text-stone-600 leading-relaxed">{service.description}</p>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm text-primary font-semibold group-hover:gap-3 transition-all">
                      Explore practice <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="lg:col-span-6">
                    <div className="relative h-56 lg:h-48 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════ FEATURED IMAGE + TEXT ════════════════════ */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={images.microscope}
                  alt="Healthcare research"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div className="eyebrow">Why Medinsights+</div>
              <div className="section-divider mt-4" />
              <h2 className="mt-6 text-ink">Expertise delivered with rigor, speed, and discretion.</h2>

              <div className="mt-12 space-y-8">
                {[
                  {
                    title: 'Therapeutic depth across 50+ areas',
                    description: 'Specialized analysts with advanced degrees in life sciences, health economics, and clinical research.',
                  },
                  {
                    title: 'Global reach, local insight',
                    description: 'Proprietary network of 10,000+ healthcare professionals across every major global market.',
                  },
                  {
                    title: 'Rigorous, proprietary methodology',
                    description: 'Every engagement follows our quality framework for accurate, reliable, and actionable intelligence.',
                  },
                  {
                    title: 'Enterprise-grade data security',
                    description: 'GDPR, HIPAA, and ISO 27001 compliant operations protect your most sensitive research.',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 pb-8 border-b border-stone-200 last:border-0 last:pb-0">
                    <div className="shrink-0 text-sm font-mono text-stone-400 tracking-widest pt-1">
                      0{i + 1}
                    </div>
                    <div>
                      <h4 className="text-ink text-base font-semibold">{item.title}</h4>
                      <p className="mt-2 text-stone-600 leading-relaxed text-[15px]">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ════════════════════ INDUSTRIES - Minimal Grid ════════════════════ */}
      <section className="py-24 lg:py-32 bg-paper">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-16">
            <div className="lg:col-span-6">
              <div className="eyebrow">Industries</div>
              <div className="section-divider mt-4" />
              <h2 className="mt-6 text-ink">Specialized intelligence for every healthcare stakeholder.</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <Link href={industry.href} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white text-xl">{industry.title}</h3>
                      <div className="mt-2 inline-flex items-center gap-1 text-sm text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                        View industry <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════ TESTIMONIALS - Editorial Quotes ════════════════════ */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="eyebrow mb-4">Client Voices</div>
          <div className="section-divider" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mt-16">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 120}>
                <div>
                  <div className="text-6xl text-primary font-serif leading-none mb-4">&ldquo;</div>
                  <blockquote className="text-xl lg:text-2xl text-ink leading-relaxed font-serif font-normal italic">
                    {t.quote}
                  </blockquote>
                  <div className="mt-8 pt-6 border-t border-stone-300">
                    <div className="font-semibold text-ink">{t.author}</div>
                    <div className="text-sm text-stone-500 mt-1">{t.company}</div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════ GLOBAL PRESENCE ════════════════════ */}
      <section className="py-24 lg:py-32 bg-ink text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src={images.globalMap} alt="" fill className="object-cover" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <div className="eyebrow text-accent">Global Reach</div>
              <div className="h-px w-12 bg-accent mt-4" />
              <h2 className="mt-6 text-white">Research coverage across every major healthcare market.</h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-lg text-white/70 leading-relaxed">
                With offices and research capabilities spanning North America, Europe, and
                Asia-Pacific, we provide localized market intelligence with a global perspective.
              </p>

              <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8">
                {[
                  { region: 'Americas', cities: 'New York\nBoston\nToronto' },
                  { region: 'Europe', cities: 'London\nFrankfurt\nParis' },
                  { region: 'Asia-Pacific', cities: 'Singapore\nTokyo\nSydney' },
                ].map((r) => (
                  <div key={r.region}>
                    <div className="text-accent text-xs uppercase tracking-widest font-semibold">{r.region}</div>
                    <div className="mt-3 text-white/80 whitespace-pre-line leading-relaxed">{r.cities}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════ JOIN PANEL CTA ════════════════════ */}
      <section className="py-24 lg:py-32 border-b border-stone-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src={images.patient} alt="" fill className="object-cover" />
            </div>
            <div>
              <div className="eyebrow">For Participants</div>
              <div className="section-divider mt-4" />
              <h2 className="mt-6 text-ink">Join our global research panel.</h2>
              <p className="mt-6 text-lg text-stone-600 leading-relaxed">
                Healthcare professionals, patients, and caregivers worldwide contribute to
                our research programs. Share your expertise, participate in meaningful studies,
                and receive competitive compensation for your time.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-6 border-t border-stone-200 pt-8">
                {[
                  { count: '5,000+', label: 'Physicians' },
                  { count: '3,500+', label: 'Patients' },
                  { count: '1,500+', label: 'Caregivers' },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="text-2xl font-serif text-primary" style={{ fontWeight: 400 }}>{item.count}</div>
                    <div className="text-xs text-stone-500 mt-1">{item.label}</div>
                  </div>
                ))}
              </div>

              <Link href="/join-panel" className="btn-ghost mt-8">
                Join the panel <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════ CLOSING CTA ════════════════════ */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">
          <div className="eyebrow mb-4">Let&apos;s Connect</div>
          <div className="section-divider mx-auto" />
          <h2 className="mt-6 text-ink">
            Ready to turn complex questions into confident decisions?
          </h2>
          <p className="mt-6 text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Connect with our team to discuss how Medinsights+ can support your most important
            healthcare market decisions.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Contact Our Team <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link href="/about" className="btn-ghost">
              Learn about our firm <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
