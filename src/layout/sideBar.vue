<template>
  <n-layout class="h-screen w-screen select-none">
    <n-layout position="absolute" style="bottom: 130px" has-sider>
      <n-layout content-style="padding: 24px;" :native-scrollbar="false">
        <RouterView />
      </n-layout>
    </n-layout>
    <n-layout-footer
      class="!bg-transparent"
      position="absolute"
      style="height: 130px; padding: 24px"
    >
      <!-- <Footer2 /> -->
    </n-layout-footer>
  </n-layout>
</template>

<script setup lang="ts">
// import Footer2 from "@/layout/Footer2.vue";
</script>

<style scoped></style>
