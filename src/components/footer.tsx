"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    label: "Home",
    href: "/",
    target: false,
  },
  {
    label: "Blog",
    href: "/blog",
    target: false,
  },
  {
    label: "About",
    href: "/about",
    target: false,
  },
];

export default function Footer() {
  const pathname = usePathname();

  // Hide footer on homepage and experience pages
  if (
    pathname === "/" ||
    pathname === "/experience" ||
    pathname?.startsWith("/experience/")
  ) {
    return null;
  }

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer>
      <div className="conrtainer dark:bg-background pb-5 xl:pb-5 dark:text-gray-300">
        <Link
          className="block w-[6.25rem] mx-auto"
          href="/"
          aria-label="Home page"
        ></Link>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-7 text-primary">
          {navItems.map((navItem) => (
            <Link
              key={navItem.label}
              href={navItem.href}
              target={navItem.target ? "_blank" : undefined}
              rel={navItem.target ? "noopener noreferrer" : undefined}
              className="transition-colors hover:text-foreground/80 text-foreground/60 text-sm"
            >
              {navItem.label}
            </Link>
          ))}
        </div>
        <div className="mt-8 flex flex-col lg:flex-row gap-6 justify-center text-center lg:mt-5 text-xs border-t pt-8">
          <p className="text-foreground/60">&copy; {getCurrentYear()}.</p>
        </div>
      </div>
    </footer>
  );
}
