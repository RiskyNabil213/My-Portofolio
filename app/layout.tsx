import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css' with { type: 'css' };
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Portofolio | Risky Nabil - Frontend Developer',
  description: 'Portofolio profesional Frontend Developer siswa SMK Telkom Malang jurusan RPL. Spesialisasi dalam React, Next.js, TypeScript, dan UI/UX modern.',
  keywords: 'Frontend Developer, React, Next.js, TypeScript, SMK Telkom Malang, RPL',
  authors: [{ name: 'Risky Nabil' }],
  creator: 'Risky Nabil',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://yourportfolio.com',
    title: 'Frontend Developer | SMK Telkom Malang',
    description: 'Portofolio profesional Frontend Developer',
    siteName: 'Portofolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frontend Developer | SMK Telkom Malang',
    description: 'Portofolio profesional Frontend Developer',
    creator: '@RiskyNabil213',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0066FF" />
      </head>
      <body className="font-sans bg-gray-50 text-gray-900 antialiased">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}