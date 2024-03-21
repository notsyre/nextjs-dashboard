import { Unbounded } from 'next/font/google';
import './ui/global.css';
import { roboto_mono } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto_mono.className} antialiased`}>
        {children}</body>
    </html>
  );
}

