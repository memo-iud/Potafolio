import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string | null;
};

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const placeholder = PlaceHolderImages.find(p => p.id === project.id);

  return (
    <Card className="flex h-full flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl">
      <CardHeader>
        <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col justify-between">
        <div>
          {placeholder && (
              <div className="mb-4 overflow-hidden rounded-lg">
                <Image
                  src={placeholder.imageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="h-auto w-full object-cover"
                  data-ai-hint={placeholder.imageHint}
                />
              </div>
          )}
          <CardDescription className="mb-4 text-base">{project.description}</CardDescription>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 bg-muted/50 p-4">
        <Button variant="outline" asChild className="flex-1">
          <Link href={project.githubUrl} target="_blank">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Link>
        </Button>
        {project.demoUrl && (
          <Button asChild className="flex-1">
            <Link href={project.demoUrl} target="_blank">
              <ExternalLink className="mr-2 h-4 w-4" />
              Demo en Vivo
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
