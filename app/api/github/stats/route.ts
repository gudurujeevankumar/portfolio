import { NextResponse } from 'next/server';

export const revalidate = 1800; // Cache for 30 minutes, then revalidate in background

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface GitHubStatsResponse {
  username: string;
  name: string;
  avatarUrl: string;
  profileUrl: string;
  publicRepos: number;
  followers: number;
  following: number;
  totalContributions: number;
  contributions: ContributionDay[];
  languages: { name: string; pct: number; color: string }[];
  isLive: boolean;
  updatedAt: string;
}

const LANG_COLORS: Record<string, string> = {
  Python: '#3572A5',
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  HTML: '#e34c26',
  CSS: '#563d7c',
  SQL: '#e38c00',
  'React / TS': '#61dafb',
  'HTML/CSS': '#e34c26',
};

export async function GET() {
  const username = 'gudurujeevankumar';

  try {
    // 1. Fetch user profile
    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
        'User-Agent': 'portfolio-app',
      },
      next: { revalidate: 1800 },
    });

    let profileData: any = {
      name: 'Guduru Jeevan Kumar',
      public_repos: 52,
      followers: 4,
      following: 13,
      avatar_url: 'https://avatars.githubusercontent.com/u/170071121?v=4',
      html_url: `https://github.com/${username}`,
    };

    if (userRes.ok) {
      profileData = await userRes.json();
    }

    // 2. Fetch live contribution calendar from GitHub contributions API (Year 2026)
    let contributionsList: ContributionDay[] = [];
    let totalContribs = 843;

    try {
      const contribRes = await fetch(
        `https://github-contributions-api.jogruber.de/v4/${username}?y=2026`,
        {
          headers: { 'User-Agent': 'portfolio-app' },
          next: { revalidate: 1800 },
        }
      );

      if (contribRes.ok) {
        const contribData = await contribRes.json();
        if (contribData?.contributions && Array.isArray(contribData.contributions)) {
          contributionsList = contribData.contributions.map((c: any) => ({
            date: c.date,
            count: Number(c.count || 0),
            level: Number(c.level || 0),
          }));

          totalContribs =
            typeof contribData.total?.['2026'] === 'number'
              ? contribData.total['2026']
              : typeof contribData.total?.lastYear === 'number'
              ? contribData.total.lastYear
              : 843;
        }
      }
    } catch (contribErr) {
      console.warn('[GitHub Contributions Fetch Warning]', contribErr);
    }

    // 3. Fetch public repositories to calculate real language breakdown
    let computedLanguages: { name: string; pct: number; color: string }[] = [];

    try {
      const reposRes = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
        {
          headers: {
            Accept: 'application/vnd.github.v3+json',
            'User-Agent': 'portfolio-app',
          },
          next: { revalidate: 3600 },
        }
      );

      if (reposRes.ok) {
        const repos = await reposRes.json();
        if (Array.isArray(repos)) {
          const langCounts: Record<string, number> = {};
          let totalCounted = 0;

          for (const repo of repos) {
            if (!repo.fork && repo.language) {
              const lang = repo.language;
              langCounts[lang] = (langCounts[lang] || 0) + 1;
              totalCounted++;
            }
          }

          if (totalCounted > 0) {
            computedLanguages = Object.entries(langCounts)
              .sort((a, b) => b[1] - a[1])
              .slice(0, 5)
              .map(([name, count]) => ({
                name,
                pct: Number(((count / totalCounted) * 100).toFixed(1)),
                color: LANG_COLORS[name] || '#8b5cf6',
              }));
          }
        }
      }
    } catch (repoErr) {
      console.warn('[GitHub Repos Fetch Warning]', repoErr);
    }

    // Fallback language breakdown if repos API is rate limited
    if (computedLanguages.length === 0) {
      computedLanguages = [
        { name: 'Python', pct: 44.8, color: '#3572A5' },
        { name: 'JavaScript', pct: 32.4, color: '#f1e05a' },
        { name: 'React / TS', pct: 12.6, color: '#61dafb' },
        { name: 'HTML/CSS', pct: 6.8, color: '#e34c26' },
        { name: 'SQL', pct: 3.4, color: '#e38c00' },
      ];
    }

    const payload: GitHubStatsResponse = {
      username,
      name: profileData.name || 'Guduru Jeevan Kumar',
      avatarUrl: profileData.avatar_url || 'https://avatars.githubusercontent.com/u/170071121?v=4',
      profileUrl: profileData.html_url || `https://github.com/${username}`,
      publicRepos: profileData.public_repos ?? 52,
      followers: profileData.followers ?? 4,
      following: profileData.following ?? 13,
      totalContributions: totalContribs,
      contributions: contributionsList,
      languages: computedLanguages,
      isLive: true,
      updatedAt: new Date().toISOString(),
    };

    return NextResponse.json(payload, {
      headers: {
        'Cache-Control': 'public, s-maxage=1800, stale-while-revalidate=86400',
      },
    });
  } catch (err: any) {
    console.error('[GitHub Stats API Route Error]', err);

    return NextResponse.json(
      {
        username: 'gudurujeevankumar',
        name: 'Guduru Jeevan Kumar',
        avatarUrl: 'https://avatars.githubusercontent.com/u/170071121?v=4',
        profileUrl: 'https://github.com/gudurujeevankumar',
        publicRepos: 52,
        followers: 4,
        following: 13,
        totalContributions: 0,
        contributions: [],
        languages: [
          { name: 'Python', pct: 44.8, color: '#3572A5' },
          { name: 'JavaScript', pct: 32.4, color: '#f1e05a' },
          { name: 'React / TS', pct: 12.6, color: '#61dafb' },
          { name: 'HTML/CSS', pct: 6.8, color: '#e34c26' },
          { name: 'SQL', pct: 3.4, color: '#e38c00' },
        ],
        isLive: false,
        updatedAt: new Date().toISOString(),
      },
      { status: 200 }
    );
  }
}
