<template>
  <li class="flex flex-col pl-6 text-white cursor-pointer">
    <div class="flex">
      <Icon :name="icon || label" color="#969696" class="w-6 h-6"></Icon>
      <span class="ml-4 text-lg">{{ label }}</span>
    </div>
    <slot></slot>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Icon from "@/components/Icon/Icon.vue";

export default defineComponent({
  components: {
    Icon,
  },
  props: {
    label: {
      type: String,
    },
    icon: {
      type: String,
    },
  },
});
</script>
