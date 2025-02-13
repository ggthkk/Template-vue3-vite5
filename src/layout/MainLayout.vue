<template>
  <div>
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
          <router-view></router-view>
        </n-scrollbar>
        <div class="w-full">
          <!-- Footer -->
          <div class="bg-yellow-600 py-12">
            <h1 class="text-center text-xl">Footer</h1>
          </div>
        </div>
      </div>
    </div>
    <Teleport to="body">
      <LoginModal />
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

// import Footer2 from "@/layout/Footer2.vue";
import rootApp from "@/utilities/rootApp";
onMounted(() => {
  rootApp(null);
});
</script>

<style scoped></style>
