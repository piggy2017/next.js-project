/*
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2026-01-06 16:56:52
 * @LastEditors: 孙林
 * @LastEditTime: 2026-01-06 17:28:49
 * @Description: 
 */
'use client'
import Link from "next/link"
import { useRouter } from 'next/navigation';

export default function News() {
    const newsList = [
        {
            id: 1,
            title: "新闻标题1",
            content: "新闻内容1",
            date: "2026-01-06",
        },
        {
            id: 2,
            title: "新闻标题2",
            content: "新闻内容2",
            date: "2026-01-06",
        },
    ];
    const router = useRouter();
    const goPage = (id: number) => {
        router.push(`/news/detail?id=${id}`)
    };
    return (
        <div className="">
            <div className=" pt-18 font-bold text-xl">新闻列表</div>
            {newsList.map((item) => (
                // 方法一
                // <div key={item.id}  className="pt-4" onClick={() => goPage(item.id)}>
                //   <div className="font-bold text-lg">{item.title}</div>
                //   <div className="text-sm text-gray-500">{item.date}</div>
                //   <div className="mt-2">{item.content}</div>
                // </div>

                // 方法二
                <Link key={item.id} href={`/news/detail?id=${item.id}`} className="pt-4" onClick={() => goPage(item.id)}>
                    <div className="font-bold text-lg">{item.title}</div>
                    <div className="text-sm text-gray-500">{item.date}</div>
                    <div className="mt-2">{item.content}</div>
                </Link>
            ))}
        </div>
    );
}