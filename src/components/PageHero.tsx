import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  image: string;
  backLink?: {
    href: string;
    label: string;
  };
}

/**
 * Clean, light editorial hero — no dark panels.
 * White background, subtle accent line, centered narrow content,
 * small framed image below. Brand-aligned and minimal.
 */
export default function PageHero({ eyebrow, title, description, image, backLink }: PageHeroProps) {
  return (
    <section className="relative bg-cream pt-36 pb-16 lg:pt-40 lg:pb-20">
      {/* Subtle dot grid decoration - top right */}
      <div
        aria-hidden
        className="absolute top-28 right-8 lg:right-16 w-40 h-40 opacity-[0.18] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, #022b87 1.5px, transparent 1.5px)',
          backgroundSize: '14px 14px',
        }}
      />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        {backLink && (
          <Link
            href={backLink.href}
            className="inline-flex items-center gap-2 text-stone-500 hover:text-primary text-sm font-medium mb-8 transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180" /> {backLink.label}
          </Link>
        )}

        <div className="eyebrow mb-5">{eyebrow}</div>
        <h1 className="text-ink max-w-4xl mx-auto">{title}</h1>

        {description && (
          <p className="mt-6 text-lg lg:text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
        )}

        {/* Accent line */}
        <div className="mt-10 flex justify-center">
          <div className="h-[2px] w-16 bg-accent" />
        </div>
      </div>

      {/* Framed image below */}
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8 mt-16">
        <div className="relative aspect-[21/9] overflow-hidden rounded-sm">
          <Image
            src={image}
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
