/*
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2026-01-06 16:09:52
 * @LastEditors: 孙林
 * @LastEditTime: 2026-01-06 18:00:03
 * @Description: 
 */
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export default function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
