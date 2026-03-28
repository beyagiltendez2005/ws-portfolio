"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";

export function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="flex gap-2 bg-muted/50 p-1 rounded-full border">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            buttonVariants({ variant: pathname === link.href ? "secondary" : "ghost" }),
            "rounded-full h-8 px-4 text-sm"
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
