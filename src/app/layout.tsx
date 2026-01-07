import ThemeProvider from "./components/theme-context"
import "./globals.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning的作用是防止在服务端渲染时，客户端和服务端渲染的内容不一致导致的错误
    <html lang="zh" suppressHydrationWarning>
      <body>
        {/* attribute="data-theme" 是关键，它对应我们在 CSS 中写的 [data-theme="..."] 选择器 */}
        <ThemeProvider 
          attribute="data-theme" 
          defaultTheme="system" 
          enableSystem
          themes={['light', 'dark', 'yellow', 'blue']} // 在这里注册你的主题名
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
