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
   <div class="h-screen flex-1 overflow-hidden">
    <!-- Main Content Area-->
    <div class="flex h-full flex-col justify-between">
      <div class="sticky top-0 w-full">
        <!-- Header -->
        <div class="bg-orange-500 py-5">
          <h1 class="text-center text-xl">Header</h1>
        </div>
      </div>
      <n-scrollbar class="h-full">
        <div>
          <!-- Content -->
          <h1 class="text-center text-xl">1</h1>
          <h1 class="text-center text-xl">Content</h1>
          <h1 class="text-center text-xl">Content</h1>
          <h1 class="text-center text-xl">Content</h1>
          <h1 class="text-center text-xl">Content</h1>
          <h1 class="text-center text-xl">Content</h1>
          <h1 class="text-center text-xl">Content</h1>
          <h1 class="text-center text-xl">Content</h1>
          <h1 class="text-center text-xl">Content</h1>
          <h1 class="text-center text-xl">Content</h1>
          <h1 class="text-center text-xl">Content</h1>
          <h1 class="text-center text-xl">Content</h1>
          <h1 class="text-center text-xl">Content</h1>
          <h1 class="text-center text-xl">Content</h1>
          <h1 class="text-center text-xl">Content</h1>
          <h1 class="text-center text-xl">Content</h1>
          <h1 class="text-center text-xl">Content</h1>
          <h1 class="text-center text-xl">Content</h1>
          <h1 class="text-center text-xl">Content</h1>
          <h1 class="text-center text-xl">Content</h1>
          <h1 class="text-center text-xl">Content</h1>
          <h1 class="text-center text-xl">Content</h1>
          <h1 class="text-center text-xl">Content</h1>
          <h1 class="text-center text-xl">Content</h1>
          <h1 class="text-center text-xl">Content</h1>
          <h1 class="text-center text-xl">Content</h1>
          <h1 class="text-center text-xl">Content</h1>
          <h1 class="text-center text-xl">Content</h1>
          <h1 class="text-center text-xl">Content</h1>
          <h1 class="text-center text-xl">Content</h1>
          <h1 class="text-center text-xl">Content</h1>
          <h1 class="text-center text-xl">Content</h1>
          <h1 class="text-center text-xl">Content</h1>
          <h1 class="text-center text-xl">Content</h1>
          <h1 class="text-center text-xl">Content</h1>
          <h1 class="text-center text-xl">Content</h1>
          <h1 class="text-center text-xl">Content</h1>
          <h1 class="text-center text-xl">Content</h1>
          <h1 class="text-center text-xl">Content</h1>
          <h1 class="text-center text-xl">Content</h1>
          <h1 class="text-center text-xl">Content</h1>
          <h1 class="text-center text-xl">Content</h1>
          <h1 class="text-center text-xl">Content</h1>
          <h1 class="text-center text-xl">Content</h1>
          <h1 class="text-center text-xl">Content</h1>
          <h1 class="text-center text-xl">Content</h1>
          <h1 class="text-center text-xl">Content</h1>
          <h1 class="text-center text-xl">Content</h1>
          <h1 class="text-center text-xl">Content</h1>
          <h1 class="text-center text-xl">Content</h1>
          <h1 class="text-center text-xl">Content</h1>
          <h1 class="text-center text-xl">Content</h1>
          <h1 class="text-center text-xl">Content</h1>
          <h1 class="text-center text-xl">4</h1>
        </div>
      </n-scrollbar>
      <div class="w-full">
        <!-- Footer -->
        <div class="bg-yellow-600 py-12">
          <h1 class="text-center text-xl">Footer</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import Footer2 from "@/layout/Footer2.vue";
</script>

<style scoped></style>
