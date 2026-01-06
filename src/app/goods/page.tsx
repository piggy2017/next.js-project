'use client';
import React from 'react'

/*
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2026-01-06 11:42:07
 * @LastEditors: 孙林
 * @LastEditTime: 2026-01-06 17:12:02
 * @Description: 
 */
import Link from "next/link"

export default function GoodsPage() {
    const goodsList = [
        {
            id: 1,
            title: '商品1',
            content: '这是商品1的内容'
        },
        {
            id: 2,
            title: '商品2',
            content: '这是商品2的内容'
        }
    ]
    return (
        <div>
            <h1>商品列表</h1>
            {goodsList.map((item) => (
                <Link key={item.id} href={`/goods/${item.id}`} className="block mb-4">
                    <h2>{item.title}</h2>
                    <p>{item.content}</p>
                </Link>
            ))}
        </div>
    )
}