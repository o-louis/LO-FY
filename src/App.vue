<template>
  <div
    class="flex flex-col h-screen max-h-screen overflow-hidden bg-background"
  >
    <Header></Header>
    <main class="flex w-full h-full">
      <Menu></Menu>
      <router-view></router-view>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Menu from "@/components/UI/Menu/Menu.vue";
import Header from "@/components/Layout/Header.vue";

export default defineComponent({
  components: {
    Header,
    Menu,
  },
});
</script>
