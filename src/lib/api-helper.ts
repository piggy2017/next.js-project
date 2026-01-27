/*
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2026-01-27 16:50:00
 * @LastEditors: 孙林
 * @LastEditTime: 2026-01-27 16:52:00
 * @Description: API 调用简化包装器
 */

import { postApiV1Login } from '@/lib/api/sdk.gen';
import type { HandlerLogin } from '@/lib/api/types.gen';

/**
 * 简化的登录接口
 * 直接传递登录参数，无需包装 body
 * 
 * @example
 * const result = await login({
 *   username: 'test',
 *   password: 'test',
 *   code: '',
 *   uuid: ''
 * });
 */
export const login = async (params: HandlerLogin) => {
  return postApiV1Login({
    body: params
  });
};

// ==========================================
// 使用说明：
// ==========================================
// 1. 对于 POST/PUT 请求，参数通常在 body 中：
//    export const createUser = async (params: CreateUserRequest) => {
//      return postApiV1User({ body: params });
//    };
//
// 2. 对于 GET 请求，参数通常在 query 中：
//    export const getUserList = async (params: GetUserListQuery) => {
//      return getApiV1Users({ query: params });
//    };
//
// 3. 对于带路径参数的请求：
//    export const getUserById = async (userId: string) => {
//      return getApiV1UserById({ path: { userId } });
//    };
//
// 4. 复杂情况（同时有 path、query、body）：
//    export const updateUser = async (userId: string, data: UpdateUserRequest) => {
//      return putApiV1UserById({
//        path: { userId },
//        body: data
//      });
//    };
// ==========================================
