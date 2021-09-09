<template>
  <router-link
    :to="radioPath"
    class="flex items-center justify-center uppercase border  border-tile text-tile hover:bg-white hover:bg-opacity-10 hover:text-white hover:border-white"
  >
    {{ radio.genre }}
  </router-link>
</template>

<script lang="ts">
import { Ref, ref, defineComponent } from "vue";

export default defineComponent({
  props: {
    radio: {
      type: Object,
    },
  },
  setup: (props: Record<string, any>) => {
    const url = `/category/${props?.radio?.genre.replace(/\s/g, "")}`;
    const radioPath: Ref<string> = ref(url);
    return {
      radioPath,
    };
  },
});
</script>