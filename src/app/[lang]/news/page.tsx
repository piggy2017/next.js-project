/*
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2026-01-09 11:00:00
 * @LastEditors: 孙林
 * @LastEditTime: 2026-01-09 11:00:00
 * @Description: 
 */
'use client'
import Link from "next/link"
import { useRouter } from 'next/navigation';
import { useTranslation } from '@/i18n/client';
import { type Language } from '@/i18n/config';
import { use } from 'react';

export default function News({ params }: { params: Promise<{ lang: Language }> }) {
    const { lang } = use(params);
    const { t } = useTranslation(lang);
    const newsList = [
        {
            id: 1,
            title: t('news.newsTitle1'),
            content: t('news.newsContent1'),
            date: "2026-01-06",
        },
        {
            id: 2,
            title: t('news.newsTitle2'),
            content: t('news.newsContent2'),
            date: "2026-01-06",
        },
    ];
    const router = useRouter();
    const goPage = (id: number) => {
        router.push(`/${lang}/news/detail?id=${id}`)
    };
    return (
        <div className="">
            <div className="pt-18 font-bold text-xl">{t('news.listTitle')}</div>
            {newsList.map((item) => (
                <Link key={item.id} href={`/${lang}/news/detail?id=${item.id}`} className="pt-4" onClick={() => goPage(item.id)}>
                    <div className="font-bold text-lg">{item.title}</div>
                    <div className="text-sm text-gray-500">{item.date}</div>
                    <div className="mt-2">{item.content}</div>
                </Link>
            ))}
        </div>
    );
}
