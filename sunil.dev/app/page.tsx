import Image from 'next/image';
import Link from 'next/link';
import { GitHubContributionGrid } from './components/GitHubContributionGrid';
import { SocialLinks } from './components/SocialLinks';
import { formatDate, getAllLogs } from './content/logs';
import { PROJECTS } from './content/projects';

const SOCIAL = {
    linkedin: 'https://www.linkedin.com/in/sunilpaul16/',
    github: 'https://github.com/Sunilpaul16',
    email: 'mailto:sunilpaul16@gmail.com',
} as const;

export default function Home() {
    const posts = getAllLogs();
    const featured = PROJECTS.filter((p) => p.status !== 'coming-soon').slice(
        0,
        3,
    );

    return (
        <div className="relative mx-auto flex w-full max-w-4xl flex-1 flex-col gap-20 px-6 py-12 md:px-10 md:py-16">
            <div
                className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-linear-to-bl from-zinc-200/60 via-transparent to-transparent blur-3xl dark:from-zinc-800/30"
                aria-hidden
            />

            {/* ── Hero ───────────────────────────────────────────── */}
            <header className="space-y-8 pt-2">
                <div className="space-y-5">
                    <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-light leading-[1.05] tracking-tight text-zinc-950 dark:text-zinc-50">
                        <span className="font-normal">Sunil</span>{' '}
                        <span className="text-zinc-500 dark:text-zinc-400">
                            Paul
                        </span>
                    </h1>

                    <p className="max-w-md text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                        Frontend developer. TypeScript, React, and an
                        embarrassing amount of time spent on things most
                        people won&apos;t notice.
                    </p>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
                    >
                        View my work
                    </Link>
                    <Link
                        href="/about"
                        className="text-sm text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
                    >
                        About me →
                    </Link>
                </div>
            </header>

            {/* ── GitHub Activity ────────────────────────────────── */}
            <section>
                <p className="mb-4 text-xs font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
                    Activity
                </p>
                <GitHubContributionGrid />
                <SocialLinks
                    linkedin={SOCIAL.linkedin}
                    github={SOCIAL.github}
                    email={SOCIAL.email}
                />
            </section>

            {/* ── Selected Work ──────────────────────────────────── */}
            <section>
                <div className="mb-5 flex items-center justify-between gap-4">
                    <p className="text-xs font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
                        Selected work
                    </p>
                    <Link
                        href="/projects"
                        className="text-sm text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
                    >
                        All projects →
                    </Link>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                    {featured.map((project) => (
                        <Link
                            key={project.id}
                            href="/projects"
                            className="group overflow-hidden rounded-xl border border-zinc-200/80 bg-white/60 transition-all duration-200 hover:border-zinc-300 hover:shadow-lg hover:shadow-zinc-950/5 dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-zinc-700 dark:hover:shadow-zinc-950/30"
                        >
                            <div className="relative aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                                {project.image ? (
                                    <Image
                                        src={project.image}
                                        alt={project.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        unoptimized={project.image.endsWith(
                                            '.gif',
                                        )}
                                        sizes="(max-width: 640px) 100vw, 33vw"
                                    />
                                ) : (
                                    <div className="absolute inset-0 bg-linear-to-br from-violet-100 via-zinc-100 to-emerald-100 dark:from-violet-950/30 dark:via-zinc-900 dark:to-emerald-950/30" />
                                )}
                            </div>
                            <div className="p-4">
                                <p className="text-sm font-medium text-zinc-950 dark:text-zinc-50">
                                    {project.name}
                                </p>
                                <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">
                                    {project.tagline}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* ── Writing ────────────────────────────────────────── */}
            <section className="pb-6">
                <div className="mb-5 flex items-center justify-between gap-4">
                    <p className="text-xs font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
                        Writing
                    </p>
                    <Link
                        href="/blog"
                        className="text-sm text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
                    >
                        All posts →
                    </Link>
                </div>

                <ul className="flex flex-col divide-y divide-zinc-100 dark:divide-zinc-900">
                    {posts.map((post) => (
                        <li key={post.slug}>
                            <Link
                                href={`/blog/${post.slug}`}
                                className="group flex items-start justify-between gap-4 py-5"
                            >
                                <div className="min-w-0 flex-1 space-y-2">
                                    <div className="flex items-center gap-2">
                                        <span className="rounded-md border border-zinc-200/80 bg-zinc-100/80 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-zinc-500 dark:border-zinc-700/80 dark:bg-zinc-800/60 dark:text-zinc-400">
                                            {post.type}
                                        </span>
                                        <span className="text-xs text-zinc-400 dark:text-zinc-600">
                                            {formatDate(post.postedAt)}
                                        </span>
                                    </div>
                                    <p className="text-sm font-medium text-zinc-800 transition-colors group-hover:text-zinc-950 dark:text-zinc-200 dark:group-hover:text-zinc-50">
                                        {post.subject}
                                    </p>
                                    <p className="line-clamp-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-500">
                                        {post.paragraphs[0]}
                                    </p>
                                </div>
                                <span className="mt-1 shrink-0 text-zinc-300 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-zinc-600 dark:text-zinc-700 dark:group-hover:text-zinc-400">
                                    →
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
