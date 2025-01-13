<script setup>
import {
  NIcon, NSpace, NLayout, NLayoutHeader, NMenu, NLayoutSider, NLayoutFooter, darkTheme, NBackTop, NNotificationProvider, NLoadingBarProvider, NConfigProvider, NDialogProvider, NModalProvider, zhTW, dateZhTW, enUS, dateEnUS, NMessageProvider, NSwitch, NLayoutContent, NScrollbar, NBreadcrumb, NBreadcrumbItem,
} from "naive-ui";
import { useRouterGet } from '@/composables/useRouterGet';
const { string1, string2, string3, isLogin } = useRouterGet();
const inverted = ref(true);
const waitFlag = ref(false);
const handleLoading = (res) => {
  waitFlag.value = res;
}

const { locale } = useI18n()

const lan = ref(zhTW);
const dateLocale = ref(dateZhTW)
// 切換語言的方法
const handleChangeLanguage = (res) => {

  switch (res) {
    case 'zhTW':
      locale.value = 'zh-TW'
      lan.value = zhTW
      dateLocale.value = dateZhTW
      break
    case 'enUS':
      locale.value = 'enUS'
      lan.value = enUS
      dateLocale.value = dateEnUS
      break
    default:
      locale.value = 'zh-TW'
      lan.value = zhTW
      dateLocale.value = dateZhTW
  }
}
onMounted(() => {
  // console.log(locale.value)
})
</script>


<template>
  <n-loading-bar-provider>
    <n-config-provider
      :locale="lan"
      :date-locale="dateLocale"
    >
      <n-notification-provider>
        <n-message-provider>
          <n-dialog-provider>
            <n-modal-provider>
              <n-loading-bar-provider>

                <n-space vertical>
                  <n-layout>
                    <n-layout-header
                      :inverted="inverted"
                      bordered
                      class="header"
                    >
                      <div class="vertical_center">
                        <n-config-provider
                          :locale="lan"
                          :date-locale="dateLocale"
                          :theme="darkTheme"
                        >
                          <HeaderPage @changeLanguage="handleChangeLanguage" />
                        </n-config-provider>
                      </div>
                    </n-layout-header>
                    <n-layout has-sider>
                      <n-layout-sider
                        v-if="isLogin"
                        bordered
                        collapse-mode="width"
                        :width="240"
                        :native-scrollbar="false"
                        :inverted="inverted"
                        class="vertical_center contain_height"
                      >
                        <navbarList />
                      </n-layout-sider>
                      <n-layout class="vertical_center contain_height">
                        <RouterView />
                      </n-layout>
                    </n-layout>

                    <n-layout-footer
                      :inverted="inverted"
                      bordered
                      class="footer"
                    >
                      <p class="vertical_center">
                        Copyright &copy; 2024 All Rights Reserved by Foremost eMage
                        Corporation.
                      </p>
                    </n-layout-footer>
                  </n-layout>
                </n-space>

              </n-loading-bar-provider>
            </n-modal-provider>
          </n-dialog-provider>
        </n-message-provider>
      </n-notification-provider>
    </n-config-provider>
  </n-loading-bar-provider>
</template>


<style scoped>
.slide_y :deep(.n-layout) {
  overflow-y: auto !important;
}

.header {
  min-height: 10vh;
  display: flex;
  align-items: center;

}

.vertical_center {
  margin: 0 auto;
}

.contain_height {
  display: block;
  height: 85vh;
}

.footer {
  min-height: 5vh;
  display: flex;
  align-items: center;
  text-align: center;
}
</style>
