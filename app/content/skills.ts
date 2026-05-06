export type SkillGroup = {
    id: string;
    title: string;
    description: string;
    skills: string[];
};

export const SKILL_GROUPS: SkillGroup[] = [
    {
        id: 'frontend',
        title: 'Frontend',
        description: 'Interfaces, layout, and keeping things fast.',
        skills: ['React', 'Next.js', 'HTML & CSS', 'Tailwind CSS'],
    },
    {
        id: 'languages',
        title: 'Languages',
        description: "What I reach for first when I'm typing code.",
        skills: ['TypeScript', 'JavaScript', 'Python', 'SQL'],
    },
    {
        id: 'systems',
        title: 'Systems & tooling',
        description: 'Shipping, debugging, and living in the terminal.',
        skills: ['Git', 'Linux', 'CLI / shell', 'Docker'],
    },
];

export type ExploringItem = {
    name: string;
    note: string;
};

export const CURRENTLY_EXPLORING: ExploringItem[] = [
    {
        name: 'Prisma',
        note: 'Learning it for a side project. SQL but with a better DX than writing raw queries.',
    },
    {
        name: 'Rust',
        note: "Only scratched the surface. Probably won't stick but I want to understand how it thinks.",
    },
];

export const SKILL_EXTRAS: string[] = [
    'REST APIs',
    'Node.js',
    'PostgreSQL',
    'MongoDB',
    'React Native',
    'Expo',
    'Vercel',
    'Figma',
    'Jest',
    'WebSocket',
];
