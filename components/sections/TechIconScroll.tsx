'use client';

import React from 'react';
import LogoLoop, { LogoItem } from '@/components/ui/LogoLoop';
import {
  SiJavascript,
  SiPython,
  SiHtml5,
  SiCss,
  SiReact,
  SiBootstrap,
  SiGreensock,
  SiDjango,
  SiMysql,
  SiSqlite,
  SiGit,
  SiGithub,
  SiJira,
  SiFigma,
  SiVercel,
  SiRender,
  SiNetlify,
} from 'react-icons/si';
import { TbSql } from 'react-icons/tb';

export const homeTechLogos: LogoItem[] = [
  { node: <SiPython className="text-[#3776AB]" />, title: 'Python', href: 'https://www.python.org' },
  { node: <SiJavascript className="text-[#F7DF1E]" />, title: 'JavaScript', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { node: <TbSql className="text-[#00758F]" />, title: 'SQL', href: 'https://en.wikipedia.org/wiki/SQL' },
  { node: <SiReact className="text-[#61DAFB]" />, title: 'React.js', href: 'https://react.dev' },
  { node: <SiReact className="text-[#61DAFB]" />, title: 'React Native', href: 'https://reactnative.dev' },
  { node: <SiDjango className="text-[#092E20] dark:text-[#44B78B]" />, title: 'Django', href: 'https://www.djangoproject.com' },
  { node: <SiGreensock className="text-[#88CE02]" />, title: 'GSAP', href: 'https://gsap.com' },
  { node: <SiBootstrap className="text-[#7952B3]" />, title: 'Bootstrap', href: 'https://getbootstrap.com' },
  { node: <SiHtml5 className="text-[#E34F26]" />, title: 'HTML5', href: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { node: <SiCss className="text-[#1572B6]" />, title: 'CSS3', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { node: <SiMysql className="text-[#4479A1]" />, title: 'MySQL', href: 'https://www.mysql.com' },
  { node: <SiSqlite className="text-[#003B57] dark:text-[#0FAAFF]" />, title: 'SQLite', href: 'https://www.sqlite.org' },
  { node: <SiGit className="text-[#F05032]" />, title: 'Git', href: 'https://git-scm.com' },
  { node: <SiGithub className="text-foreground" />, title: 'GitHub', href: 'https://github.com' },
  { node: <SiJira className="text-[#0052CC]" />, title: 'Jira', href: 'https://www.atlassian.com/software/jira' },
  { node: <SiFigma className="text-[#F24E1E]" />, title: 'Figma', href: 'https://www.figma.com' },
  { node: <SiRender className="text-[#46E3B7]" />, title: 'Render', href: 'https://render.com' },
  { node: <SiVercel className="text-foreground" />, title: 'Vercel', href: 'https://vercel.com' },
  { node: <SiNetlify className="text-[#00C7B7]" />, title: 'Netlify', href: 'https://www.netlify.com' },
];

interface TechIconScrollProps {
  className?: string;
  speed?: number;
  showTitle?: boolean;
}

export default function TechIconScroll({
  className = '',
  speed = 28,
  showTitle = true,
}: TechIconScrollProps) {
  return (
    <section className={`w-full py-6 sm:py-8 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
        {showTitle && (
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <h3 className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground font-semibold">
              CORE TECHNOLOGIES &amp; ECOSYSTEM
            </h3>
          </div>
        )}
        <div className="w-full">
          <LogoLoop
            logos={homeTechLogos}
            speed={speed}
            direction="left"
            logoHeight={44}
            gap={44}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="var(--background)"
            ariaLabel="Core technologies and ecosystem stack"
          />
        </div>
      </div>
    </section>
  );
}
