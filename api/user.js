import axios from "axios";
import cookie from 'cookiejs';
import { apiGetRefreshRequest } from "./index.js";
import { useToJumpLogin } from '@/composables/useToJumpLogin';
const { jumpLoginPage } = useToJumpLogin();
const token = cookie.get(TOKEN);

const userRequest = axios.create({
  baseURL:"/kingixa/api/user",
  withCredentials: true,
  headers: {
    'Authorization': `Bearer ${token}` // 將 Token 添加到 Authorization 標頭
  }
})

userRequest.interceptors.response.use(
  async function (response) {
    const originalRequest = response.config;
    
    if (response.data.status == '401' && !originalRequest.isRetry) {
      try {
        // 呼叫刷新 Token API
        const resRequest = await apiGetRefreshRequest();
        // console.log(resRequest);
        if (resRequest.data.status == '200') {
          const newToken = resRequest.data.value;
          cookie.set(TOKEN, newToken, { expires: 1 });

          // 更新原始請求的授權標頭
          originalRequest.headers.Authorization = `Bearer ${newToken}`;

          // 重新發送原始請求並返回結果
          originalRequest.isRetry = true;
          return userRequest(originalRequest);
        } 
        else if (resRequest.data.status == '401') {
          console.error('請求失敗: 使用期限逾期');
          alert('使用期限逾期，請重新登入');
          jumpLoginPage();
          return Promise.reject(new Error('Token 過期，需重新登入'));
        } else {
          originalRequest.isRetry = true;
          throw new Error(resRequest.data.message);
        }
      } catch (error) {
        originalRequest.isRetry = true;
        console.error('請求失敗:', error.message || error);
        return Promise.reject(error);
      }
     }else{
      // 如果 status 不是 401，直接返回回應
      return response;
    }

   
  },
  function (error) {
    // 全局錯誤處理
    return Promise.reject(error);
  }
);

export const postUserRequest = (data)=>userRequest.post("",data);
export const putUserRequest = (data)=>userRequest.put("",data);
export const getUserRequest = ()=>userRequest.get("/all");
export const deleteUserRequest = (id)=>userRequest.delete(`${id}`);

