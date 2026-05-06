import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import { ViewTransition } from 'react';
import { HomeSidebar } from './components/HomeSidebar';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({
    variable: '--font-jetbrains-mono',
    subsets: ['latin'],
    weight: ['300', '400', '500'],
});

export const metadata: Metadata = {
    title: {
        default: 'Sunil Paul',
        template: '%s — Sunil Paul',
    },
    description:
        'Frontend developer focused on TypeScript and React. Based in the UK, open to remote work.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${jetbrainsMono.variable} h-full antialiased`}
        >
            <body className="h-full">
                <div
                    aria-hidden
                    className="glow-pulse pointer-events-none fixed inset-x-0 top-0 opacity-0 dark:opacity-100"
                    style={{
                        height: '70vh',
                        background:
                            'radial-gradient(ellipse 80% 100% at 50% 0%, rgba(37, 99, 235, 0.2) 0%, transparent 70%)',
                        filter: 'blur(120px)',
                        zIndex: 0,
                    }}
                />
                <div className="relative z-1 flex h-full flex-col bg-zinc-50 dark:bg-transparent lg:flex-row">
                    <HomeSidebar />
                    <main className="min-w-0 flex-1 overflow-y-auto lg:order-first">
                        <ViewTransition name="main-content">
                            {children}
                        </ViewTransition>
                    </main>
                </div>
            </body>
        </html>
    );
}
