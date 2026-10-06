'use client';

import React from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
} from 'motion/react';

interface VelocityTextProps {
  children: string;
  baseVelocity: number;
  className?: string;
  numCopies?: number;
  damping?: number;
  stiffness?: number;
}

function wrap(min: number, max: number, v: number) {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}

function ParallaxText({
  children,
  baseVelocity = 28,
  className = '',
  numCopies = 6,
  damping = 50,
  stiffness = 300,
}: VelocityTextProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping,
    stiffness,
  });

  // Calm, controlled scroll amplification (capped to prevent sudden acceleration)
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 0.8], {
    clamp: true,
  });

  const x = useTransform(baseX, (v) => `${wrap(-100 / numCopies, 0, v)}%`);

  useAnimationFrame((t, delta) => {
    // Elegant, slow baseline speed calibrated for velocity values in the 25-35 range
    // 0.065 factor yields a graceful ~9-10 second traversal per phrase
    const speedFactor = 0.065;
    let moveBy = baseVelocity * speedFactor * (delta / 1000);

    // Subtle scroll-driven acceleration without abrupt directional snapping or jitter
    const scrollEffect = velocityFactor.get();
    if (scrollEffect !== 0) {
      moveBy += moveBy * scrollEffect * 0.7;
    }

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden m-0 whitespace-nowrap flex flex-nowrap select-none py-2">
      <motion.div className={`flex flex-nowrap font-mono uppercase tracking-widest ${className}`} style={{ x }}>
        {Array.from({ length: numCopies }).map((_, i) => (
          <span key={i} className="inline-block mr-8 sm:mr-16">
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

interface ScrollVelocityProps {
  texts: string[];
  velocity?: number;
  className?: string;
  numCopies?: number;
  damping?: number;
  stiffness?: number;
}

export default function ScrollVelocity({
  texts,
  velocity = 28,
  className = '',
  numCopies = 6,
  damping = 50,
  stiffness = 300,
}: ScrollVelocityProps) {
  return (
    <section className="relative w-full overflow-hidden py-6 sm:py-8 border-y border-border-subtle bg-surface-sunken/40">
      {texts.map((text, index) => (
        <ParallaxText
          key={index}
          baseVelocity={index % 2 === 0 ? velocity : -velocity}
          className={className}
          numCopies={numCopies}
          damping={damping}
          stiffness={stiffness}
        >
          {text}
        </ParallaxText>
      ))}
    </section>
  );
}
