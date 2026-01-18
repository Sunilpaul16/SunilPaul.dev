import Link from 'next/link';
import { GitHubContributionGrid } from './components/GitHubContributionGrid';
import { HomeSidebar } from './components/HomeSidebar';
import { SocialLinks } from './components/SocialLinks';
import { getAllLogs } from './content/logs';

/** Update these to your real profiles. */
const SOCIAL = {
    linkedin: 'https://www.linkedin.com/in/sunilpaul16/',
    github: 'https://github.com/Sunilpaul16',
    email: 'mailto:hello@example.com',
} as const;

export default function Home() {
    const logRows = getAllLogs().map((post) => ({
        title: `log ${post.indexLabel}: ${post.title}`,
        href: `/blog/${post.slug}` as const,
    }));
    return (
        <div className="flex min-h-full flex-1 flex-col bg-zinc-50 dark:bg-zinc-950">
            <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-12 p-6 md:gap-16 md:p-10 lg:flex-row lg:items-stretch lg:gap-16 lg:pr-8">
                <div className="flex min-w-0 flex-[3] flex-col gap-12 md:gap-16">
                    <header className="pt-2">
                        <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-light leading-[1.05] tracking-tight text-zinc-950 dark:text-zinc-50">
                            <span className="font-normal">Sunil</span>{' '}
                            <span className="text-zinc-600 dark:text-zinc-400">
                                Paul
                            </span>
                        </h1>
                    </header>

                    <section aria-labelledby="github-heading">
                        <h2 id="github-heading" className="sr-only">
                            GitHub activity
                        </h2>
                        <GitHubContributionGrid />
                        <SocialLinks
                            linkedin={SOCIAL.linkedin}
                            github={SOCIAL.github}
                            email={SOCIAL.email}
                        />
                    </section>

                    <section aria-labelledby="logs-heading">
                        <h2
                            id="logs-heading"
                            className="mb-6 text-sm font-medium lowercase text-zinc-500 dark:text-zinc-400"
                        >
                            logs
                        </h2>
                        <ul className="flex flex-col gap-4">
                            {logRows.map(({ title, href }) => (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        className="group flex items-center justify-between gap-4 border-b border-zinc-200/80 py-3 text-sm lowercase text-zinc-800 transition-colors hover:text-zinc-950 dark:border-zinc-800 dark:text-zinc-200 dark:hover:text-zinc-50"
                                    >
                                        <span>{title}</span>
                                        <span className="text-zinc-400 opacity-0 transition-opacity group-hover:opacity-100 dark:text-zinc-500">
                                            →
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <Link
                            href="/blog"
                            className="mt-6 inline-flex items-center gap-2 text-sm lowercase text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
                        >
                            view all posts
                            <span aria-hidden>→</span>
                        </Link>
                    </section>
                </div>

                <HomeSidebar />
            </div>
        </div>
    );
}
