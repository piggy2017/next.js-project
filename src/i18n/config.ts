/*
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2026-01-09 11:00:00
 * @LastEditors: 孙林
 * @LastEditTime: 2026-01-09 11:00:00
 * @Description: i18n 配置文件
 */

export const languages = ['zh-CN', 'en-US', 'zh-HK'] as const;
export type Language = typeof languages[number];

export const defaultLanguage: Language = 'zh-CN';

export const languageNames: Record<Language, string> = {
  'zh-CN': '简体中文',
  'en-US': 'English',
  'zh-HK': '繁體中文'
};
