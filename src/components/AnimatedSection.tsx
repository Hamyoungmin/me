'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animationType?: 'fade-in-up' | 'fade-in-left' | 'fade-in-right' | 'fade-in';
  delay?: '100' | '200' | '300' | '400' | '500' | '600' | '700';
  triggerOnce?: boolean;
}

export default function AnimatedSection({
  children,
  className = '',
  animationType = 'fade-in-up',
  delay,
  triggerOnce = false
}: AnimatedSectionProps) {
  const { targetRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    triggerOnce
  });

  const animationClass = isIntersecting ? `animate-${animationType}` : '';
  const delayClass = delay ? `animate-delay-${delay}` : '';

  return (
    <div
      ref={targetRef}
      className={`animate-on-scroll ${animationClass} ${delayClass} ${className}`}
    >
      {children}
    </div>
  );
}
