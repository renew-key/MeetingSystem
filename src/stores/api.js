import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import cookie from 'cookiejs';
import { apiPostLoginRequest } from "../../api";
export const useApiStore = defineStore('api', () => {
  const successMsg = ref({});
  const errorMsg = ref({});
  const responseData = ref({});
  const isPending = ref({});
  const timeout = 1000;
  isPending.value.postLoginRequest = true

  const handleApiRequest = async (apiRequestFn, method = 'GET', data = null, key) => {
    isPending.value[key] = true;
    successMsg.value[key] = null;
    errorMsg.value[key] = null;
    
    try {
      let res;
      // 根據 method 處理不同的 HTTP 請求
      switch (method) {
        case 'POST':
          res = await apiRequestFn(data);
          break;
        case 'PUT':
          res = await apiRequestFn(data);
          break;
        case 'DELETE':
          res = await apiRequestFn(data);
          break;
        default: // GET 請求
          res = await apiRequestFn();
          break;
      }

        if (res.data.status == '200') {
          successMsg.value[key] = res.data.message;
          responseData.value[key] = res.data.value;
        } else {
          errorMsg.value[key] = res.data.message;
        }
        isPending.value[key] = false;
    

    } catch (error) {
      console.error(error);
      errorMsg.value[key] = error.response?.data || error.message;
      isPending.value[key] = false;
      return error;
    }
  };

  //login
  const postLoginRequest = async (data) => {
    await handleApiRequest(apiPostLoginRequest, 'POST', data, 'postLoginRequest');
    cookie.set(TOKEN, responseData.value.postLoginRequest.token, { expires: 1 });
    cookie.set(REFRESH_TOKE, responseData.value.postLoginRequest.refreshToken, { expires: 30 });
    cookie.set('user', responseData.value.postLoginRequest.user, { expires: 30 });
  };



  //refund
  const putRefundRangeRequest = async(data) => {
    await handleApiRequest(apiPutRefundRangeRequest, 'PUT', data, 'putRefundRangeRequest');
  };

  const postRefundRangeRequest = async(data) => {
    await handleApiRequest(apiPostRefundRangeRequest, 'POST', data, 'postRefundRangeRequest');
  };

  const deleteRefundRangeRequest = async(id) => {
    await handleApiRequest(apiDeleteRefundRangeRequest, 'DELETE', id, 'deleteRefundRangeRequest');
  };

  const getRefundRangeRequest = async() => {
    await handleApiRequest(apiGetRefundRangeRequest, 'GET', null,'getRefundRangeRequest');
  };


  //course
  const postCourseRequest = async (data) => {
    await handleApiRequest(apiPostCourseRequest, 'POST', data, 'postCourseRequest');
  };


  //config
  const getConfigOrderRequest = async () => {
    await handleApiRequest(apiGetConfigOrderRequest, 'GET', null,'getConfigOrderRequest');
  };

  const getConfigRefundRequest = async () => {
    await handleApiRequest( apiGetConfigRefundRequest, 'GET', null,'getConfigRefundRequest');
  };
  
  const getConfigAllRequest = async () => {
    await handleApiRequest(apiGetConfigAllRequest, 'GET', null, 'getConfigAllRequest');
  };

  const putConfigOrderRequest = async (data) => {
    await handleApiRequest(apiPutConfigOrderRequest, 'PUT', data,'putConfigOrderRequest');
  };

  const putConfigRefundRequest = async (data) => {
    await handleApiRequest( apiPutConfigRefundRequest, 'PUT', data,'putConfigRefundRequest');
  };

  //user
  const postUserRequest = async (data) => {
    await handleApiRequest(apiPostUserRequest, 'POST', data, 'postUserRequest');
  };

  const putUserRequest = async (data) => {
    // console.log(data)
    await handleApiRequest( apiPutUserRequest, 'PUT', data,'putUserRequest');
  };

  const getUserRequest = async () => {
    await handleApiRequest(apiGetUserRequest, 'GET', null, 'getUserRequest');
  };

  const deleteUserRequest = async(id) => {
    // console.log(id)
    await handleApiRequest(apiDeleteUserRequest, 'DELETE', id, 'deleteUserRequest');
  };

  //port
  const postPortRequest = async (data) => {
    await handleApiRequest(apiPostPortRequest, 'POST', data, 'postPortRequest');
  };

  const putPortRequest = async (data) => {
    // console.log(data)
    await handleApiRequest(apiPutPortRequest, 'PUT', data,'putPortRequest');
  };

  const getPortRequest = async () => {
    await handleApiRequest(apiGetPortRequest, 'GET', null, 'getPortRequest');
  };

  const deletePortRequest = async(id) => {
    // console.log(id)
    await handleApiRequest(apiDeletePortRequest, 'DELETE', id, 'deletePortRequest');
  };

  //ship
  const getShipRequest = async () => {
    await handleApiRequest(apiGetShipRequest, 'GET', null, 'getShipRequest');
  };



  return { 
    successMsg,
    errorMsg,
    responseData,
    isPending,
    postLoginRequest,
    postCourseRequest,
    postRefundRangeRequest,
    postUserRequest,
    postPortRequest,
    getUserRequest,
    getRefundRangeRequest,
    getConfigAllRequest,
    getConfigOrderRequest,
    getConfigRefundRequest,
    getPortRequest,
    getShipRequest,
    putRefundRangeRequest,
    putConfigOrderRequest ,
    putConfigRefundRequest,
    putPortRequest,
    putUserRequest,
    deleteRefundRangeRequest,
    deleteUserRequest,
    deletePortRequest,
    
  }
})
