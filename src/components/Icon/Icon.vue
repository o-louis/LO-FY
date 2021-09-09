<template>
  <component :is="icons[name]" :color="color"></component>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import * as icons from "./index";

export default defineComponent({
  props: {
    name: {
      type: String,
    },
    color: {
      type: String,
    },
  },
  setup: () => {
    return { icons };
  },
});
</script>
