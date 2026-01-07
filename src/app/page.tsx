/*
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2026-01-04 15:35:22
 * @LastEditors: 孙林
 * @LastEditTime: 2026-01-07 14:56:23
 * @Description: 
 */
'use client'
import Image from "next/image";
import ThemeToggle from "./components/ThemeToggle";

import { useRouter } from 'next/navigation';


export default function Home() {
  const router = useRouter();
  const goPage = (path: string) => {
    router.push(path);
  };
  return (
    <div className="min-h-screen  bg-zinc-50 font-sans dark:bg-brand-500">
      <ThemeToggle />
      <div className="h-2/3 bg-bg-base p-10 transition-colors duration-300">

        {/* text-primary 会根据主题变成 红色、黄色 或 蓝色 */}
        <h1 className="text-4xl font-bold text-primary mb-4">
          多主题切换演示
        </h1>

        <p className="text-text-base mb-8">
          这段文字的颜色也会随主题改变。
        </p>

        {/* 这是一个永远保持固定的按钮，不受主题影响（如果你直接写硬编码颜色） */}
        <div className="bg-primary text-white p-4 rounded shadow-lg w-fit">
          我是 Primary 颜色的方块
        </div>
      </div>

      <div className="pt-4 text-xl">默认颜色</div>
      <div className="text-primary text-xl dark:text-primary-black">测试自定义颜色</div>

      <div className="pt-4 text-xl cursor-pointer" onClick={() => goPage("/news")}>前往新闻列表</div>
      <div className="pt-4 text-xl cursor-pointer" onClick={() => goPage("/goods")}>前往商品列表</div>

      <p className="text-xl mt-4 text-red-500">Tailwind通过使用 @apply、@layer 和 variants 等功能，你可以轻松创建可复用的样式，减少代码重复，提高开发效率和可维护性</p>
      <ul >
        <li className="groupClass">@apply：将常用的工具类组合成一个自定义类，减少重复代码。</li>
        <li className="groupClass">@layer：定义样式层级，将不同的样式组合组织起来，便于管理。</li>
        <li className="groupClass">variants：扩展工具类，使得样式可以根据状态（如响应式、悬停、聚焦等）变化。</li>
      </ul>

      <div className="pl-14">
        <Image className="avatar" src="/test.jpg" alt="User 1" width={50} height={50} />
        <button className="button">点击我</button>
      </div>
    </div>
  );
}
