export type Project = {
    id: string;
    name: string;
    tagline: string;
    description: string;
    tags: string[];
    image: string;
    gif?: string;
    links: {
        github?: string;
        live?: string;
    };
    featured?: boolean;
    status: 'live' | 'wip' | 'archived' | 'coming-soon';
};

export const PROJECTS: Project[] = [
    {
        id: 'hop',
        name: 'Hop',
        tagline: 'Real-time watch parties and collaborative browsing.',
        description:
            'A web app that lets users host watch parties, collaborate on projects, or browse the web together in real time. Built with Next.js and TypeScript, WebSocket for live sync, and PostgreSQL for persistence. Worked closely with a backend team across the full Agile lifecycle, defined API contracts, and shipped automated CI/CD workflows via GitHub Actions.',
        tags: ['TypeScript', 'Next.js', 'WebSocket', 'Node.js', 'PostgreSQL', 'Docker'],
        image: '/projects/hop-1.png',
        gif: '/projects/hop.gif',
        links: {
            github: 'https://github.com/Sunilpaul16',
        },
        featured: true,
        status: 'archived',
    },
    {
        id: 'pawgang',
        name: 'PawGang',
        tagline: 'Schedule dog park visits and playdates.',
        description:
            'A mobile app for dog owners to find nearby parks, schedule visits, and organise playdates. Refactored the entire codebase to TypeScript for better type safety, introduced Jest for test coverage, and optimised the UI across screen sizes for a smoother experience.',
        tags: ['React Native', 'TypeScript', 'MongoDB', 'Jest', 'Google Maps'],
        image: '/projects/pawgang.png',
        gif: '/projects/pawgang.gif',
        links: {
            github: 'https://github.com/Sunilpaul16',
        },
        status: 'archived',
    },
    {
        id: 'trace',
        name: 'Trace',
        tagline: 'One place for every show, game, and book.',
        description:
            'A mobile app to track virtual activities (books, games, movies, TV shows) all in one place. Built with React Native, Expo, and TypeScript for cross-platform compatibility. Handled the full development lifecycle: planning, design, implementation, and deployment.',
        tags: ['React Native', 'TypeScript', 'Expo'],
        image: '/projects/trace.png',
        links: {
            github: 'https://github.com/Sunilpaul16',
        },
        status: 'live',
    },
    {
        id: 'next',
        name: '???',
        tagline: "Something's cooking.",
        description: 'Not ready to talk about it yet. Check back soon.',
        tags: [],
        image: '',
        links: {},
        status: 'coming-soon',
    },
];
