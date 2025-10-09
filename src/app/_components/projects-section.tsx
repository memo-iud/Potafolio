import { projectsSection } from "@/data/content";
import { ProjectCard } from "@/app/_components/project-card";

export function ProjectsSection() {
  return (
    <section id="projects" className="flex flex-col items-center">
      <div className="w-full max-w-6xl">
        <h2 className="mb-10 text-center font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          {projectsSection.title}
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsSection.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
