/*
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2026-01-09 11:00:00
 * @LastEditors: 孙林
 * @LastEditTime: 2026-01-09 11:15:00
 * @Description: i18next 客户端配置
 */

'use client';

import i18next from 'i18next';
import { initReactI18next, useTranslation as useTranslationOrg } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { languages, defaultLanguage, type Language } from './config';
import { useEffect } from 'react';

const runsOnServerSide = typeof window === 'undefined';

// 初始化 i18next
i18next
  .use(initReactI18next)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`./locales/${language}/${namespace}.json`)
    )
  )
  .init({
    supportedLngs: languages,
    fallbackLng: defaultLanguage,
    lng: defaultLanguage,
    fallbackNS: 'common',
    defaultNS: 'common',
    ns: ['common'],
    preload: runsOnServerSide ? languages : [],
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export function useTranslation(lng: Language, ns?: string) {
  const translator = useTranslationOrg(ns);
  const { i18n } = translator;

  // 使用 useEffect 在客户端切换语言
  useEffect(() => {
    if (!runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
      console.log(`切换语言: ${i18n.resolvedLanguage} -> ${lng}`);
      i18n.changeLanguage(lng);
    }
  }, [lng, i18n]);

  return translator;
}
