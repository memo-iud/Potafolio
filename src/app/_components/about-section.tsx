import { aboutSection } from "@/data/content";

export function AboutSection() {
  return (
    <section id="about" className="flex flex-col items-center text-center">
      <div className="max-w-3xl">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          {aboutSection.title}
        </h2>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          {aboutSection.paragraph}
        </p>
        <blockquote className="mt-8 border-l-4 border-accent pl-4 text-left">
          <p className="font-headline text-xl italic text-foreground">
            {aboutSection.motto}
          </p>
        </blockquote>
      </div>
    </section>
  );
}
