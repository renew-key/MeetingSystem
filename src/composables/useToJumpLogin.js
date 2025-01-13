

import cookie from 'cookiejs';
export function useToJumpLogin() {
  const checkLogin = ()=>{
      if (cookie?.get(REFRESH_TOKE)) {
        window.location.replace("/admin/");
      } else {
        cookie.remove(TOKEN)
        cookie.remove(REFRESH_TOKE)
        cookie.remove('user')
      }
  }
  const jumpLoginPage =()=>{
    window.location.replace("/admin/login");
    cookie.remove(TOKEN)
    cookie.remove(REFRESH_TOKE)
    cookie.remove('user')
  }
  const jumpIndex = ()=>{
    window.location.replace("/admin/");
  }
  return {
    checkLogin,
    jumpLoginPage,
    jumpIndex
  };
}
