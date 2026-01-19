import type { Metadata } from 'next';
import { Geist, JetBrains_Mono } from 'next/font/google';
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
    title: 'Sunil',
    description: 'Portfolio',
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
            <body className="min-h-full flex flex-col">
                <div className="flex min-h-screen w-full flex-1 flex-col bg-zinc-50 dark:bg-zinc-950 lg:flex-row lg:items-stretch">
                    <main className="flex min-h-0 min-w-0 flex-4 flex-col">
                        {children}
                    </main>
                    <HomeSidebar />
                </div>
            </body>
        </html>
    );
}
