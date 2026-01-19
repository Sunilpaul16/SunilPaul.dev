'use client';

import type { CSSProperties } from 'react';
import { useMemo, useState } from 'react';
import type { SkillGroup } from '../content/skills';

type Props = {
    groups: SkillGroup[];
    extras: string[];
};

export function SkillsShowcase({ groups, extras }: Props) {
    const [activeId, setActiveId] = useState(groups[0]?.id ?? '');

    const activeGroup = useMemo(
        () => groups.find((g) => g.id === activeId) ?? groups[0],
        [groups, activeId],
    );

    return (
        <div className="relative space-y-14">
            <div
                className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-linear-to-br from-violet-400/15 via-transparent to-emerald-400/10 blur-3xl dark:from-violet-500/10 dark:to-emerald-500/10"
                aria-hidden
            />

            {/* Tabbed comfort meters */}
            <section className="relative space-y-6">
                <div className="flex flex-wrap gap-2">
                    {groups.map((g) => {
                        const isOn = g.id === activeGroup?.id;
                        return (
                            <button
                                key={g.id}
                                type="button"
                                onClick={() => setActiveId(g.id)}
                                className={`rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
                                    isOn
                                        ? 'border-zinc-950 bg-zinc-950 text-white shadow-lg shadow-zinc-950/15 dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-950 dark:shadow-zinc-100/10'
                                        : 'border-zinc-200 bg-white/60 text-zinc-600 hover:border-zinc-300 hover:bg-white dark:border-zinc-700 dark:bg-zinc-900/40 dark:text-zinc-400 dark:hover:border-zinc-500 dark:hover:bg-zinc-900'
                                }`}
                            >
                                {g.title}
                            </button>
                        );
                    })}
                </div>

                {activeGroup ? (
                    <div
                        key={activeGroup.id}
                        className="skills-group-enter space-y-6"
                    >
                        <p className="max-w-prose text-zinc-600 dark:text-zinc-400">
                            {activeGroup.description}
                        </p>
                        <ul className="space-y-5">
                            {activeGroup.skills.map((skill, i) => (
                                <li key={skill.name}>
                                    <div className="flex items-baseline justify-between gap-4 text-sm">
                                        <span className="font-medium text-zinc-950 dark:text-zinc-100">
                                            {skill.name}
                                        </span>
                                        <span className="tabular-nums text-zinc-400 dark:text-zinc-500">
                                            {skill.level}%
                                        </span>
                                    </div>
                                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-zinc-200/90 dark:bg-zinc-800">
                                        <div
                                            className="skill-meter-inner h-full rounded-full bg-linear-to-r from-zinc-700 via-zinc-800 to-zinc-900 dark:from-zinc-300 dark:via-zinc-200 dark:to-zinc-100"
                                            style={
                                                {
                                                    '--fill': `${skill.level}%`,
                                                    '--delay': `${120 + i * 70}ms`,
                                                } as CSSProperties
                                            }
                                        />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : null}
            </section>

            {/* Floating extras cloud */}
            <section className="relative space-y-4">
                <h2 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                    Also in the mix
                </h2>
                <p className="max-w-prose text-sm text-zinc-600 dark:text-zinc-400">
                    Smaller surface area, but I&apos;ve shipped or debugged with
                    these enough to be dangerous.
                </p>
                <div className="flex flex-wrap gap-2">
                    {extras.map((label, i) => (
                        <span
                            key={label}
                            className="skill-pill inline-flex items-center rounded-full border border-zinc-200/90 bg-white/70 px-3 py-1.5 text-xs text-zinc-700 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-300 dark:hover:border-zinc-500"
                            style={{ animationDelay: `${i * 35}ms` }}
                        >
                            {label}
                        </span>
                    ))}
                </div>
            </section>
        </div>
    );
}
