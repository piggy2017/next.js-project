/*
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2026-01-09 11:00:00
 * @LastEditors: 孙林
 * @LastEditTime: 2026-01-27 16:51:00
 * @Description: 
 */
'use client'
import Image from "next/image";
import ThemeToggle from "@/app/components/ThemeToggle";
import { useRouter } from 'next/navigation';
import { useTranslation } from '@/i18n/client';
import { type Language } from '@/i18n/config';
import LanguageSwitcher from "@/app/components/LanguageSwitcher";
import { use, useEffect } from 'react';
import { login } from '@/lib/api-helper';

export default function Home({ params }: { params: Promise<{ lang: Language }> }) {
  const { lang } = use(params);
  const router = useRouter();
  const { t } = useTranslation(lang);
  
  const goPage = (path: string) => {
    router.push(`/${lang}${path}`);
  };


  useEffect(() => {
    const doLogin = async () => {
      // 现在可以直接传递参数，无需包装 body
      const res = await login({ 
        username: 'test', 
        password: 'test', 
        code: '', 
        uuid: '' 
      });
      console.log(res);
    };
    doLogin();
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-brand-500">
      <div className="flex justify-between items-center p-4">
        <ThemeToggle lang={lang} />
        
      </div>
      <LanguageSwitcher currentLang={lang} />
      
      <div className="h-2/3 bg-bg-base p-10 transition-colors duration-300">
        <h1 className="text-4xl font-bold text-primary mb-4">
          {t('home.title')}
        </h1>

        <p className="text-text-base mb-8">
          {t('home.description')}
        </p>

        <div className="bg-primary text-white p-4 rounded shadow-lg w-fit">
          {t('home.primaryBox')}
        </div>
      </div>


      <div className="pt-4 text-xl">{t('home.defaultColor')}</div>
      <div className="text-primary text-xl">{t('home.customColor')}</div>

      <div className="pt-4 text-xl cursor-pointer" onClick={() => goPage("/news")}>{t('home.goToNews')}</div>
      <div className="pt-4 text-xl cursor-pointer" onClick={() => goPage("/goods")}>{t('home.goToGoods')}</div>

      <p className="text-xl mt-4 text-red-500">{t('home.tailwindTip')}</p>
      <ul>
        <li className="groupClass">{t('home.applyDesc')}</li>
        <li className="groupClass">{t('home.layerDesc')}</li>
        <li className="groupClass">{t('home.variantsDesc')}</li>
      </ul>

      <div className="pl-14">
        <Image className="avatar" src="/test.jpg" alt="User 1" width={50} height={50} />
        <button className="button">{t('home.clickMe')}</button>
      </div>
    </div>
  );
}
