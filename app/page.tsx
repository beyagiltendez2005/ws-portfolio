import { FeaturedProjects } from "@/components/featured-projects";
import { MockupLabel } from "@/components/mockup-label";
import { buttonVariants } from "@/components/ui/button-variants";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-24 py-12">
      {/* SECTION: Hero Introduction */}
      <section>
        <MockupLabel label="Hero Introduction" />
        <div className="flex flex-col items-center text-center space-y-6">
          <h1 className="text-6xl md:text-8xl font-black tracking-tight bg-gradient-to-b from-foreground to-foreground/50 bg-clip-text text-transparent">
            Bea Giltendez
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-[600px]">
            Building systems that bridge the gap between hardware and high-level software.
          </p>
          <div className="flex gap-4">
            <Link 
              href="/projects" 
              className={cn(buttonVariants({ size: "lg" }), "rounded-full px-8")}
            >
              View Projects
            </Link>
            <Link 
              href="/about" 
              className={cn(buttonVariants({ size: "lg", variant: "outline" }), "rounded-full px-8")}
            >
              About Me
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION: Core Expertise */}
      <section>
        <MockupLabel label="Core Expertise" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Login Act",
              desc: "Webdev proj.",
            },
            {
              title: "AppsDev",
              desc: "using React.js & Next.js ",
            },
            {
              title: "DogImage",
              desc: "picture sa dog ",
            },
          ].map((item) => (
            <Card key={item.title} className="border-none bg-muted/30">
              <CardContent className="pt-6 text-left space-y-2">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* SECTION: Highlights */}
      <section>
        <MockupLabel label="Highlights" />
        <div className="space-y-8">
          <div className="flex justify-between items-end">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <Link href="/projects" className="text-sm underline">View all</Link>
          </div>
          <FeaturedProjects />
        </div>
      </section>
    </div>
  );
}