'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';

interface SpecularButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  radius?: number;
  textColor?: string;
  baseColor?: string;
  lineColor?: string;
  tint?: string;
  tintOpacity?: number;
  intensity?: number;
  shineSize?: number;
  followMouse?: boolean;
  target?: string;
  rel?: string;
}

export default function SpecularButton({
  children,
  href,
  onClick,
  className = '',
  size = 'md',
  radius = 9999,
  followMouse = true,
  target,
  rel,
}: SpecularButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!followMouse || !buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos(null);
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-2.5 text-xs sm:text-sm',
    lg: 'px-7 py-3.5 text-sm sm:text-base',
  }[size];

  const content = (
    <>
      {/* Specular Radial Spotlight Track */}
      {isHovered && mousePos && (
        <span
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            borderRadius: radius,
            background: `radial-gradient(120px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.22), transparent 70%)`,
          }}
          aria-hidden="true"
        />
      )}

      {/* Internal Rim Lighting / Border Shimmer */}
      <span
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 border border-white/20 dark:border-white/25"
        style={{ borderRadius: radius }}
        aria-hidden="true"
      />

      {/* Label Content */}
      <span className="relative z-10 flex items-center justify-center gap-2 font-medium tracking-tight">
        {children}
      </span>
    </>
  );

  const combinedClasses = `relative inline-flex items-center justify-center overflow-hidden font-sans btn-primary font-semibold transition-all duration-300 shadow-md hover:shadow-xl active:scale-[0.98] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-focus cursor-pointer ${sizeClasses} ${className}`;

  if (href) {
    const isInternal = href.startsWith('/');
    if (isInternal) {
      return (
        <Link
          href={href}
          ref={buttonRef as React.RefObject<HTMLAnchorElement>}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={combinedClasses}
          style={{ borderRadius: radius }}
        >
          {content}
        </Link>
      );
    }

    return (
      <a
        href={href}
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        target={target}
        rel={rel}
        className={combinedClasses}
        style={{ borderRadius: radius }}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={combinedClasses}
      style={{ borderRadius: radius }}
    >
      {content}
    </button>
  );
}
