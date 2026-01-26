'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
    { href: '/', label: 'home' },
    { href: '/about', label: 'about' },
    { href: '/skills', label: 'skills' },
    { href: '/projects', label: 'projects' },
    { href: '/contact', label: 'contact' },
] as const;

const STACK = ['TypeScript', 'React', 'Next.js', 'Linux', 'zsh'];

export function HomeSidebar() {
    const pathname = usePathname();

    function isActive(href: string) {
        return href === '/' ? pathname === '/' : pathname.startsWith(href);
    }

    return (
        <aside
            className="sticky top-0 z-40 flex w-full shrink-0 flex-col bg-zinc-50/85 backdrop-blur-md dark:bg-bg/85 lg:order-last lg:h-full lg:w-52 lg:bg-zinc-50 lg:backdrop-blur-none xl:w-60 dark:lg:bg-bg"
            style={{ viewTransitionName: 'site-nav' }}
        >
            {/* Nav — flex-1 keeps links centred in the upper portion */}
            <nav className="flex flex-row items-center gap-5 overflow-x-auto px-5 py-3.5 sm:gap-7 sm:px-6 lg:flex lg:flex-1 lg:flex-col lg:items-start lg:justify-center lg:gap-9 lg:overflow-x-visible lg:px-8 lg:py-12 xl:gap-11">
                {links.map(({ href, label }, i) => {
                    const active = isActive(href);
                    return (
                        <Link
                            key={href}
                            href={href}
                            className={`nav-link group relative flex shrink-0 items-center gap-2.5 transition-all duration-300 capitalize ${
                                active
                                    ? 'text-zinc-950 dark:text-accent'
                                    : 'text-zinc-400 hover:text-zinc-700 dark:text-zinc-500 dark:hover:text-zinc-300'
                            } text-sm font-light tracking-wide sm:text-base lg:text-xl xl:text-2xl`}
                            style={{ animationDelay: `${i * 60}ms` }}
                        >
                            <span
                                className={`hidden size-1.5 shrink-0 rounded-full transition-all duration-300 lg:block ${
                                    active
                                        ? 'scale-100 bg-zinc-950 opacity-100 dark:bg-accent'
                                        : 'scale-0 opacity-0'
                                }`}
                                aria-hidden
                            />
                            <span className="relative">
                                {label}
                                <span
                                    className={`absolute -bottom-0.5 left-0 h-px w-full origin-left rounded-full transition-transform duration-300 ease-out lg:hidden ${
                                        active
                                            ? 'scale-x-100 bg-zinc-950 dark:bg-accent'
                                            : 'scale-x-0'
                                    }`}
                                    aria-hidden
                                />
                                <span
                                    className="absolute -bottom-0.5 left-0 hidden h-px w-full origin-left scale-x-0 rounded-full bg-zinc-300 transition-transform duration-300 ease-out group-hover:scale-x-100 dark:bg-zinc-700 lg:block"
                                    aria-hidden
                                />
                            </span>
                        </Link>
                    );
                })}
            </nav>

            {/* Desktop-only widgets pinned to the bottom */}
            <div className="hidden lg:flex lg:flex-col lg:gap-5 lg:px-8 lg:pb-10">
                <div className="h-px bg-zinc-200/80 dark:bg-zinc-800" />

                {/* Availability */}
                <div className="flex items-center gap-2">
                    <span className="size-1.5 animate-pulse rounded-full bg-emerald-500" aria-hidden />
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">
                        Available
                    </span>
                </div>

                {/* Stack */}
                <div className="space-y-2.5">
                    <p className="text-[10px] font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
                        Stack
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                        {STACK.map((tech) => (
                            <span
                                key={tech}
                                className="rounded-md border border-zinc-200/80 bg-zinc-100/80 px-2 py-0.5 text-[10px] text-zinc-600 dark:border-zinc-700/80 dark:bg-zinc-800/60 dark:text-zinc-400"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* CV */}
                <a
                    href="/projects/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-accent"
                >
                    CV / Resume →
                </a>
            </div>
        </aside>
    );
}
