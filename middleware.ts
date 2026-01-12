/*
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2026-01-09 11:00:00
 * @LastEditors: 孙林
 * @LastEditTime: 2026-01-09 14:42:07
 * @Description: 中间件处理语言路由
 */

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { languages, defaultLanguage } from './src/i18n/config';

export function middleware(request: NextRequest) {
  console.log('middleware',request);
  const pathname = request.nextUrl.pathname;

  // 检查路径是否已经包含语言前缀
  const pathnameHasLocale = languages.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // 如果是根路径,重定向到默认语言
  if (pathname === '/') {
    return NextResponse.redirect(new URL(`/${defaultLanguage}`, request.url));
  }

  // 对于其他路径,添加默认语言前缀
  const newUrl = new URL(`/${defaultLanguage}${pathname}`, request.url);
  newUrl.search = request.nextUrl.search;
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: [
    // 排除以下路径
    '/((?!api|_next/static|_next/image|favicon.ico|test.jpg).*)',
  ],
};
