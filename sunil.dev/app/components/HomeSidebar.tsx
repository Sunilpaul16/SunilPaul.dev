import Link from "next/link";

const links = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  { href: "/skills", label: "skills" },
  { href: "/projects", label: "projects" },
  { href: "/contact", label: "contact" },
] as const;

export function HomeSidebar() {
  return (
    <aside className="flex w-full shrink-0 lg:sticky lg:top-0 lg:min-h-screen lg:w-44 lg:flex-col lg:justify-center">
      <nav className="flex flex-row flex-wrap gap-x-6 gap-y-3 lowercase lg:flex-col lg:gap-10">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="whitespace-nowrap text-sm text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
