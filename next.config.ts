import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // 明确指定项目根目录，避免 Next.js 错误推断
  basePath: '',
};

export default nextConfig;
