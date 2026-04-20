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
 * Clean, brand-aligned page hero.
 * White background, left-aligned text, image on the right.
 * No dark panels, no overlays, no decorations.
 */
export default function PageHero({ eyebrow, title, description, image, backLink }: PageHeroProps) {
  return (
    <section className="bg-white pt-32 pb-16 lg:pt-40 lg:pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div>
            {backLink && (
              <Link
                href={backLink.href}
                className="inline-flex items-center gap-2 text-gray-500 hover:text-primary text-sm font-medium mb-6 transition-colors no-underline hover:no-underline"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
                {backLink.label}
              </Link>
            )}

            <p className="text-accent-dark font-semibold text-sm uppercase tracking-wider mb-4">
              {eyebrow}
            </p>

            <h1 className="text-primary">{title}</h1>

            {description && (
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                {description}
              </p>
            )}
          </div>

          {/* Right: Image */}
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src={image}
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
