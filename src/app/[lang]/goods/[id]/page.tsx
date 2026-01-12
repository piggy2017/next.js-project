/*
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2026-01-09 11:00:00
 * @LastEditors: 孙林
 * @LastEditTime: 2026-01-09 11:22:00
 * @Description: 
 */

'use client'
import { useParams } from 'next/navigation';
import { type Language } from '@/i18n/config';
import { useTranslation } from '@/i18n/client';

export default function GoodsDetailPage() {
  const params = useParams<{ id: string; lang: Language }>();
  const { t } = useTranslation(params.lang);
  
  console.log('goods params.id:', params.id);
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">{t('goods.detailTitle')}</h1>
      <p className="text-lg">{t('goods.idLabel')}: {params.id}</p>
    </div>
  )
}
