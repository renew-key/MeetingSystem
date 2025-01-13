<script setup>
import { Search } from '@vicons/ionicons5';
import { NAutoComplete, NIcon } from "naive-ui";
const { t } = useI18n()
const selectedValue = ref(null);
const router = useRouter();
const autoCompleteRef = ref(null);
const options = [
  {
    type: "group",
    label: "1.基本資料設定",
    key: "basicData",
    children: [
      // {
      //   label: "A.使用者設定",
      //   value: "/admin/basicData/user"
      // },
      {
        label: "B.船舶設定",
        key: "ship",
        type: "group",
        children: [
          // {
          //   label: "1.船舶類型維護",
          //   value: "/admin/basicData/ship/typeRemain"
          // },
          // {
          //   label: "2.船舶證書資料維護",
          //   value: "/admin/basicData/ship/certificateRemain"
          // },
          {
            label: "3.船舶資料維護",
            value: "/admin/basicData/ship/dataRemain"
          },
        ]
      },
      {
        label: "C.航線資料",
        key: "course",
        type: "group",
        children: [
          {
            label: "1.港口資料維護",
            value: "/admin/basicData/course/port"
          },
          {
            label: "2.票種資料維護",
            value: "/admin/basicData/course/ticket"
          },
          {
            label: "3.航線港口票價維護",
            value: "/admin/basicData/course/addFee"
          },
        ]
      },
      {
        label: "D.航班資料",
        key: "routs",
        type: "group",
        children: [
          {
            label: "1.退票設定",
            value: "/admin/basicData/routs/refundSetting"
          },
          {
            label: "2.截止時間設定",
            value: "/admin/basicData/routs/limitTime"
          },
        ]
      },
      // {
      //   label: "E.旅行社資料",
      //   key: "travelAgency",
      //   type: "group",
      //   children: [
      //     {
      //       label: "1.旅行社類別維護",
      //       value: "/admin/basicData/travelAgency/travelAgencyTypeRemain"
      //     },
      //     {
      //       label: "2.旅行社資料維護",
      //       value: "/admin/basicData/travelAgency/travelAgencydataRemain"
      //     },

      //   ]
      // },
    ]
  },
  {
    type: "group",
    label: "2.客運管理",
    key: "passageManage",
    children: [
      {
        label: "A.基本資料設定",
        key: "basicDataSetting",
        type: "group",
        children: [
          {
            label: "1.票號登入作業",
            value: "/admin/passageManage/basicDataSetting/loginOperation"
          },
          {
            label: "2.船票備註維護",
            value: "/admin/passageManage/basicDataSetting/ticketComment"
          },
          {
            label: "3.國籍代碼表維護",
            value: "/admin/passageManage/basicDataSetting/nationRemain"
          },
        ]
      },
      {
        label: "B.航班管理",
        key: "courseManage",
        type: "group",
        children: [
          {
            label: "1.航班建立作業",
            value: "/admin/passageManage/courseManage/creatCourse"
          },
          {
            label: "2.航班維護作業",
            value: "/admin/passageManage/courseManage/courseDataRemain"
          },
        ]
      },
      {
        label: "C.訂位管理",
        key: "reservationManage",
        type: "group",
        children: [
          {
            label: "1.訂位資料維護",
            value: "/admin/passageManage/reservationManage/dataRemain"
          },
          {
            label: "2.旅行社批次保留/候補作業",
            value: "/admin/passageManage/reservationManage/batchReserve"
          },
          {
            label: "A.航班訂位名單查詢",
            value: "/admin/passageManage/reservationManage/listSearch"
          },
          {
            label: "B.航班訂位狀況查詢",
            value: "/admin/passageManage/reservationManage/listStatusSearch"
          },
          {
            label: "C.旅客訂位資料查詢",
            value: "/admin/passageManage/reservationManage/customerListSearch"
          }
        ]
      },
      {
        label: "D.購票相關作業",
        key: "ticketPurchaseTasks",
        type: "group",
        children: [
          {
            label: "1.訂位購票作業",
            value: "/admin/passageManage/ticketPurchaseTasks/ticketOrderTasks"
          },
          {
            label: "2.切票購票作業",
            value: "/admin/passageManage/ticketPurchaseTasks/ticketCutting"
          }
        ]
      },
      {
        label: "G.船票管理",
        key: "ticketManagement",
        type: "group",
        children: [
          {
            label: "1.船票狀態查詢",
            value: "/admin/passageManage/ticketManagement/ticketStatusSearch"
          },
          {
            label: "2.船票作廢/簽轉作業",
            value: "/admin/passageManage/ticketManagement/ticketInvalid"
          },
          {
            label: "3.船票換航作業",
            value: "/admin/passageManage/ticketManagement/ticketExchange"
          },
          {
            label: "4.船票搭乘回收作業",
            value: "/admin/passageManage/ticketManagement/ticketRecycle"
          },
          {
            label: "5.已搭乘船票狀態變更為開立證明",
            value: "/admin/passageManage/ticketManagement/ticketCertificate"
          }
        ]
      },
      {
        label: "H.購票收款相關作業",
        key: "ticketPayment",
        type: "group",
        children: [
          {
            label: "1.購票證明資料維護",
            value: "/admin/passageManage/ticketPayment/ticketPaymentRemain"
          },
          {
            label: "2.預收款登入作業",
            value: "/admin/passageManage/ticketPayment/advancePayment"
          },
          {
            label: "3.收款沖帳作業",
            value: "/admin/passageManage/ticketPayment/receiptReversal"
          },
          {
            label: "4.退票作業",
            value: "/admin/passageManage/ticketPayment/refundTicket"
          },
          {
            label: "5.預收款退款作業",
            value: "/admin/passageManage/ticketPayment/advancePaymentRefund"
          },
          {
            label: "Z.購票證明單號變更作業",
            value: "/admin/passageManage/ticketPayment/ticketPaymentChange"
          }
        ]
      },
    ]
  },
  {
    type: "group",
    label: "3.報表管理",
    key: "report",
    children: [
      {
        label: "C.售票相關報表",
        key: "salesReport",
        type: "group",
        children: [
          {
            label: "1.售票日報表",
            value: "/admin/report/salesReport/salesDaliy"
          },
          {
            label: "2.旅行社售票統計",
            value: "/admin/report/salesReport/travelAgencySales"
          },
          {
            label: "3.售票統計表",
            value: "/admin/report/salesReport/salesTable"
          },
          {
            label: "4.退票統計表",
            value: "/admin/report/salesReport/refundTable"
          },
          {
            label: "5.做廢票/簽轉他行統計表",
            value: "/admin/report/salesReport/invalidTickets"
          },
          {
            label: "6.購票證明明細",
            value: "/admin/report/salesReport/ticketPaymentDetail"
          },
        ]
      }
    ]
  },
];

