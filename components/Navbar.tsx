'use client';

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
} from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { portfolioData } from '@/data/portfolio';
import ThemeToggle from '@/components/ThemeToggle';

/* ─────────────────────────────────────────────────────────────────────────── */
/*  NAV CONFIG                                                                  */
/* ─────────────────────────────────────────────────────────────────────────── */

const NAV_LINKS = [
  { label: 'Home',       href: '/' },
  { label: 'Work',       href: '/work' },
  { label: 'Experience', href: '/experience' },
  { label: 'Skills',     href: '/skills' },
  { label: 'About',      href: '/about' },
  { label: 'Blog',       href: '/blog' },
  { label: 'Contact',    href: '/contact' },
];

/* ─────────────────────────────────────────────────────────────────────────── */
/*  DOCK MAGNIFICATION CONSTANTS                                                */
/* ─────────────────────────────────────────────────────────────────────────── */

const MAX_SCALE      = 1.28;   // item directly under cursor
const BASE_SCALE     = 1.0;    // resting scale
const FALLOFF_SIGMA  = 90;     // gaussian half-width in px — controls spread
const LERP_FACTOR    = 0.14;   // spring speed (lower = smoother/slower)

/** Gaussian falloff: gives scale between BASE_SCALE and MAX_SCALE */
function gaussianScale(distancePx: number): number {
  const t = Math.exp(-(distancePx * distancePx) / (2 * FALLOFF_SIGMA * FALLOFF_SIGMA));
  return BASE_SCALE + (MAX_SCALE - BASE_SCALE) * t;
}

/* ─────────────────────────────────────────────────────────────────────────── */
/*  COMPONENT                                                                   */
/* ─────────────────────────────────────────────────────────────────────────── */

