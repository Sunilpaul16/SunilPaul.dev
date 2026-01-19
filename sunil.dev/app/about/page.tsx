export default function AboutPage() {
    return (
        <div className="mx-auto flex min-h-full max-w-2xl flex-col gap-10 px-5 py-12 md:px-8">
            <header>
                <h1 className="text-3xl font-light tracking-tight text-zinc-950 dark:text-zinc-50">
                    About Me
                </h1>
                <p className="mt-3 max-w-prose text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                    I’m{' '}
                    <span className="text-zinc-950 dark:text-zinc-200">
                        Sunil Paul
                    </span>{' '}
                    I build things that usually feel obvious after they exist,
                    and I care a lot about the small details that make software
                    feel good to use.
                </p>
            </header>

            <section className="space-y-3">
                <h2 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                    Right now
                </h2>
                <p className="max-w-prose leading-relaxed text-zinc-700 dark:text-zinc-300">
                    Most of my time is on the web stack: TypeScript, React, and
                    the less exciting bits that keep things fast and stable when
                    nobody’s watching. I’ve been building small tools for myself
                    lately note systems, tiny CLIs, and a personal dashboard I
                    keep adding to instead of finishing.
                </p>
            </section>

            <section className="space-y-3">
                <h2 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                    Before that
                </h2>
                <p className="max-w-prose leading-relaxed text-zinc-700 dark:text-zinc-300">
                    I got into coding later than most people. It started more
                    out of curiosity than anything serious. Over time it went
                    from “just trying things out” to actually building projects
                    and enjoying the problem-solving side of it. I still feel
                    like I’m figuring it out as I go.
                </p>
            </section>

            <section className="space-y-3">
                <h2 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                    Outside the editor
                </h2>
                <p className="max-w-prose leading-relaxed text-zinc-700 dark:text-zinc-300">
                    I go for runs sometimes, spend my free time playing games or
                    reading, and cook the same few meals until I can make them
                    without thinking. I also take too many photos in cities at
                    blue hour, most don’t turn out great, but I like the process
                    anyway.
                </p>
            </section>
        </div>
    );
}
