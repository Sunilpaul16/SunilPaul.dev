import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Contact',
    description: 'Get in touch — open to full-time roles and freelance work.',
};

const CONTACTS = [
    {
        label: 'Email',
        value: 'sunilpaul16@gmail.com',
        href: 'mailto:sunilpaul16@gmail.com',
        description: 'Best way to reach me. I reply within a day or two.',
    },
    {
        label: 'LinkedIn',
        value: 'sunilpaul16',
        href: 'https://www.linkedin.com/in/sunilpaul16/',
        description: 'Professional history and recommendations.',
    },
    {
        label: 'GitHub',
        value: 'Sunilpaul16',
        href: 'https://github.com/Sunilpaul16',
        description: 'Code, side projects, and contribution history.',
    },
];

export default function ContactPage() {
    return (
        <div className="mx-auto flex min-h-full max-w-2xl flex-col gap-12 px-5 py-12 md:px-8">
            <header className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                    <h1 className="text-3xl font-light tracking-tight text-zinc-950 dark:text-zinc-50">
                        Get in touch
                    </h1>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-800/60 dark:bg-emerald-950/40 dark:text-emerald-400">
                        <span className="size-1.5 animate-pulse rounded-full bg-emerald-500" />
                        Open to opportunities
                    </span>
                </div>
                <p className="max-w-prose text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                    Whether it&apos;s a job, a project, or just a question —
                    I&apos;m usually happy to chat. Email is the fastest path.
                </p>
            </header>

            <div className="flex flex-col gap-4">
                {CONTACTS.map(({ label, value, href, description }) => (
                    <Link
                        key={label}
                        href={href}
                        target={href.startsWith('mailto') ? undefined : '_blank'}
                        rel={
                            href.startsWith('mailto')
                                ? undefined
                                : 'noopener noreferrer'
                        }
                        className="group flex flex-col gap-1 rounded-xl border border-zinc-200/80 bg-white/60 p-5 transition-all duration-200 hover:border-zinc-300 hover:shadow-md hover:shadow-zinc-950/5 dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-zinc-700 dark:hover:shadow-zinc-950/30"
                    >
                        <div className="flex items-center justify-between gap-4">
                            <span className="text-xs font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                                {label}
                            </span>
                            <span className="text-zinc-400 opacity-0 transition-opacity group-hover:opacity-100 dark:text-zinc-500">
                                →
                            </span>
                        </div>
                        <p className="font-medium text-zinc-950 dark:text-zinc-50">
                            {value}
                        </p>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">
                            {description}
                        </p>
                    </Link>
                ))}
            </div>

            <footer className="border-t border-zinc-200/80 pt-8 dark:border-zinc-800">
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    Based in the UK.{' '}
                    <span className="text-zinc-950 dark:text-zinc-50">
                        Remote-friendly.
                    </span>
                </p>
            </footer>
        </div>
    );
}
