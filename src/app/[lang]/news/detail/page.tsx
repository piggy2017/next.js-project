/*
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2026-01-09 11:00:00
 * @LastEditors: 孙林
 * @LastEditTime: 2026-01-09 11:22:00
 * @Description: 
 */
'use client'
import { use } from 'react';
import { type Language } from '@/i18n/config';
import { useTranslation } from '@/i18n/client';
import { useSearchParams } from 'next/navigation';

interface PageProps {
  params: Promise<{ lang: Language }>;
}

export default function NewsDetailPage({ params }: PageProps) {
  const { lang } = use(params);
  const { t } = useTranslation(lang);
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  
  console.log('news detail id:', id);
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">{t('news.detailTitle')}</h1>
      <p className="text-lg">{t('news.paramLabel')}: {id}</p>
    </div>
  )
}
