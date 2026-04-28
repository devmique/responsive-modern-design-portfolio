import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, SquareArrowOutUpRightIcon } from "lucide-react";
import { Project } from "@/types/project";

export const ProjectCard = ({ p, i }: { p: Project; i: number }) => (
  <Card key={i} className="overflow-hidden transition-transform hover:scale-[1.02]">
    <CardContent className="p-0">
      {/* loading="lazy" — browser skips fetch until card enters viewport */}
      {/* decoding="async" — decode off the main thread                    */}
      <img
        src={p.imgSrc}
        alt={`${p.title} preview`}
        loading="lazy"
        decoding="async"
        width={640}
        height={192}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-medium">{p.title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
        <div className="mt-1 flex flex-wrap justify-center items-center gap-2">
          {p.tech.map((value, idx) => (
            <span
              key={idx}
              className="text-muted-foreground px-2 py-1 text-xs bg-secondary rounded-lg"
            >
              {value}
            </span>
          ))}
        </div>
        <br />
        <div className="flex justify-center items-center gap-2">
          <a href={p.glink}>
            <Button variant="outline" className="text-muted-foreground">
              <Github /> Github Repo
            </Button>
          </a>
          {p.llink && (
            <a href={p.llink}>
              <Button variant="outline" className="text-muted-foreground">
                <SquareArrowOutUpRightIcon /> Live Demo
              </Button>
            </a>
          )}
        </div>
      </div>
    </CardContent>
  </Card>
);
