import React from 'react';

interface GradientEditorialProps {
  children: React.ReactNode;
  className?: string;
  as?: 'span' | 'em';
}

/**
 * GradientEditorial
 * Reusable editorial typography treatment used across portfolio headings:
 * Elegant italic serif font paired with the signature purple-to-cyan gradient text-clip.
 * Source of truth: The Experience page ("Experience & Growth")
 */
export default function GradientEditorial({
  children,
  className = '',
  as: Component = 'span',
}: GradientEditorialProps) {
  return (
    <Component
      className={`gradient-editorial font-serif italic font-normal tracking-normal inline-block pr-[0.08em] select-text ${className}`}
    >
      {children}
    </Component>
  );
}
