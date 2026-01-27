/*
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2026-01-27 16:13:51
 * @LastEditors: 孙林
 * @LastEditTime: 2026-01-27 16:14:07
 * @Description: 
 */
// src/lib/http.ts
import { client } from '@/lib/api/client.gen';

// 1. 配置基础参数
client.setConfig({
  baseUrl: process.env.NEXT_PUBLIC_API_URL || '/api',
});

// 2. 配置拦截器
// @hey-api 使用 Fetch API，不是 Axios
// 请求拦截器：添加 Authorization header
client.interceptors.request.use((request, options) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) {
      request.headers.set('Authorization', `Bearer ${token}`);
    }
  }
  return request;
});

// 响应拦截器：处理错误
client.interceptors.response.use((response, request, options) => {
  // 统一处理错误，例如 401 跳转登录
  if (response.status === 401) {
    console.log('登录过期');
  }
  return response;
});

// 导出配置好的 client
export { client };