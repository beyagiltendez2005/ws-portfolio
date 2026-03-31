import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { projects } from "@/lib/data";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";

export function FeaturedProjects() {
  const featuredProjects = projects.slice(0, 2); // Show only top 2 for "featured"

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featuredProjects.map((project, index) => (
          <Card
            key={index}
            className="flex flex-col group hover:shadow-xl transition-all border-muted/50 overflow-hidden rounded-3xl"
          >
            <div className="w-full h-48 bg-muted/50 flex items-center justify-center font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
              
            </div>
            <CardHeader className="space-y-4">
              <div className="flex justify-between items-start">
                <CardTitle className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <Badge variant="outline" className="rounded-full">Featured</Badge>
              </div>
              <CardDescription className="line-clamp-2 text-sm">
                {project.description[0]}
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-auto pt-0">
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-primary/5 text-primary border-none rounded-full px-3">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-center">
        <Link 
          href="/projects" 
          className={cn(
            buttonVariants({ variant: "ghost" }), 
            "group rounded-full px-8 border border-muted-foreground/20 hover:border-foreground transition-all flex items-center gap-2"
          )}
        >
          Explore All Projects
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
