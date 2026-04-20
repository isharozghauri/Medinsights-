import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock, Tag, ArrowUpRight } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import PageHero from '@/components/PageHero';
import { images } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Insights',
  description:
    'Healthcare market research insights, industry analysis, and thought leadership from Medinsights+. Stay informed on pharma, biotech, and medtech market trends.',
};

const featuredInsight = {
  category: 'Market Analysis',
  title: 'The Evolving Oncology Landscape: Emerging Modalities Reshaping Treatment Paradigms in 2024-2030',
  excerpt:
    'A comprehensive analysis of how ADCs, bispecific antibodies, and cell therapies are transforming the oncology competitive landscape — and what it means for pharma commercial strategy.',
  readTime: '12 min read',
  date: 'March 2024',
};

const insights = [
  {
    category: 'Primary Research',
    title: 'Best Practices for KOL Engagement in Rare Disease: Lessons from 500+ Interviews',
    excerpt:
      'Drawing from our extensive rare disease research portfolio, we share key learnings on recruiting, engaging, and extracting meaningful insights from rare disease KOLs.',
    readTime: '8 min read',
    date: 'February 2024',
    image: images.insight1,
  },
  {
    category: 'Market Access',
    title: 'EU HTA Reform: What Healthcare Companies Need to Know for 2025 and Beyond',
    excerpt:
      'The EU Health Technology Assessment regulation brings significant changes to how medicines and devices are evaluated. We break down the implications for market access strategy.',
    readTime: '10 min read',
    date: 'January 2024',
    image: images.insight2,
  },
  {
    category: 'Industry Trends',
    title: 'AI in Healthcare Market Research: Enhancing — Not Replacing — Human Expertise',
    excerpt:
      'How we integrate AI-powered analytics with traditional research methodologies to deliver faster, deeper, and more nuanced healthcare market intelligence.',
    readTime: '6 min read',
    date: 'December 2023',
    image: images.insight3,
  },
  {
    category: 'Competitive Intelligence',
    title: 'Biosimilar Market Dynamics in the EU5: Competition, Pricing, and Physician Adoption',
    excerpt:
      'An analysis of biosimilar competition across key European markets, examining adoption patterns, pricing erosion curves, and the impact on originator strategies.',
    readTime: '9 min read',
    date: 'November 2023',
    image: images.insight4,
  },
  {
    category: 'Patient Research',
    title: 'Understanding the Unmet Needs in Autoimmune Disease: A Patient-Centric Perspective',
    excerpt:
      'Insights from our multi-country patient research program exploring treatment satisfaction, quality of life impacts, and expectations for next-generation therapies.',
    readTime: '7 min read',
    date: 'October 2023',
    image: images.insight5,
  },
  {
    category: 'MedTech',
    title: 'Digital Health Adoption Post-COVID: What Stuck and What Faded',
    excerpt:
      'Three years after the pandemic-driven digital health acceleration, we examine which technologies achieved lasting adoption and which face renewed headwinds.',
    readTime: '8 min read',
    date: 'September 2023',
    image: images.insight6,
  },
];

const categories = [
  'All',
  'Market Analysis',
  'Primary Research',
  'Market Access',
  'Industry Trends',
  'Competitive Intelligence',
  'Patient Research',
  'MedTech',
];

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights & Resources"
        title="Healthcare market intelligence & analysis."
        description="Expert perspectives on the trends, data, and dynamics shaping healthcare markets worldwide."
        image={images.heroInsights}
      />

      {/* Category Filter */}
      <section className="border-b border-slate-200 sticky top-20 bg-white z-30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 py-4 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  category === 'All'
                    ? 'bg-primary text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Insight */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="relative bg-ink rounded-2xl overflow-hidden text-white">
              <div className="absolute inset-0">
                <Image src={images.insight7} alt="" fill className="object-cover opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-r from-ink via-primary/95 to-primary/80" />
              </div>

              <div className="relative p-10 lg:p-16">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/20 rounded-full text-accent text-xs font-semibold uppercase tracking-wider mb-6">
                    <Tag className="w-3 h-3" />
                    Featured — {featuredInsight.category}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
                    {featuredInsight.title}
                  </h2>
                  <p className="mt-4 text-white/70 leading-relaxed">
                    {featuredInsight.excerpt}
                  </p>
                  <div className="mt-6 flex items-center gap-6 text-sm text-white/50">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredInsight.readTime}
                    </span>
                    <span>{featuredInsight.date}</span>
                  </div>
                  <div className="mt-8">
                    <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-semibold text-sm hover:bg-accent-dark transition-all cursor-pointer">
                      Read Full Analysis
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col cursor-pointer">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={insight.image}
                      alt={insight.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-primary uppercase tracking-wider">
                        {insight.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors leading-tight">
                      {insight.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed flex-grow">
                      {insight.excerpt}
                    </p>
                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-slate-400">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {insight.readTime}
                        </span>
                        <span>{insight.date}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-accent font-semibold text-sm uppercase tracking-wider">Stay Informed</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
                Subscribe to Our Healthcare Intelligence Brief
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Monthly insights on healthcare market trends, competitive intelligence,
                and research best practices delivered to your inbox.
              </p>
              <form className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your work email"
                  className="flex-grow px-5 py-3 rounded-full border border-slate-300 text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-accent text-white font-semibold text-sm hover:bg-accent-dark transition-all whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-3 text-xs text-slate-400">
                No spam. Unsubscribe anytime. We respect your privacy.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