export default function Navbar() {
  const pathname          = usePathname();
  const [isScrolled,     setIsScrolled]     = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  /* Refs for the animation path — zero React re-renders on mousemove */
  const navRef          = useRef<HTMLElement>(null);
  const dockRef         = useRef<HTMLDivElement>(null);
  const itemRefs        = useRef<(HTMLAnchorElement | null)[]>([]);
  const rafRef          = useRef<number>(0);
  const currentScales   = useRef<number[]>(NAV_LINKS.map(() => BASE_SCALE));
  const targetScales    = useRef<number[]>(NAV_LINKS.map(() => BASE_SCALE));
  const isInsideDock    = useRef(false);
  const animationLoopRef = useRef<() => void>(() => {});

  /* ── Scroll ─────────────────────────────────────────────────────────── */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Escape key ─────────────────────────────────────────────────────── */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mobileMenuOpen]);

  /* ── Body scroll lock ───────────────────────────────────────────────── */
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  /* ── Active route ───────────────────────────────────────────────────── */
  const isLinkActive = useCallback((href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(href + '/');
  }, [pathname]);

  /* ── rAF loop: lerp current → target scales, write to DOM ───────────── */
  const animationLoop = useCallback(() => {
    let needsFrame = false;
    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const cur  = currentScales.current[i];
      const tgt  = targetScales.current[i];
      const next = cur + (tgt - cur) * LERP_FACTOR;
      if (Math.abs(next - tgt) > 0.0006) needsFrame = true;
      currentScales.current[i] = next;
      el.style.transform = `scale(${next.toFixed(4)})`;
    });
    if (needsFrame) rafRef.current = requestAnimationFrame(animationLoopRef.current);
  }, []);

  // Store the callback in ref so it can be referenced recursively without
  // violating ESLint's no-use-before-define rule
  useEffect(() => {
    animationLoopRef.current = animationLoop;
  }, [animationLoop]);

  /* ── Dock island mouse-move ─────────────────────────────────────────── */
  const handleDockMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const cx = e.clientX;
    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const r = el.getBoundingClientRect();
      targetScales.current[i] = gaussianScale(Math.abs(cx - (r.left + r.width / 2)));
    });
    if (!isInsideDock.current) {
      isInsideDock.current = true;
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(animationLoopRef.current);
    }
  }, []);

  /* ── Dock island mouse-leave: smoothly reset ────────────────────────── */
  const handleDockMouseLeave = useCallback(() => {
    isInsideDock.current = false;
    targetScales.current = NAV_LINKS.map(() => BASE_SCALE);
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(animationLoopRef.current);
  }, []);

  /* ── Nav-wide reflection (CSS var approach, zero renders) ───────────── */
  const handleNavMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = navRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty('--my', `${((e.clientY - r.top)  / r.height) * 100}%`);
    el.style.setProperty('--ro', '1');
  }, []);

  const handleNavMouseLeave = useCallback(() => {
    navRef.current?.style.setProperty('--ro', '0');
  }, []);

  /* ── Cleanup ────────────────────────────────────────────────────────── */
  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  /* ─────────────────────────────────────────────────────────────────────── */
  /*  RENDER                                                                   */
  /* ─────────────────────────────────────────────────────────────────────── */

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3' : 'py-4 sm:py-5'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-4 min-[375px]:px-5 sm:px-6">
        <nav
          ref={navRef}
          aria-label="Main Navigation"
          onMouseMove={handleNavMouseMove}
          onMouseLeave={handleNavMouseLeave}
          style={{ '--mx': '50%', '--my': '50%', '--ro': '0' } as React.CSSProperties}
          className={[
            'navbar-dock relative flex items-center justify-between',
            'rounded-full px-3.5 min-[375px]:px-4 sm:px-6 py-2',
            'transition-all duration-300',
            'backdrop-blur-[28px] saturate-[170%]',
            isScrolled
              ? 'bg-white/72 dark:bg-[#07080C]/82 border border-white/88 dark:border-white/14 shadow-[0_14px_48px_rgba(30,20,60,0.10),inset_0_1px_0_rgba(255,255,255,0.96)] dark:shadow-[0_16px_52px_rgba(0,0,0,0.70),inset_0_1px_0_rgba(255,255,255,0.11)]'
              : 'bg-white/52 dark:bg-[#07080C]/62 border border-white/72 dark:border-white/10 shadow-[0_8px_32px_rgba(30,20,60,0.07),inset_0_1px_0_rgba(255,255,255,0.92)] dark:shadow-[0_10px_38px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.09)]',
          ].join(' ')}
        >
          {/* Moving glass-reflection overlay */}
          <div className="navbar-reflection pointer-events-none absolute inset-0 rounded-full overflow-hidden" aria-hidden="true" />

          {/* ── BRAND ─────────────────────────────────────────────────── */}
          <Link
            href="/"
            className="flex items-center gap-2.5 text-[#111113] dark:text-foreground font-semibold text-sm sm:text-base tracking-tight transition-all duration-200 hover:opacity-90 hover:scale-[1.03] focus-visible:rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            aria-label="Guduru Jeevan Kumar — Home"
          >
            <span className="relative flex h-2.5 w-2.5 flex-shrink-0" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent shadow-[0_0_10px_rgba(124,58,237,0.70),0_0_20px_rgba(124,58,237,0.30)]" />
            </span>
            <span className="hidden min-[420px]:inline font-sans font-semibold text-[#111113] dark:text-foreground tracking-tight whitespace-nowrap">
              {portfolioData.profile.name}
            </span>
            <span className="min-[420px]:hidden font-sans font-semibold text-[#111113] dark:text-foreground tracking-tight whitespace-nowrap">
              Jeevan Kumar
            </span>
          </Link>

          {/* ── DOCK ISLAND ───────────────────────────────────────────── */}
          <div
            ref={dockRef}
            onMouseMove={handleDockMouseMove}
            onMouseLeave={handleDockMouseLeave}
            className="hidden lg:flex items-center gap-0.5 xl:gap-1 overflow-visible bg-black/[0.03] dark:bg-white/[0.04] backdrop-blur-md border border-black/[0.04] dark:border-white/[0.08] shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)] dark:shadow-[inset_0_1px_2px_rgba(255,255,255,0.04)] rounded-full p-1"
          >
            {NAV_LINKS.map((link, i) => {
              const active = isLinkActive(link.href);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  ref={el => { itemRefs.current[i] = el; }}
                  style={{ transformOrigin: 'center bottom', willChange: 'transform' }}
                  className={[
                    'dock-item inline-block',
                    'px-2.5 xl:px-3.5 py-1.5 rounded-full',
                    'text-xs xl:text-sm font-sans',
                    'transition-colors duration-200',
                    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent focus-visible:rounded-full',
                    active
                      ? 'bg-[rgba(124,58,237,0.10)] dark:bg-[rgba(168,85,247,0.20)] text-[#7C3AED] dark:text-white font-medium border border-[rgba(124,58,237,0.18)] dark:border-[rgba(168,85,247,0.35)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.85),0_4px_14px_rgba(124,58,237,0.08)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_4px_14px_rgba(168,85,247,0.20)]'
                      : 'text-[#555866] dark:text-muted-foreground hover:text-[#111113] dark:hover:text-foreground hover:bg-black/[0.04] dark:hover:bg-white/[0.06]',
                  ].join(' ')}
                  aria-current={active ? 'page' : undefined}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* ── RIGHT CONTROLS ────────────────────────────────────────── */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            <ThemeToggle />

            <a
              href={portfolioData.profile.resume.folderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-medium font-sans bg-[rgba(124,58,237,0.08)] hover:bg-[rgba(124,58,237,0.14)] dark:bg-[rgba(168,85,247,0.15)] dark:hover:bg-[rgba(168,85,247,0.22)] text-[#7C3AED] dark:text-foreground border border-[rgba(124,58,237,0.20)] hover:border-[rgba(124,58,237,0.38)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_2px_8px_rgba(124,58,237,0.06)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.85),0_4px_16px_rgba(124,58,237,0.18)] hover:-translate-y-0.5 hover:scale-[1.04] transition-all duration-200 focus-visible:rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              aria-label="View Resume on Google Drive (opens in new tab)"
            >
              <span>Resume</span>
              <svg className="w-3 h-3 text-[#7C3AED] dark:text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden inline-flex items-center justify-center min-w-[44px] min-h-[44px] p-2.5 rounded-full text-muted-foreground hover:text-foreground bg-surface border border-border-subtle hover:bg-surface-hover hover:scale-[1.05] transition-all duration-200 focus-visible:rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
            >
              {mobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* ── MOBILE DRAWER ───────────────────────────────────────────────── */}
      {mobileMenuOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 z-40 bg-black/40 dark:bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="lg:hidden fixed inset-x-4 top-20 z-50 max-h-[calc(100dvh-5.5rem)] overflow-y-auto bg-[#F8F7F3]/95 dark:bg-surface-elevated/95 backdrop-blur-xl border border-border-subtle rounded-2xl p-4 shadow-xl shadow-black/10 dark:shadow-black/80 animate-in fade-in zoom-in-95 duration-200"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const active = isLinkActive(link.href);
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 text-sm font-medium font-sans rounded-xl transition-colors ${
                      active
                        ? 'bg-accent/15 text-accent font-semibold border border-accent/20'
                        : 'text-muted-foreground hover:text-foreground hover:bg-surface'
                    }`}
                    aria-current={active ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <div className="pt-3 mt-2 border-t border-border-subtle">
                <a
                  href={portfolioData.profile.resume.folderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-medium bg-accent/15 text-foreground border border-accent/30 hover:bg-accent/25 transition-colors"
                >
                  <span>View Full Resume (Drive)</span>
                  <svg className="w-3.5 h-3.5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
