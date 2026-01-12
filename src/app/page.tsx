/*
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2026-01-09 11:00:00
 * @LastEditors: 孙林
 * @LastEditTime: 2026-01-09 11:00:00
 * @Description: 根路径重定向到默认语言
 */
import { redirect } from 'next/navigation';
import { defaultLanguage } from '@/i18n/config';

export default function RootPage() {
  redirect(`/${defaultLanguage}`);
}
