import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '烬契四重奏 | Emberbound Quartet',
  description: 'A liminal dreamcore dossier site for the fictional universe 烬契四重奏.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="bg-abyss text-slate-100 antialiased">{children}</body>
    </html>
  );
}
