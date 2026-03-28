import { HugeiconsIcon } from "@hugeicons/react";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "@hugeicons/core-free-icons";
import { buttonVariants } from "@/components/ui/button-variants";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-4 py-8 mt-12">
      <Separator />
      <div className="flex justify-center gap-4">
        <Link 
          href="https://github.com" 
          target="_blank" 
          className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
        >
          <HugeiconsIcon icon={GithubIcon} />
        </Link>
        <Link 
          href="https://linkedin.com" 
          target="_blank" 
          className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
        >
          <HugeiconsIcon icon={LinkedinIcon} />
        </Link>
        <Link 
          href="https://twitter.com" 
          target="_blank" 
          className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
        >
          <HugeiconsIcon icon={TwitterIcon} />
        </Link>
      </div>
      <div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Bea Giltendez
        </p>
      </div>
    </footer>
  );
}
