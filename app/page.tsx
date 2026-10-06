import Hero from '@/components/Hero';
import EngineeredSystems from '@/components/sections/EngineeredSystems';
import EngineeringWorkflowSection from '@/components/sections/EngineeringWorkflowSection';
import AiWorkflowSection from '@/components/sections/AiWorkflowSection';
import GithubGlobalSection from '@/components/sections/GithubGlobalSection';
import FinalClosingCTA from '@/components/sections/FinalClosingCTA';

export default function Home() {
  return (
    <main id="main-content" className="flex-1 flex flex-col">
      {/* 1. Open Editorial Hero Canvas: Personal Brand, Authoritative Typography, Authentic Portrait & Core Stack */}
      <Hero />

      {/* 2. Selected Work Highlights: Engineered Systems & Production Code */}
      <EngineeredSystems />

      {/* 3. Engineering Workflow & Core Technologies Toolset */}
      <EngineeringWorkflowSection />

      {/* 4. AI Development Philosophy: An Accelerator, Not a Substitute */}
      <AiWorkflowSection />

      {/* 5. Consistent Development & Global Opportunities Worldwide */}
      <GithubGlobalSection />

      {/* 6. Grand Closing Composition with Integrated Portrait */}
      <FinalClosingCTA />
    </main>
  );
}
