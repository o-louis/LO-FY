<template>
  <form class="w-full px-8 mt-10">
    <input
      type="text"
      class="w-full px-4 py-2 tracking-wide rounded-md outline-none  text-pink-50 bg-lightGray"
      :placeholder="placeholder"
    />
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    placeholder: {
      type: String,
    },
  },
});
</script>
