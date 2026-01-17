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
    <aside className="flex w-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950 lg:w-full lg:max-w-[11rem] lg:shrink-0">
      <nav className="flex flex-row gap-4 overflow-x-auto lowercase lg:flex-col lg:gap-5 lg:overflow-visible">
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
