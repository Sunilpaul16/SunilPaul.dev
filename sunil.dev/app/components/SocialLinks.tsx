import Link from 'next/link';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

type SocialLinksProps = {
    linkedin: string;
    github: string;
    email: string;
};

const linkBase =
    'inline-flex items-center gap-2 rounded-full border border-zinc-200/80 bg-white/60 px-4 py-2 text-sm text-zinc-600 backdrop-blur-sm transition-all duration-200 hover:-translate-y-px hover:border-zinc-300 hover:bg-white hover:text-zinc-950 hover:shadow-md hover:shadow-zinc-950/5 dark:border-zinc-700/80 dark:bg-zinc-900/50 dark:text-zinc-400 dark:hover:border-accent/50 dark:hover:bg-zinc-900 dark:hover:text-accent';

export function SocialLinks({ linkedin, github, email }: SocialLinksProps) {
    return (
        <div className="mt-6 flex flex-wrap gap-3">
            <Link
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={linkBase}
            >
                <FiLinkedin aria-hidden />
                LinkedIn
            </Link>
            <Link
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className={linkBase}
            >
                <FiGithub aria-hidden />
                GitHub
            </Link>
            <a href={email} className={linkBase}>
                <FiMail aria-hidden />
                Email
            </a>
        </div>
    );
}
