import Link from "next/link";
import { Button } from "@/components/ui/button";
import { heroSection } from "@/data/content";

export function HeroSection() {
  return (
    <section id="home" className="flex flex-col items-center text-center">
      <div className="max-w-3xl">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
          {heroSection.title}
        </h1>
        <h2 className="mt-4 font-headline text-2xl font-medium tracking-tight sm:text-3xl">
          {heroSection.subtitle}
        </h2>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          {heroSection.paragraph}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg">
            <Link href={heroSection.cta_primary.href}>
              {heroSection.cta_primary.label}
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href={heroSection.cta_secondary.href}>
              {heroSection.cta_secondary.label}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
