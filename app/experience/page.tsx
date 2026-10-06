import React from 'react';
import type { Metadata } from 'next';
import ExperienceJourney from '@/components/experience/ExperienceJourney';

export const metadata: Metadata = {
  title: 'Experience & Growth — Guduru Jeevan Kumar',
  description:
    'A timeline of my professional journey, showcasing 4 internships, 1 virtual experience, and Team Lead experience coordinating 6 teams and 36 developers.',
};

export default function ExperiencePage() {
  return (
    <main id="main-content" className="flex-1 py-12 sm:py-20 px-4 min-[375px]:px-5 sm:px-6 md:px-7 lg:px-8 max-w-7xl mx-auto w-full">
      <ExperienceJourney />
    </main>
  );
}
