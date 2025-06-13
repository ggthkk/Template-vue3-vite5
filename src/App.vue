<template>
  <div :data-theme="themeStore.theme === null ? 'light' : 'dark'">
    <n-config-provider
      :theme="themeStore.theme"
      :theme-overrides="useConfigNaive.themeOverrides"
      preflight-style-disabled
    >
      <n-modal-provider>
        <n-message-provider
          :container-style="{ zIndex: '100000' }"
          placement="top-right"
        >
          <n-dialog-provider>
            <n-global-style />
            <MainLayout />
          </n-dialog-provider>
        </n-message-provider>
      </n-modal-provider>
    </n-config-provider>
  </div>
</template>

<script setup lang="ts">
//store
import { useConfigNaiveStore } from "@/stores/configNaiveUi";
import { useStore } from "@/stores/theme";

import MainLayout from "@/layout/MainLayout.vue";

const useConfigNaive = useConfigNaiveStore();

const themeStore = useStore();
</script>
<style lang="scss">

</style>