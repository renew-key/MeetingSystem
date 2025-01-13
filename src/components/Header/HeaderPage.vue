<script setup>
import translate from '@/assets/img/translate.png';
import { useRouterGet } from '@/composables/useRouterGet';
import { NSelect, NButton, NDropdown, NIcon } from "naive-ui";
import { useI18n } from 'vue-i18n'
const { isLogin } = useRouterGet();
const emit = defineEmits(['changeLanguage']);

// 使用 i18n
const { t } = useI18n()
const value = ref("zhTW");
const options = computed(() => [
  {
    label: t('zh-TW'), // 使用翻譯鍵
    value: 'zhTW',
  },
  {
    label: t('en'),
    value: 'enUS',
  },
])
const handleUpdateValue = (value) => {
  emit('changeLanguage', value);
}
</script>

<template>
  <div class="wrapper">
    <div class="left">
      <!-- <img
        :src="logo"
        width="50"
        height="50"
      /> -->
      <h3 class="title">{{ t('title') }}</h3>

    </div>
    <div
      class="center title"
      v-if="isLogin"
    >
      <!-- <navbarList /> -->
    </div>
    <div class="right">
      <!--  <n-dropdown
        :options="options"
        @select="handleUpdateValue"
      >
        <n-button
          text
          tag="a"
          type="primary"
        >
          <img
            :src="translate"
            width="60"
            height="50"
          />
        </n-button>
      </n-dropdown>-->
      <n-select
        style="max-width: 100px;"
        :consistent-menu-width="false"
        v-model:value="value"
        @update:value="handleUpdateValue"
        :options="options"
      />
      <infoButton v-if="isLogin" />

      <searchBar v-if="isLogin" />
    </div>
  </div>
</template>
<style scoped>
.wrapper {
  width: 100vw;
  height: 10vh;
  display: flex;
  align-items: center;
}

img {
  padding-top: 10px;
  padding-left: 20px;
}

.left {
  margin-left: 20px;
  flex: 25;
  float: left;
  display: flex;
  align-items: center;
  text-align: center;
  /* 垂直置中 */
  gap: 10px;
  /* 圖片與文字間的間距，可調整 */
}



.center {
  flex: 30;
  margin: 0 auto;
  text-align: center;
}

.right {
  flex: 20;
  padding-right: 20px;
  float: right;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  /* 垂直置中 */
  gap: 10px;
  /* 圖片與文字間的間距，可調整 */
  text-align: center;
}

.title {
  display: inline-block;
}

@media (max-width: 600px) {
  .title {
    display: none;
  }
}
</style>