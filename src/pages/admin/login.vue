<script setup>
import { storeToRefs } from "pinia";
import { useMessage, NForm, NFormItem, NInput, NButton, NRow, NCol, NPopover, useLoadingBar } from "naive-ui";
import { useApiStore } from '@/stores/api.js';
import { useToJumpLogin } from '@/composables/useToJumpLogin';
const waitFlag = ref(false);
const { t, locale } = useI18n();
const loadingBar = useLoadingBar()
// const apiStore = useApiStore();
// const { postLoginRequest } = useApiStore();
// const { successMsg, errorMsg, responseData } = storeToRefs(apiStore)
const { checkLogin, jumpIndex } = useToJumpLogin();
const formRef = ref(null);
const message = useMessage();
const emit = defineEmits(['loadingFlag']);
const disable = computed(() => {
  if ((model.value.account && model.value.password && !waitFlag.value)) {
    return false;
  }
  else {
    return true;
  }
})
const model = ref({
  account: null,
  password: null,
});
const rules = computed(() => ({
  account: [
    {
      required: true,
      message: t('accountMsg'),
      trigger: ['blur', 'input'],
    }
  ],
  password: [
    {
      required: true,
      message: t('passwordMsg'),
      trigger: ['blur', 'input'],
    }
  ],
}));
watch(() => locale.value, (newValue, oldValue) => {
  formRef.value?.restoreValidation();
});
const postLogin = async (data) => {
  jumpIndex();
  // waitFlag.value = true;
  // emit('loadingFlag', waitFlag.value);
  // loadingBar.start()
  // await postLoginRequest(data);
  // if (successMsg.value.postLoginRequest) {
  //   setTimeout(() => {
  //     message.success(`${successMsg.value.postLoginRequest}`);
  //     loadingBar.finish()
  //     jumpIndex();
  //   }, 3000);

  // } else {
  //   setTimeout(() => {
  //     loadingBar.error()
  //     message.error(`${errorMsg.value[postLoginRequest]}`)
  //   }, 3000);
  // }

  // setTimeout(() => {
  //   waitFlag.value = false;
  //   emit('loadingFlag', waitFlag.value);
  // }, 4000);

}
const handleValidateButtonClick = (e) => {
  e.preventDefault();
  formRef.value?.validate((errors) => {
    if (!errors) {
      const formData = new FormData();
      formData.append('username', model.value.account);
      formData.append('password', model.value.password);
      postLogin(formData)
    } else {
      message.error(t('noAccount'));
    }
  });
}

onMounted(() => {
  // checkLogin();

});

</script>
<template>

  <main class="wrapper ">

    <h3 style="text-align: center;font-weight: 999; margin-bottom: 20px;">{{ t('login') }}</h3>
    <div class="login-form">
      <n-form
        ref="formRef"
        :model="model"
        :rules="rules"
      >
        <n-form-item
          path="account"
          :label="t('account')"
        >
          <n-input
            :class="{ modal: waitFlag }"
            :disabled="waitFlag"
            v-model:value.trim="model.account"
            @keydown.enter.prevent
            :placeholder="t('enterAccount')"
          />
        </n-form-item>
        <n-form-item
          path="password"
          :label="t('password')"
        >
          <n-input
            :class="{ modal: waitFlag }"
            :disabled="waitFlag"
            type="password"
            show-password-on="mousedown"
            v-model:value.trim="model.password"
            @keydown.enter.prevent
            :placeholder="t('enterPassword')"
          />

        </n-form-item>
        <n-popover trigger="click">
          <template #trigger>
            <n-button
              text
              tag="a"
              type="info"
            >
              {{ t('forgetPassword') }}
            </n-button>
          </template>
          <span> {{ t('forgetString') }}</span>
        </n-popover>

        <n-row :gutter="[0, 24]">
          <n-col :span="24">
            <div class="login-button">
              <n-button
                style="width: 100%;"
                :disabled="disable"
                round
                type="primary"
                @click="handleValidateButtonClick"
              >
                {{ t('loginBtn') }}
              </n-button>
            </div>
          </n-col>
        </n-row>
      </n-form>
    </div>

  </main>
</template>

<style scoped>
.modal {
  opacity: 0.4;
}

.wrapper {
  margin: 100px auto;
  width: 65%;
  /*height: 100%;*/
}

@media (max-width: 768px) {
  .wrapper {
    width: 95%;
  }
}
</style>