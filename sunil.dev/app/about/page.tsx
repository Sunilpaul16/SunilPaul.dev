import Link from 'next/link';

export default function AboutPage() {
    return (
        <div className="mx-auto flex min-h-full max-w-2xl flex-col gap-12 px-5 py-12 md:px-8">

            <header className="space-y-4">
                <h1 className="text-3xl font-light tracking-tight text-zinc-950 dark:text-zinc-50">
                    Sunil Paul
                </h1>
                <p className="max-w-prose text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                    I write TypeScript and React for a living. Mostly frontend
                    — the kind of work where the details take most of the time
                    and nobody really notices unless they go wrong.
                </p>
            </header>

            <section className="space-y-4">
                <h2 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                    How I got here
                </h2>
                <p className="max-w-prose leading-relaxed text-zinc-700 dark:text-zinc-300">
                    I got into coding later than most. Started out of
                    curiosity — breaking things, reading docs at 2am,
                    rebuilding what I&apos;d broken. Over time it turned
                    into shipping real projects and actually enjoying the
                    problem-solving side of it.
                </p>
                <p className="max-w-prose leading-relaxed text-zinc-700 dark:text-zinc-300">
                    Most of my time lately is on the web stack. I&apos;ve also
                    been building small tools for myself — note systems, tiny
                    CLIs, things that solve actual friction in my workflow. I
                    reinstall Linux more than I should and I&apos;m fine with that.
                </p>
            </section>

            <section className="space-y-4 rounded-2xl border border-zinc-200/80 bg-white/60 p-6 dark:border-zinc-800 dark:bg-zinc-900/40">
                <h2 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                    What I&apos;m looking for
                </h2>
                <p className="max-w-prose leading-relaxed text-zinc-700 dark:text-zinc-300">
                    A team that ships real things and cares about quality.
                    Frontend-heavy work with a strong TypeScript codebase.
                    Remote or hybrid is fine. I want to keep getting better
                    technically while being close enough to product decisions
                    to actually matter.
                </p>
                <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-medium text-zinc-950 transition-colors hover:text-zinc-600 dark:text-zinc-50 dark:hover:text-zinc-300"
                >
                    Get in touch →
                </Link>
            </section>

            <section className="space-y-3 pb-4">
                <h2 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                    Outside the editor
                </h2>
                <p className="max-w-prose leading-relaxed text-zinc-700 dark:text-zinc-300">
                    I run sometimes, spend free time gaming or reading, and
                    cook the same few meals until I can make them without
                    thinking. I also take too many photos in cities at blue
                    hour — most don&apos;t turn out, but I like the process anyway.
                </p>
            </section>
        </div>
    );
}
