/*
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2026-01-27 16:05:07
 * @LastEditors: 孙林
 * @LastEditTime: 2026-01-27 16:49:01
 * @Description: 
 */
import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  // 1. 这里填入 Apifox 的 OpenAPI URL
  input: 'http://127.0.0.1:4523/export/openapi/3?version=3.0',
  // 2. 指定生成代码的输出目录 (通常放在 src/api 或 src/client)
  output: 'src/lib/api',
  // 3. 选择使用的 HTTP 客户端 (Next.js 推荐 fetch)
  client: '@hey-api/client-fetch',
  // 4. 使用 'data' 响应风格，简化 API 调用
  types: {
    dates: false,
  },
  // 5. 启用更扁平的参数结构
  services: {
    asClass: false,
  },
});