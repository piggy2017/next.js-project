/*
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2026-01-06 13:43:17
 * @LastEditors: 孙林
 * @LastEditTime: 2026-01-06 17:15:27
 * @Description: 
 */

// 方案1：客户端渲染模式  使用useParams
'use client'
import { useParams } from 'next/navigation';
export default function GoodsDetailPage() {
  const params = useParams();
  console.log('goods params.id:', params.id);
  
  return (
    <div>
      <h1>商品详情</h1>
      <p>ID: {params.id}</p>
    </div>
  )
}

// 方案2：服务端渲染模式  使用params
// interface PageProps {
//   params: Promise<{
//     id: string;
//   }>
// }
// export default async function GoodsDetailPage({ params }: PageProps) {
//   const paramsValue = await params;
//   console.log('goods params.id:', paramsValue.id);

//   return (
//     <div>
//       <h1>商品详情</h1>
//       <p>ID: {paramsValue.id}</p>
//     </div>
//   )
// }