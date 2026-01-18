export type SkillBar = {
    name: string;
    level: number;
};

export type SkillGroup = {
    id: string;
    title: string;
    description: string;
    skills: SkillBar[];
};

export const SKILL_GROUPS: SkillGroup[] = [
    {
        id: 'frontend',
        title: 'frontend',
        description: 'Interfaces, layout, and keeping things fast.',
        skills: [
            { name: 'React', level: 90 },
            { name: 'Next.js', level: 85 },
            { name: 'HTML & CSS', level: 88 },
            { name: 'Tailwind CSS', level: 87 },
        ],
    },
    {
        id: 'languages',
        title: 'languages',
        description: 'What I reach for first when I’m typing code.',
        skills: [
            { name: 'TypeScript', level: 92 },
            { name: 'JavaScript', level: 88 },
            { name: 'Python', level: 55 },
            { name: 'SQL', level: 50 },
        ],
    },

    {
        id: 'systems',
        title: 'systems & tooling',
        description: 'Shipping, debugging, and living in the terminal.',
        skills: [
            { name: 'Git', level: 86 },
            { name: 'Linux', level: 77 },
            { name: 'CLI / shell', level: 78 },
            { name: 'Docker', level: 62 },
        ],
    },
];

export const SKILL_EXTRAS: string[] = [
    'REST APIs',
    'Node.js',
    'Postgres',
    'testing',
    'MangoDB',
    'PostgreSQL',
    'performance',
    'react native',
    'Vercel',
    'Figma',
    'markdown',
    'debugging',
];
