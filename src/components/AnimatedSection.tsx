'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

type AnimationVariant = 'fade-up' | 'fade-in' | 'slide-right' | 'scale';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: AnimationVariant;
  threshold?: number;
  once?: boolean;
}

const variantStyles: Record<
  AnimationVariant,
  { hidden: string; visible: string }
> = {
  'fade-up': {
    hidden: 'opacity-0 translate-y-8',
    visible: 'opacity-100 translate-y-0',
  },
  'fade-in': {
    hidden: 'opacity-0',
    visible: 'opacity-100',
  },
  'slide-right': {
    hidden: 'opacity-0 translate-x-8',
    visible: 'opacity-100 translate-x-0',
  },
  scale: {
    hidden: 'opacity-0 scale-95',
    visible: 'opacity-100 scale-100',
  },
};

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  variant = 'fade-up',
  threshold = 0.1,
  once = true,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            const timer = setTimeout(() => setIsVisible(true), delay);
            if (once) observer.unobserve(entry.target);
            return () => clearTimeout(timer);
          }
          setIsVisible(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [delay, threshold, once]);

  const styles = variantStyles[variant];

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] will-change-[transform,opacity] ${
        isVisible ? styles.visible : styles.hidden
      } ${className}`}
      style={delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
