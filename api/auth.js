import axios from "axios";
import cookie from 'cookiejs';

const token = cookie.get(REFRESH_TOKE);
const authRequest = axios.create({
  baseURL:"/kingixa/api/auth",
  withCredentials: true,
  headers: {
    'Authorization': `Bearer ${token}` // 將 Token 添加到 Authorization 標頭
  }
})

const loginRequest = axios.create({
  baseURL:"/kingixa/api"
})

export const postLoginRequest = (data)=>loginRequest.post("/login",data);
export const getRefreshRequest = ()=>authRequest.get("/refresh");