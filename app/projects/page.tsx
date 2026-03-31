import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button-variants";
import Link from "next/link";
import { GithubIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { projects } from "@/lib/data";
import { MockupLabel } from "@/components/mockup-label";
import { cn } from "@/lib/utils";

export default function Projects() {
  return (
    <div className="space-y-16 py-8">
      {/* SECTION: Project Archive */}
      <section>
        <MockupLabel label="Project Archive" />
        <h1 className="text-4xl font-bold mb-8">Selected Works</h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="flex flex-col group hover:shadow-xl transition-all border-muted/50 overflow-hidden"
            >
              <div className="w-full h-48 bg-muted relative">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors" />
                <span className="absolute inset-0 flex items-center justify-center text-xs font-mono text-muted-foreground/50 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-tighter">
                  
                </span>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                  <Badge variant="outline">{project.status}</Badge>
                </div>
                <CardDescription className="pt-2">
                  <ul className="space-y-1 text-sm">
                    {project.description.slice(0, 2).map((item, index) => (
                      <li key={index} className="flex gap-2">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-muted-foreground shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardDescription>
              </CardHeader>
              <CardContent className="grow">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-[10px] uppercase">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-2 bg-muted/20 border-t border-muted/50 p-4">
                <Link 
                  href={project.link} 
                  className={cn(buttonVariants({ size: "sm" }), "rounded-full flex-1")}
                >
                  Link 
                </Link>
                <Link
                  href={project.sourceCode}
                  className={cn(buttonVariants({ size: "sm", variant: "ghost" }), "rounded-full inline-flex items-center gap-2")}
                >
                  <HugeiconsIcon icon={GithubIcon} size={16} />
                  Code
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* SECTION: Future Endeavors */}
      <section>
        <MockupLabel label="Future Endeavors" />
        <h2 className="text-3xl font-bold mb-8">On the Horizon</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "AI-Driven Automation",
              desc: "Exploring how LLMs can optimize low-level hardware interactions.",
            },
            {
              title: "Edge Computing Hub",
              desc: "Developing a decentralized network for smart home sensors using ESP32.",
            },
          ].map((item) => (
            <div key={item.title} className="p-6 rounded-2xl border border-dashed border-muted-foreground/30 space-y-2">
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
