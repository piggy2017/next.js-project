'use client';
import React from 'react'

/*
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2026-01-09 11:00:00
 * @LastEditors: 孙林
 * @LastEditTime: 2026-01-09 11:00:00
 * @Description: 
 */
import Link from "next/link"
import { useTranslation } from '@/i18n/client';
import { type Language } from '@/i18n/config';
import { use } from 'react';

export default function GoodsPage({ params }: { params: Promise<{ lang: Language }> }) {
    const { lang } = use(params);
    const { t } = useTranslation(lang);
    const goodsList = [
        {
            id: 1,
            title: t('goods.goodsTitle1'),
            content: t('goods.goodsContent1')
        },
        {
            id: 2,
            title: t('goods.goodsTitle2'),
            content: t('goods.goodsContent2')
        }
    ]
    return (
        <div>
            <h1>{t('goods.listTitle')}</h1>
            {goodsList.map((item) => (
                <Link key={item.id} href={`/${lang}/goods/${item.id}`} className="block mb-4">
                    <h2>{item.title}</h2>
                    <p>{item.content}</p>
                </Link>
            ))}
        </div>
    )
}
