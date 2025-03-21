import Link from "next/link";
import { NavItem } from "@/types";
import { Button } from "../ui/button";

export default function DesktopNav({ navItems, isExperiencePage }: { navItems: NavItem[]; isExperiencePage?: boolean }) {
  return (
    <div className="hidden xl:flex items-center gap-7 text-primary">
      {navItems.map((navItem) => (
        <Link
          key={navItem.label}
          href={navItem.href}
          target={navItem.target ? "_blank" : undefined}
          rel={navItem.target ? "noopener noreferrer" : undefined}
          className={`transition-colors hover:text-primary ${isExperiencePage ? 'text-white hover:text-white/80' : 'text-foreground/80'} uppercase font-semibold text-xs`}
        >
          {navItem.label}
        </Link>
      ))}
      <Link
        href="/contact"
        className={`transition-colors hover:text-primary ${isExperiencePage ? 'text-white hover:text-white/80' : 'text-foreground/80'} uppercase font-semibold text-sm`}
      >
        <Button size="sm" variant="default">Get in Touch</Button>
      </Link>
    </div>
  );
}
