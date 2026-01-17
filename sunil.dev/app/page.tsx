import Link from "next/link";
import { GitHubContributionGrid } from "./components/GitHubContributionGrid";
import { HomeSidebar } from "./components/HomeSidebar";

const blogRows = [
  { title: "blog 1", href: "/blog/1" },
  { title: "blog 2", href: "/blog/2" },
  { title: "blog 3", href: "/blog/3" },
] as const;

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-zinc-100 dark:bg-zinc-950">
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-6 p-5 md:p-8 lg:flex-row lg:gap-8">
        <div className="flex min-w-0 flex-[3] flex-col gap-6">
          <header className="rounded-2xl bg-zinc-950 px-6 py-5 text-white dark:bg-black">
            <p className="text-lg font-medium tracking-tight lowercase md:text-xl">
              Sunil
            </p>
          </header>

          <section
            className="rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"
            aria-labelledby="github-heading"
          >
            <h2 id="github-heading" className="sr-only">
              GitHub activity
            </h2>
            <GitHubContributionGrid />
          </section>

          <section
            className="flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950 md:p-6"
            aria-labelledby="blogs-heading"
          >
            <h2
              id="blogs-heading"
              className="text-sm font-medium lowercase text-zinc-500 dark:text-zinc-400"
            >
              blogs
            </h2>
            <ul className="flex flex-col gap-3">
              {blogRows.map(({ title, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="block rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm lowercase text-zinc-800 transition-colors hover:border-zinc-300 hover:bg-white dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-zinc-600 dark:hover:bg-zinc-800"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <HomeSidebar />
      </div>
    </div>
  );
}
