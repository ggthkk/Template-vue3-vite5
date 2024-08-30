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
@import url("https://fonts.googleapis.com/css2?family=Mitr&display=swap");
html,
div,
p,
h1,
h2,
body {
  font-family: "Mitr", sans-serif, -apple-system, blinkmacsystemfont, Segoe UI,
    roboto, Helvetica Neue, arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", Segoe UI Symbol !important;
}
#app {
  font-family: "Mitr", sans-serif;
}
</style>
@/stores/theme
