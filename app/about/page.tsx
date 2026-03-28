import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experiences, skills } from "@/lib/data";
import { MockupLabel } from "@/components/mockup-label";

export default function About() {
  return (
    <div className="space-y-16 py-8">
      {/* SECTION: Professional Bio */}
      <section>
        <MockupLabel label="Professional Bio" />
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 items-start">
          <div className="w-full aspect-square bg-muted rounded-2xl flex items-center justify-center border-4 border-muted-foreground/10 overflow-hidden">
            <span className="text-muted-foreground text-sm font-mono">[Photo Placeholder]</span>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">About Me</h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Early-career IT professional with hands-on experience in web
              development and embedded systems, and a strong foundation in
              programming fundamentals. Seeking development or instructional roles
              focused on building and explaining real-world systems.
            </p>
            <p className="text-muted-foreground">
              I enjoy solving complex problems at the intersection of hardware and software. 
              Whether it's building an RFID-based attendance system or developing a high-performance 
              Next.js application, I strive for clean code and intuitive user experiences.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION: Experience Timeline */}
      <section>
        <MockupLabel label="Experience Timeline" />
        <h2 className="text-3xl font-bold mb-8">Work History</h2>
        <div className="space-y-12 ml-4 border-l-2 border-muted-foreground/20 pl-8 relative">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-background" />
              <div className="space-y-2">
                <span className="text-sm font-mono text-muted-foreground">{exp.date}</span>
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <p className="text-primary font-medium">{exp.company}</p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-muted-foreground shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION: Technical Stack */}
      <section>
        <MockupLabel label="Technical Stack" />
        <h2 className="text-3xl font-bold mb-8">Skills & Tools</h2>
        <Card className="bg-muted/30 border-none">
          <CardContent className="pt-6">
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm font-medium rounded-full">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
