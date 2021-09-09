<template>
  <CurrentRadio :radio="radio"></CurrentRadio>
</template>

<script lang="ts">
import { Ref, ref, defineComponent } from "vue";
import { Radio } from "../types/index";
import RADIOS from "../assets/data/radios.json";

import CurrentRadio from "@/views/Category.vue";

const DEFAULT_RADIO = "hiphop";

export default defineComponent({
  components: {
    CurrentRadio,
  },
  setup: () => {
    const radio: Ref<Radio | undefined> = ref(
      RADIOS.find((radio) => radio?.genre?.replace(/\s/g, "") === DEFAULT_RADIO)
    );
    return { radio };
  },
});
</script>