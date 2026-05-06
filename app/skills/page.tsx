import type { Metadata } from 'next';
import { SkillsShowcase } from '../components/SkillsShowcase';

export const metadata: Metadata = {
    title: 'Skills',
    description: 'TypeScript, React, Next.js, and the rest of the stack.',
};
import {
    CURRENTLY_EXPLORING,
    SKILL_EXTRAS,
    SKILL_GROUPS,
} from '../content/skills';

export default function SkillsPage() {
    return (
        <div className="mx-auto flex min-h-full w-full max-w-4xl flex-col gap-12 px-6 py-12 md:gap-14 md:px-10 md:py-16">
            <header className="space-y-3">
                <h1 className="text-3xl font-light tracking-tight text-zinc-950 dark:text-zinc-50">
                    Skills
                </h1>
                <p className="max-w-prose text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                    A subjective map of what I&apos;m comfortable with not a
                    scoreboard, just how things feel day to day.
                </p>
            </header>

            <SkillsShowcase groups={SKILL_GROUPS} extras={SKILL_EXTRAS} />

            <section className="space-y-6 border-t border-zinc-100 pt-10 dark:border-zinc-900">
                <h2 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                    Currently exploring
                </h2>
                <ul className="flex flex-col gap-6 pb-4">
                    {CURRENTLY_EXPLORING.map((item) => (
                        <li key={item.name} className="space-y-1.5">
                            <p className="font-medium text-zinc-950 dark:text-zinc-50">
                                {item.name}
                            </p>
                            <p className="max-w-prose text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                                {item.note}
                            </p>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
