/*
 * @Description: 主题的唯一事实来源（Single Source of Truth）
 *
 * 注意：本文件不得出现 "use client"，它需要同时被
 * - 服务端组件 `src/app/layout.tsx`
 * - 客户端组件 `src/app/components/ThemeToggle.tsx`
 * 安全导入。若把常量放在 "use client" 文件里，服务端组件读取其导出会拿到
 * 客户端引用（client reference）而非真实数据。
 *
 * 新增主题时只需两步：
 * 1. 在 globals.css 中补一段 `[data-theme="xxx"] { --theme-*: ... }`
 * 2. 在下面的 THEMES 里加名字 —— TypeScript 会立刻提示补全其余映射表
 */

/** 全部可用主题；`as const` 使其成为字面量元组，供 Theme 类型派生 */
export const THEMES = ["light", "dark", "yellow", "blue"] as const;

/** 由 THEMES 派生的主题名联合类型，setTheme() 由此获得编译期校验 */
export type Theme = (typeof THEMES)[number];

/** 未指定过主题时的默认值，交给 next-themes 解析系统偏好 */
export const DEFAULT_THEME = "system";
