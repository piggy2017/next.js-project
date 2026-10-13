import ThemeProvider from "./components/theme-context"
import { THEMES, DEFAULT_THEME } from "./components/theme"
import "./globals.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning的作用是防止在服务端渲染时，客户端和服务端渲染的内容不一致导致的错误
    <html lang="zh" suppressHydrationWarning>
      <body>
        {/* attribute="data-theme" 是关键，它对应我们在 CSS 中写的 [data-theme="..."] 选择器 */}
        <ThemeProvider
          attribute="data-theme"
          defaultTheme={DEFAULT_THEME}
          // 不跟随系统的 dark/light 模式切换，而是始终使用用户上次选择的主题
          enableSystem
          // 主题名单一来源在 components/theme.ts，展开后满足 next-themes 的 string[] 签名
          themes={[...THEMES]}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
