import { skillsSection } from "@/data/content";
import { SkillCard } from "@/app/_components/skill-card";

export function SkillsSection() {
  return (
    <section id="skills" className="flex flex-col items-center">
      <div className="w-full max-w-6xl">
        <h2 className="mb-10 text-center font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          {skillsSection.title}
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillsSection.categories.map((category) => (
            <SkillCard
              key={category.title}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
