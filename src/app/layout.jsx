import { Geist } from 'next/font/google';
import '../styles/globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

export const metadata = {
    title: 'MD Project',
    description: 'Diary project',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={`${geistSans.variable} antialiased`}>{children}</body>
        </html>
    );
}
