import type { Metadata } from 'next';
import { Geist, JetBrains_Mono } from 'next/font/google';
import { ViewTransition } from 'react';
import { HomeSidebar } from './components/HomeSidebar';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const jetbrainsMono = JetBrains_Mono({
    variable: '--font-jetbrains-mono',
    subsets: ['latin'],
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
            className={`${geistSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
        >
            <body className="h-full">
                <div className="flex h-full flex-col bg-zinc-50 dark:bg-zinc-950 lg:flex-row">
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
