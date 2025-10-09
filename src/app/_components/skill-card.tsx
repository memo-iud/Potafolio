import type { FC, SVGProps } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Skill {
  name: string;
  icon: FC<SVGProps<SVGSVGElement>>;
}

interface SkillCardProps {
  title: string;
  skills: Skill[];
}

export function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="font-headline text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {skills.map((skill) => (
            <li key={skill.name} className="flex items-center gap-4">
              <skill.icon className="h-6 w-6 text-accent" />
              <span className="font-medium">{skill.name}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
