<template>
  <div :data-theme="themeStore.theme === null ? 'light' : 'dark'">
    <n-config-provider :theme="themeStore.theme" preflight-style-disabled>
      <n-message-provider>
        <n-global-style />
        <Sidebar />
      </n-message-provider>
    </n-config-provider>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store/theme";
import Sidebar from "./layout/sideBar.vue";

export default defineComponent({
  components: {
    Sidebar,
  },
  setup() {
    const themeStore = useStore();
    return {
      themeStore,
    };
  },
});
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
