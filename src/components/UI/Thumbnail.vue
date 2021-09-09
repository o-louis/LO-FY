<template>
  <section class="flex flex-col items-center px-8">
    <div class="w-24 h-24 bg-black rounded-full"></div>
    <p class="my-3 text-white">{{ title }}</p>
    <Icon
      :name="isPlaying ? 'Pause' : 'Play'"
      color="white"
      class="w-10 h-10"
      @click="$emit('playPause')"
    ></Icon>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Icon from "@/components/Icon/Icon.vue";

export default defineComponent({
  components: {
    Icon,
  },
  props: {
    title: {
      type: String,
    },
    isPlaying: {
      type: Boolean,
      default: false,
    },
  },
});
</script>