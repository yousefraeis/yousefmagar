import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import { ThemeProvider } from './provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Yousef Magar — Where Creativity Meets Code',
    description:
        'Step into the world where creativity meets code. I’m Youssef Magar, a Front-End Developer on a mission to build immersive, dynamic, and visually striking web experiences. Using React, TailwindCSS, and Framer Motion, I craft websites that aren’t just functional, but also beautifully engaging. Dive into my portfolio and discover how I bring ideas to life with the perfect blend of design and development.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' suppressHydrationWarning>
            <head>
                {/* <link rel="icon" href="/jsm-logo.png" sizes="any" /> */}
            </head>
            <body className={inter.className}>
                <ThemeProvider
                    attribute='class'
                    defaultTheme='dark'
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