// 將嵌套結構展平成平面結構，過濾掉不可選的 group
const flattenOptions = (options) => {
  const result = [];
  options.forEach((option) => {
    if (option.children) {
      result.push(...flattenOptions(option.children)); // 遞迴展平
    } else if (!option.type || option.type !== "group") {
      result.push(option); // 添加最終的子節點
    }
  });
  return result;
};

// 預先展平所有選項
const flatOptions = flattenOptions(options);

// 計算過濾後的選項
const filteredOptions = computed(() => {
  if (selectedValue.value && typeof selectedValue.value === "string") {
    return flatOptions.filter((option) =>
      option.label?.toLowerCase().includes(selectedValue.value.toLowerCase())
    );
  } else {
    return flatOptions;
  }
});

// 处理 Enter 键事件
const handleKeydown = (event) => {
  if (event.key === "Enter") {
    const firstOption = filteredOptions.value[0];
    if (firstOption) {
      router.replace(firstOption.value)
        .then(() => {
          // 清空選項
          selectedValue.value = null;
          autoCompleteRef.value?.clear?.();
        })
        .catch((err) => {
          console.error("Failed to navigate:", err);
        });
    }
  }
};


// 处理选项选择事件
const handleSelect = (value) => {
  if (value) {
    router.replace(value)
      .then(() => {
        // 清空選項
        selectedValue.value = null;
        autoCompleteRef.value?.clear?.();
      })
      .catch((err) => {
        console.error("Failed to navigate:", err);
      });
  }
};
</script>
<template>

  <n-auto-complete
    ref="autoCompleteRef"
    class="text_position"
    v-model:value="selectedValue"
    :options="filteredOptions"
    :placeholder="t('search')"
    clearable
    @keydown.native="handleKeydown"
    @select="handleSelect"
  >
    <template #suffix>
      <n-icon :component="Search" />
    </template>
  </n-auto-complete>

</template>
<style scoped>
.text_position {
  text-align: left;
}
</style>