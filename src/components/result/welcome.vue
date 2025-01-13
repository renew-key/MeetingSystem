<script setup>
import cookie from 'cookiejs'
import { useToJumpLogin } from '@/composables/useToJumpLogin';
import logo from '@/assets/img/金廈海運logo-removebg.png';
import {
  NButton,
  NResult
} from "naive-ui";
const { jumpLoginPage } = useToJumpLogin();
const userName = ref("");
const loginOut = () => {
  jumpLoginPage();
}
onMounted(() => {
  userName.value = cookie.get('user');
})
</script>
<template>
  <n-result
    style="min-height: 300px;"
    :title="`${userName} Welcome!`"
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

    <div class="container">
      <h3>歡迎使用金廈海運後台系統!!</h3>
    </div>


    <template #footer>
      <div>
        <n-button
          style="margin-bottom: 30px;"
          @click="loginOut"
        >登出</n-button>
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