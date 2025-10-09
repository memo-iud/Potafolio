import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { contactSection } from "@/data/content";

export function ContactSection() {
  return (
    <section id="contact" className="flex flex-col items-center text-center">
      <div className="max-w-3xl">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          {contactSection.title}
        </h2>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          {contactSection.paragraph}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 text-lg">
          <a
            href={`mailto:${contactSection.email}`}
            className="group flex items-center gap-3 text-foreground transition-colors hover:text-primary"
          >
            <Mail className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
            <span>{contactSection.email}</span>
          </a>
          <a
            href={contactSection.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-foreground transition-colors hover:text-primary"
          >
            <Linkedin className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
            <span>LinkedIn</span>
          </a>
           <a
            href={contactSection.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-foreground transition-colors hover:text-primary"
          >
            <Github className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
            <span>GitHub</span>
          </a>
          <div className="group flex items-center gap-3">
            <MapPin className="h-5 w-5 text-muted-foreground" />
            <span>{contactSection.location}</span>
          </div>
        </div>
        <div className="mt-10">
          <Button asChild size="lg">
            <a href={`mailto:${contactSection.email}`}>Enviar un Mensaje</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
