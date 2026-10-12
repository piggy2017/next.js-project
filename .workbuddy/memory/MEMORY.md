# 项目长期约定 — my-app

## 项目定位
Next.js App Router 多主题演示项目。主要分支：`feature/dev-theme`（主题）、另有含 i18n 语言路由的版本（`[lang]` 动态段 + `middleware.ts`）。两条线是**分开的分支**，不要混用。

## 主题系统的既定约定（2026-10-12 确立）
1. **驱动方式：属性，不是类。** `next-themes` 配置为 `attribute="data-theme"`，它只写 `<html data-theme="...">`、**从不添加 `.dark` 类**。因此 `globals.css` 中的 `@custom-variant dark` 必须写成：
   ```css
   @custom-variant dark (&:where([data-theme="dark"], [data-theme="dark"] *));
   ```
   任何把它写回 `(&:where(.dark, .dark *))` 的改动都会让全部 `dark:` 工具类静默失效。
2. **`body` 用的是 `--background` / `--foreground`，不是 `--theme-*`。** 新增暗色类主题时，必须同时覆写这四个变量，否则页面底色不跟随主题。
3. **主题唯一事实来源：`src/app/components/theme.ts` 的 `THEMES` + `Theme` 类型。** 新增主题的完整步骤：
   - 在 `globals.css` 补 `[data-theme="xxx"] { --theme-*; --background; --foreground }`（TS 无法覆盖这一层）
   - 在 `THEMES` 加名字，`ThemeToggle` 的 `Record<Theme, ...>` 两张映射表会由 `tsc` 强制补全
   - 不要在该文件加 `"use client"`：它需要被服务端组件 `layout.tsx` 导入
4. **颜色一律用语义令牌**（`text-primary` / `bg-bg-base` / `text-text-base`），不要引入无来源的色阶类（如 `bg-brand-500`）。`@theme` 中只注册了这三个语义色 + `--spacing-18`。
5. **Tailwind CSS v4 为 CSS-first 配置。** 项目已删除 `tailwind.config.ts`；如需 JS 配置必须用 `@config` 指令显式引入，否则该文件不会被加载（改了也不生效，属于静默陷阱）。

## 已知的非缺陷陷阱
- `next-themes` 的 `mounted` 守卫若用 `useState + useEffect` 置位，会被 `react-hooks/set-state-in-effect` 判为错误（`eslint --max-warnings=0` 会失败）。本项目已改用 `useSyncExternalStore` 实现 `useHydrated()`。新增客户端组件沿用该写法。

## 本机环境
- `npm run build` 会告警「检测到多个 lockfile」，因为 `/Users/sunlin/package-lock.json` 与项目内 lockfile 并存，Next 误判 workspace root。不影响构建，如需静音可在 `next.config.ts` 设 `turbopack.root`。
