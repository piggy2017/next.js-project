/*
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2026-01-06 16:10:45
 * @LastEditors: 孙林
 * @LastEditTime: 2026-10-12 18:22:00
 * @Description: 主题切换按钮组；主题名与按钮外观由 theme.ts 统一驱动
 */
"use client"

import { useTheme } from "next-themes"
import { useSyncExternalStore } from "react"
import { THEMES, type Theme } from "./theme"

/* next-themes 官方示例用 useState + useEffect 置 mounted 标志，但该写法会被
   react-hooks/set-state-in-effect 判为「在 effect 内同步 setState，可能引发级联渲染」。
   useSyncExternalStore 是 React 推荐的「是否已在客户端水合」判定方式：
   服务端快照恒为 false、客户端快照恒为 true，语义等价且不触发该规则。 */
const emptySubscribe = () => () => {}

function useHydrated() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  )
}

/* 用 Record<Theme, ...> 而非普通对象：新增主题时 TypeScript 会强制补全两张表，
   避免「THEMES 里加了名字、按钮却漏配」的静默遗漏 */
const THEME_LABEL: Record<Theme, string> = {
  light: "默认(红)",
  yellow: "黄色主题",
  blue: "蓝色主题",
  dark: "暗黑模式",
}

const THEME_BUTTON_CLASS: Record<Theme, string> = {
  light: "px-4 py-2 bg-gray-200 rounded text-black",
  yellow: "px-4 py-2 bg-yellow-400 rounded text-black",
  blue: "px-4 py-2 bg-blue-500 rounded text-white",
  dark: "px-4 py-2 bg-gray-800 rounded text-white",
}

export default function ThemeToggle() {
  /* 用 resolvedTheme 而非 theme：defaultTheme="system" 时 theme 会返回字符串 "system"，
     用户看不到实际生效的是 light 还是 dark */
  const { resolvedTheme, setTheme } = useTheme()
  // 防止水合不匹配错误：服务端无法读取系统偏好与本地存储
  const mounted = useHydrated()

  if (!mounted) return null

  return (
    <div className="flex flex-wrap items-center gap-4 p-4 border rounded-lg bg-bg-base">
      <p className="text-text-base">当前主题: {resolvedTheme}</p>

      {THEMES.map((item) => (
        <button
          key={item}
          type="button"
          className={THEME_BUTTON_CLASS[item]}
          onClick={() => setTheme(item)}
        >
          {THEME_LABEL[item]}
        </button>
      ))}
    </div>
  )
}
