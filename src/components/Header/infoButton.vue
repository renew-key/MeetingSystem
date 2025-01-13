<script setup>
import { NButton, NDropdown, NIcon } from 'naive-ui';
import { RouterLink } from "vue-router";
import {
  LogOutOutline as LogoutIcon,
  PersonCircleOutline as UserIcon,
  Settings as setting
} from "@vicons/ionicons5";
import { useToJumpLogin } from '@/composables/useToJumpLogin';
const { t } = useI18n()
const { jumpLoginPage } = useToJumpLogin();
const iconSize = ref(window.innerWidth > 600 ? 40 : 25);

window.addEventListener('resize', () => {
  iconSize.value = window.innerWidth > 600 ? 40 : 20;
});
const renderIcon = (icon) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    });
  };
}
const options = [
  {
    label: () =>
      h(
        RouterLink,
        { to: "/admin/permission" },
        { default: () => t('permissionSetting') }
      ),
    key: "right",
    icon: renderIcon(setting)
  },
  {
    label: () =>
      h(
        RouterLink,
        { to: "/admin/profile" },
        { default: () => t('Profile') }
      ),
    key: "profile",
    icon: renderIcon(UserIcon)
  },
  {
    label: () =>
      h('span', {}, t('logout')),  // 修正這裡，使用 h 函數包裝 'logout'
    key: "logout",
    icon: renderIcon(LogoutIcon)
  }
];

const handleSelect = (key) => {
  if (key === 'logout') {
    jumpLoginPage();
  }

}

</script>
<template>
  <n-dropdown
    :options="options"
    @select="handleSelect"
  >
    <n-button
      text
      tag="a"
      type="primary"
    >
      <n-icon :size="iconSize">
        <UserIcon />
      </n-icon>
    </n-button>
  </n-dropdown>

</template>

<style scoped>
a {
  margin-left: 10px;
  position: relative;
  text-align: center;
  text-decoration: none;
  color: var(--n-item-text-color-horizontal);
  transform: scale(1, 1);
}

a:hover {
  transform: scale(1.2, 1.2);
}

@media (max-width: 600px) {
  .font_size {
    font-size: 16px;
  }
}
</style>
