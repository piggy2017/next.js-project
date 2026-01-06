/*
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2026-01-06 16:57:05
 * @LastEditors: 孙林
 * @LastEditTime: 2026-01-06 17:05:03
 * @Description: 
 */
interface PageProps {
  searchParams: Promise<{
    id?: string
  }>;
}
export default async function NewsDetailPage({ searchParams }: PageProps) {
  const { id } = await searchParams;
  console.log('news detail id:', id)
  
  return (
    <div>
      <h1>新闻详情页</h1>
      <p>参数传递---ID: {id}</p>
    </div>
  )
}