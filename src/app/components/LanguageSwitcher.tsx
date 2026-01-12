/*
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2026-01-09 11:00:00
 * @LastEditors: 孙林
 * @LastEditTime: 2026-01-09 11:00:00
 * @Description: 语言切换组件
 */
"use client"

import { useRouter, usePathname } from 'next/navigation';
import { languages, languageNames, type Language } from '@/i18n/config';

export default function LanguageSwitcher({ currentLang }: { currentLang: Language }) {
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLang: Language) => {
    if (newLang === currentLang) return;
    
    console.log(`LanguageSwitcher: 当前语言 ${currentLang}, 切换到 ${newLang}`);
    console.log(`LanguageSwitcher: 当前路径 ${pathname}`);
    
    // 将当前路径的语言部分替换为新语言
    const newPath = pathname.replace(`/${currentLang}`, `/${newLang}`);
    console.log(`LanguageSwitcher: 新路径 ${newPath}`);
    
    router.push(newPath);
  };

  return (
    <div className="flex gap-2 p-4 border rounded-lg bg-bg-base">
      {languages.map((lang) => (
        <button
          key={lang}
          onClick={() => switchLanguage(lang)}
          className={`px-4 py-2 rounded transition-colors ${
            currentLang === lang
              ? 'bg-primary text-white'
              : 'bg-gray-200 text-black hover:bg-gray-300'
          }`}
        >
          {languageNames[lang]}
        </button>
      ))}
    </div>
  );
}
