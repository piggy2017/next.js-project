/*
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2026-01-06 16:10:45
 * @LastEditors: 孙林
 * @LastEditTime: 2026-01-09 11:00:00
 * @Description: 
 */
"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { useTranslation } from '@/i18n/client'
import { type Language } from '@/i18n/config'

export default function ThemeToggle({ lang }: { lang: Language }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { t } = useTranslation(lang)

  // 防止水合不匹配错误
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex gap-4 p-4 border rounded-lg bg-bg-base">
      <p className="text-text-base mb-2">{t('theme.current')}: {theme}</p>
      
      <button 
        className="px-4 py-2 bg-gray-200 rounded text-black"
        onClick={() => setTheme('light')}
      >
        {t('theme.light')}
      </button>

      <button 
        className="px-4 py-2 bg-yellow-400 rounded text-black"
        onClick={() => setTheme('yellow')}
      >
        {t('theme.yellow')}
      </button>

      <button 
        className="px-4 py-2 bg-blue-500 rounded text-white"
        onClick={() => setTheme('blue')}
      >
        {t('theme.blue')}
      </button>
      
      <button 
        className="px-4 py-2 bg-gray-800 rounded text-white"
        onClick={() => setTheme('dark')}
      >
        {t('theme.dark')}
      </button>
    </div>
  )
}
