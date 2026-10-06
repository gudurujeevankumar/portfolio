'use client';

import React, { useEffect, useState, useRef, useCallback } from 'react';

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  characters?: string;
  className?: string;
  animateOn?: 'mount' | 'hover';
}

function subscribeReducedMotion(callback: () => void) {
  if (typeof window === 'undefined') return () => {};
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  mediaQuery.addEventListener('change', callback);
  return () => mediaQuery.removeEventListener('change', callback);
}

function getReducedMotionSnapshot(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function getReducedMotionServerSnapshot(): boolean {
  return false;
}

/**
 * DecryptedText — Adapted from React Bits (https://reactbits.dev/)
 * Tailored for Guduru Jeevan Kumar's Systems Terminal aesthetics.
 *
 * Features:
 * - Subtle character deciphering effect for developer terminals & badges.
 * - Zero external animation libraries.
 * - Respects prefers-reduced-motion (skips scramble directly to text).
 */
export default function DecryptedText({
  text,
  speed = 40,
  maxIterations = 10,
  characters = '0123456789ABCDEF$#@*&~_<>[]',
  className = '',
  animateOn = 'mount',
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState<string>(text);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const isScrambling = useRef<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const reducedMotion = React.useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  const triggerScramble = useCallback(() => {
    if (reducedMotion || isScrambling.current) return;
    isScrambling.current = true;

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    let iteration = 0;
    intervalRef.current = setInterval(() => {
      setDisplayText(() =>
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) {
              return text[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayText(text);
        isScrambling.current = false;
      }

      iteration += 1 / (maxIterations / text.length);
    }, speed);
  }, [characters, maxIterations, reducedMotion, speed, text]);

  useEffect(() => {
    if (reducedMotion) {
      return;
    }

    if (animateOn === 'mount') {
      const timeout = setTimeout(() => {
        triggerScramble();
      }, 100);
      return () => {
        clearTimeout(timeout);
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }
  }, [animateOn, reducedMotion, triggerScramble]);

  useEffect(() => {
    if (animateOn === 'hover' && isHovered) {
      triggerScramble();
    }
  }, [animateOn, isHovered, triggerScramble]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <span
      className={className}
      onMouseEnter={() => animateOn === 'hover' && setIsHovered(true)}
      onMouseLeave={() => animateOn === 'hover' && setIsHovered(false)}
    >
      {reducedMotion ? text : displayText}
    </span>
  );
}
