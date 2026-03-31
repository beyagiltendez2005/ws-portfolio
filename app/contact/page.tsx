import { MockupLabel } from "@/components/mockup-label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { HugeiconsIcon } from "@hugeicons/react";
import { MailIcon, MapsLocation01Icon, Share01Icon } from "@hugeicons/core-free-icons";

export default function Contact() {
  return (
    <div className="space-y-16 py-8">
      {/* SECTION: Let's Connect */}
      <section>
        <MockupLabel label="Let's Connect" />
        <div className="max-w-2xl mx-auto space-y-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight">Get in Touch</h1>
          <p className="text-muted-foreground text-lg">
            Have a project in mind or just want to chat? Send me a message below.
          </p>
          <Card className="text-left bg-muted/30 border-none">
            <CardContent className="pt-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Name</label>
                  <Input placeholder="Jane Doe" className="bg-background rounded-xl border-none ring-1 ring-muted" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Email</label>
                  <Input placeholder="jane@example.com" className="bg-background rounded-xl border-none ring-1 ring-muted" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Message</label>
                <Textarea placeholder="How can I help you?" className="bg-background rounded-xl border-none ring-1 ring-muted min-h-[150px]" />
              </div>
              <Button className="w-full rounded-xl py-6 text-lg font-bold shadow-lg shadow-primary/20">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SECTION: Network & Location */}
      <section>
        <MockupLabel label="Network & Location" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-muted/30 flex flex-col items-center text-center space-y-3">
            <div className="p-3 rounded-full bg-primary/10 text-primary">
              <HugeiconsIcon icon={MailIcon} />
            </div>
            <h3 className="font-bold">Email</h3>
            <p className="text-sm text-muted-foreground">giltendezbea34@gmail.com</p>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 flex flex-col items-center text-center space-y-3">
            <div className="p-3 rounded-full bg-primary/10 text-primary">
              <HugeiconsIcon icon={MapsLocation01Icon} />
            </div>
            <h3 className="font-bold">Location</h3>
            <p className="text-sm text-muted-foreground">Cordova Cebu</p>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 flex flex-col items-center text-center space-y-3">
            <div className="p-3 rounded-full bg-primary/10 text-primary">
              <HugeiconsIcon icon={Share01Icon} />
            </div>
            <h3 className="font-bold">Socials</h3>
            <p className="text-sm text-muted-foreground">@beagiltendez</p>
          </div>
        </div>
      </section>
    </div>
  );
}
