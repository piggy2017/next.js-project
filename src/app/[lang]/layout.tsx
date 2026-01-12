/*
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2026-01-09 11:01:22
 * @LastEditors: 孙林
 * @LastEditTime: 2026-01-09 11:26:01
 * @Description: 
 */
import { languages, defaultLanguage, type Language } from '@/i18n/config';
import ThemeProvider from "@/app/components/theme-context"
import { use } from 'react';
import "@/app/globals.css"

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: Language }>;
}) {
  const { lang } = use(params);
  
  return (
    <html lang={lang} suppressHydrationWarning>
      <body>
        <ThemeProvider 
          attribute="data-theme" 
          defaultTheme="system" 
          enableSystem
          themes={['light', 'dark', 'yellow', 'blue']}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
