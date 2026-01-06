/*
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2026-01-04 15:35:22
 * @LastEditors: 孙林
 * @LastEditTime: 2026-01-06 17:12:09
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
      <div className=" pt-18  text-xl">默认颜色</div>
      <div className="text-primary  text-xl dark:text-primary-black">测试自定义颜色</div>

      <div className=" pt-18  text-xl" onClick={() => goPage("/news")}>前往新闻列表</div>
      <div className=" pt-18  text-xl" onClick={() => goPage("/goods")}>前往商品列表</div>
    </div>
  );
}
