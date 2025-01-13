<script setup>
import logo from '@/assets/img/金廈海運logo-removebg.png';
import {
  NButton,
  NResult
} from "naive-ui";
const props = defineProps({
  title: {
    type: String,
    required: true, // 必須傳遞
    default: '', // 默認值
  }
});
const reloadPage = () => {
  window.location.reload();
}
</script>
<template>
  <n-result
    style="min-height: 300px;"
    :title="props.title"
  >
    <template #icon>
      <div class="container">
        <img
          :src="logo"
          alt="logo"
        />
        <h1>金廈海運後台系統</h1>
      </div>

    </template>
    <!--<div class="loading ">
      <div class="center ">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="24px"
          height="30px"
          viewBox="0 0 24 30"
          style="enable-background:new 0 0 50 50;"
          xml:space="preserve"
        >
          <rect
            x="0"
            y="13"
            width="4"
            height="5"
            fill="#333"
          >
            <animate
              attributeName="height"
              attributeType="XML"
              values="5;21;5"
              begin="0s"
              dur="0.6s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              attributeType="XML"
              values="13; 5; 13"
              begin="0s"
              dur="0.6s"
              repeatCount="indefinite"
            />
          </rect>
          <rect
            x="10"
            y="13"
            width="4"
            height="5"
            fill="#333"
          >
            <animate
              attributeName="height"
              attributeType="XML"
              values="5;21;5"
              begin="0.15s"
              dur="0.6s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              attributeType="XML"
              values="13; 5; 13"
              begin="0.15s"
              dur="0.6s"
              repeatCount="indefinite"
            />
          </rect>
          <rect
            x="20"
            y="13"
            width="4"
            height="5"
            fill="#333"
          >
            <animate
              attributeName="height"
              attributeType="XML"
              values="5;21;5"
              begin="0.3s"
              dur="0.6s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              attributeType="XML"
              values="13; 5; 13"
              begin="0.3s"
              dur="0.6s"
              repeatCount="indefinite"
            />
          </rect>
        </svg>
      </div>
    </div>-->
    <template #footer>
      <div>
        <h3 style="margin-bottom: 15px;">等待太久請重新整理，稍後再試一次!!</h3>
        <n-button
          style="margin-bottom: 30px;"
          @click="reloadPage"
        >重新整理頁面</n-button>
      </div>
    </template>
  </n-result>
</template>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  /* 垂直排列 */
  justify-content: center;
  /* 垂直居中 */
  align-items: center;
  /* 水平居中 */
}

img {
  padding-top: 10px;
  max-width: 100px;
}

h1 {
  margin-top: -10px;
}

.loading {
  display: flex;
}

.center {
  margin: 0 auto;
}

svg path,
svg rect {
  fill: #FF6700;
}
</style>