import { HeroSection } from '@/app/_components/hero-section';
import { AboutSection } from '@/app/_components/about-section';
import { ProjectsSection } from '@/app/_components/projects-section';
import { SkillsSection } from '@/app/_components/skills-section';
import { ContactSection } from '@/app/_components/contact-section';

export default function Home() {
  return (
    <div className="container relative">
      <div className="flex flex-col gap-20 py-12 md:gap-28 md:py-20 lg:gap-36 lg:py-24">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </div>
  );
}
