<template>
  <button>
    <a v-if="link" :href="link">{{ text }}</a>
    <span v-else>{{ text }}</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    text: {
      type: String,
    },
    link: {
      type: Boolean || String,
      default: false,
    },
  },
});
</script>
