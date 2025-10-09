import { Mail, MapPin, Github, Youtube } from "lucide-react";
import { WhatsappIcon } from "@/components/icons";
import { contactSection } from "@/data/content";

export function ContactSection() {
  const defaultWhatsappText = "Hola, estoy contactándote desde tu portafolio. Me interesa...";
  const whatsappHref = `${contactSection.whatsappUrl}?text=${encodeURIComponent(defaultWhatsappText)}`;

  return (
    <section id="contact" className="flex w-full flex-col items-center text-center">
      <div className="w-full max-w-3xl">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          {contactSection.title}
        </h2>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          {contactSection.paragraph}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-8 text-lg md:flex-row md:items-start md:gap-16">
          {/* Contacto directo */}
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-3 text-foreground">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <span className="font-medium text-primary">{contactSection.email}</span>
            </div>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-foreground transition-colors hover:text-primary"
            >
              <WhatsappIcon className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
              <span>{contactSection.phone}</span>
            </a>
          </div>

          {/* Redes sociales */}
          <div className="flex flex-col items-start gap-4">
            <a
              href={contactSection.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-foreground transition-colors hover:text-primary"
            >
              <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
              <span>GitHub</span>
            </a>
            <a
              href={contactSection.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-foreground transition-colors hover:text-primary"
            >
              <Youtube className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
              <span>YouTube</span>
            </a>
          </div>
        </div>

        {/* Ubicación */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 text-lg">
          <div className="group flex items-center gap-3">
            <MapPin className="h-5 w-5 text-muted-foreground" />
            <span>{contactSection.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
