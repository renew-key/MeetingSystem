<script setup>
import { RouterLink } from "vue-router";
import {
  NIcon, NSpace, NMenu, useMessage
} from "naive-ui";

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}
const message = useMessage();

const menuOptions = [
  {
    label: () => h(RouterLink, { to: "/admin/activeData" }, { default: () => "活動數據" }),
    key: "activeData"
  },
  {
    label: () => h(RouterLink, { to: "/admin/userSetting" }, { default: () => "用戶管理" }),
    key: "userSetting"
  },
  {
    label: "通知與公告",
    key: "noticeManage",
    children: [
      {
        label: () => h(RouterLink, { to: "/admin/noticeManage/proclamationSetting" }, { default: () => "公告設定" }),
        key: "proclamationSetting"
      },
      {
        label: "通知設定",
        key: "noticeSetting",
        children: [
          {
            label: () => h(RouterLink, { to: "/admin/noticeManage/noticeSetting/noticeManagement" }, { default: () => "通知模板管理" }),
            key: "noticeManagement"
          },
          {
            label: () => h(RouterLink, { to: "/admin/noticeManage/noticeSetting/noticeSend" }, { default: () => "發送通知" }),
            key: "noticeSend"
          },
        ]
      }
    ]
  },
  {
    label: "會員管理",
    key: "memberManage",
    children: [
      {
        label: () => h(RouterLink, { to: "/admin/memberManage/menthodSetting" }, { default: () => "方案設置" }),
        key: "menthodSetting"
      },
      {
        label: () => h(RouterLink, { to: "/admin/memberManage/pointsManage" }, { default: () => "點數管理" }),
        key: "pointsManage"
      },
      {
        label: () => h(RouterLink, { to: "/admin/memberManage/financeManage" }, { default: () => "帳務管理" }),
        key: "financeManage"
      },
    ]
  },
  {
    label: () => h(RouterLink, { to: "/admin/planeRecode" }, { default: () => "平台使用紀錄" }),
    key: "planeRecode"
  },
  {
    label: () => h(RouterLink, { to: "/admin/ticketManagement" }, { default: () => "支援技術查詢" }),
    key: "ticketManagement"
  },
];
</script>
<template>
  <n-menu
    :inverted="true"
    :options="menuOptions"
  />
</template>
<style scoped></style>