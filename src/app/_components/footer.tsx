import Link from "next/link";
import { Github, Youtube } from "lucide-react";
import { contactSection } from "@/data/content";
import { Button } from "@/components/ui/button";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t">
      <div className="container flex h-24 max-w-screen-xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {year} Guillermo Loaiza Mesa. Todos los derechos reservados.
        </p>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href={contactSection.github} target="_blank" aria-label="GitHub">
              <Github className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href={contactSection.youtube} target="_blank" aria-label="YouTube">
              <Youtube className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
