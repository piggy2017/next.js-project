/*
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2026-01-06 16:10:45
 * @LastEditors: 孙林
 * @LastEditTime: 2026-01-06 18:04:37
 * @Description: 
 */
"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // 防止水合不匹配错误
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex gap-4 p-4 border rounded-lg bg-bg-base">
      <p className="text-text-base mb-2">当前主题: {theme}</p>
      
      <button 
        className="px-4 py-2 bg-gray-200 rounded text-black"
        onClick={() => setTheme('light')}
      >
        默认(红)
      </button>

      <button 
        className="px-4 py-2 bg-yellow-400 rounded text-black"
        onClick={() => setTheme('yellow')}
      >
        黄色主题
      </button>

      <button 
        className="px-4 py-2 bg-blue-500 rounded text-white"
        onClick={() => setTheme('blue')}
      >
        蓝色主题
      </button>
      
      <button 
        className="px-4 py-2 bg-gray-800 rounded text-white"
        onClick={() => setTheme('dark')}
      >
        暗黑模式
      </button>
    </div>
  )
}
