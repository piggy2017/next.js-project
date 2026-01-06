/*
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2026-01-05 15:29:00
 * @LastEditors: 孙林
 * @LastEditTime: 2026-01-06 16:44:25
 * @Description:
 */
// module.exports = {
//     content: [ // content 选项用于指定 Tailwind CSS 应该扫描哪些文件以收集类名。
//         "./index.html", // 单文件路径
//         "./src/**/*.{html,js,ts,jsx,tsx}", // 包含多个文件类型的路径
//         "./app/**/*.{js,ts,jsx,tsx}"       // 包含 app 目录下的文件
//     ],  // 这将告诉 Tailwind CSS 扫描 src 和 app 目录下的所有相关文件。
//     theme: {
//         extend: {
//             colors: {
//                 primary: '#ed4864',
//             },
//         }, // 自定义颜色扩展
//     },
//     darkMode:'media',  // 深色模式---根据用户操作系统的设置（通过媒体查询 prefers-color-scheme: dark）自动切换。 (默认)
//     darkMode: 'class', // 深色模式---启用类名暗模式  允许开发者通过在 html 或 body 标签上添加 dark 类手动切换深色模式
//     plugins: [], // 配置插件
// }
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  // theme: {
  //   extend: {
  //     colors: {
  //       primary: "#ed4864",
  //     },
  //   },
  // },
  // darkMode:'media',  // 深色模式---根据用户操作系统的设置（通过媒体查询 prefers-color-scheme: dark）自动切换。 (默认)
  darkMode: "class", // 深色模式---启用类名暗模式  允许开发者通过在 html 或 body 标签上添加 dark 类手动切换深色模式
};

export default config;
