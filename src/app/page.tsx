/*
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2026-01-04 15:35:22
 * @LastEditors: 孙林
 * @LastEditTime: 2026-01-06 18:10:58
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

      <div className="pt-18 text-xl">默认颜色</div>
      <div className="text-primary text-xl dark:text-primary-black">测试自定义颜色</div>

      <div className="pt-18 text-xl" onClick={() => goPage("/news")}>前往新闻列表</div>
      <div className="pt-18 text-xl" onClick={() => goPage("/goods")}>前往商品列表</div>
    </div>
  );
}
