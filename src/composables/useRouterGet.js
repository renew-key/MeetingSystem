import { computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export function useRouterGet() {
  const router = useRouter();
  const route = useRoute();
  
  // Get the current URL path and split it into parts

 const parts = computed(()=>{
  return route.path.split('/');
 })
 const isLogin = computed(()=>{
  if(parts.value[2] == 'login'){
    return false;
  }else{
    return true;
  }
 })
  // First part - general section (basicData, passageManage, etc.)
  const string1 = computed(() => {
    switch (parts.value[2]) {
      case 'basicData':
        return "基本資料設定";
      case 'passageManage':
        return "客運管理";
      case 'report':
        return "報表管理";
      default:
        return null;
    }
  });

  // Second part - specific section under the main category (ship, routes, etc.)
  const string2 = computed(() => {
    switch (parts.value[3]) {
      case 'user':
        return "使用者設定";
      case 'ship':
        return "船舶設定";
      case 'routs':
        return "航班資料";
      case 'course':
        return "航線資料";
      case 'travelAgency':
        return "旅行社資料";
      case 'basicDataSetting':
        return "基本資料設定";
      case 'courseManage':
        return "航班管理";
      case 'reservationManage':
        return "訂位管理";
      case 'ticketPurchaseTasks':
        return "購票相關作業";
      case 'ticketManagement':
        return "船票管理";
      case 'ticketPayment':
        return "購票收款相關作業";
      case 'salesReport':
        return "售票相關報表";
      default:
        return null;
    }
  });

  // Third part - detailed section (refundSetting, limitTime, etc.)
  const string3 = computed(() => {
    switch (parts.value[4]) {
      case 'refundSetting':
        return "退票設定";
      case 'limitTime':
        return "截止時間設定";
      case 'typeRemain':
        return "船舶類型維護";
      case 'certificateRemain':
        return "船舶證書資料維護";
      case 'dataRemain':
        return "船舶資料維護";
      case 'port':
        return "港口資料維護";
      case 'ticket':
        return "票種資料維護";
      case 'addFee':
        return "航線港口票價維護";
      case 'travelAgencyTypeRemain':
        return "旅行社類別維護";
      case 'travelAgencydataRemain':
        return "旅行社資料維護";
      case 'loginOperation':
        return "票號登入作業";
      case 'ticketComment':
        return "船票備註維護";
      case 'nationRemain':
        return "國籍代碼表維護";
      case 'creatCourse':
        return "航班建立作業";
      case 'courseDataRemain':
        return "航班維護作業";
      case 'dataRemain':
        return "訂位資料維護";
      case 'batchReserve':
        return "旅行社批次保留/候補作業";
      case 'listSearch':
        return "航班訂位名單查詢";
      case 'listStatusSearch':
        return "航班訂位狀況查詢";
      case 'customerListSearch':
        return "旅客訂位資料查詢";
      case 'ticketOrderTasks':
        return "訂位購票作業";
      case 'ticketCutting':
        return "切票購票作業";
      case 'ticketStatusSearch':
        return "船票狀態查詢";
      case 'ticketInvalid':
        return "船票作廢/簽轉作業";
      case 'ticketExchange':
        return "船票換航作業";
      case 'ticketRecycle':
        return "船票搭乘回收作業";
      case 'ticketCertificate':
        return "已搭乘船票狀態變更為開立證明";
      case 'ticketPaymentRemain':
        return "購票證明資料維護";
      case 'advancePayment':
        return "預收款登入作業";
      case 'receiptReversal':
        return "收款沖帳作業";
      case 'refundTicket':
        return "退票作業";
      case 'advancePaymentRefund':
        return "預收款退款作業";
      case 'ticketPaymentChange':
        return "購票證明單號變更作業";
      case 'salesDaliy':
        return "售票日報表";
      case 'travelAgencySales':
        return "旅行社售票統計";
      case 'salesTable':
        return "售票統計表";
      case 'refundTable':
        return "退票統計表";
      case 'invalidTickets':
        return "廢票/簽轉他行統計表";
      case 'ticketPaymentDetail':
        return "購票證明明細";
      default:
        return null;
    }
  });

  // Return the computed properties for use in templates
  return {
    string1,
    string2,
    string3,
    isLogin
  };
}
