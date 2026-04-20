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
 * Editorial split-column hero used on every inner page.
 * Text sits on solid ink panel (always readable) with clean image beside.
 */
export default function PageHero({ eyebrow, title, description, image, backLink }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 w-full min-h-[60vh]">
        {/* Text panel */}
        <div className="lg:col-span-7 bg-ink text-white flex items-center py-24 lg:py-28 px-6 lg:px-16 xl:px-24">
          <div className="max-w-xl pt-12">
            {backLink && (
              <Link
                href={backLink.href}
                className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-medium mb-6 transition-colors"
              >
                <ArrowRight className="w-4 h-4 rotate-180" /> {backLink.label}
              </Link>
            )}
            <div className="eyebrow text-white/50 mb-6">{eyebrow}</div>
            <h1 className="text-white">{title}</h1>
            {description && (
              <p className="mt-6 text-lg text-white/65 leading-relaxed font-light">
                {description}
              </p>
            )}
          </div>
        </div>

        {/* Image panel */}
        <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-0">
          <Image src={image} alt="" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/25 via-transparent to-transparent hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent lg:hidden" />
        </div>
      </div>
    </section>
  );
}
