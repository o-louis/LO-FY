<template>
  <Section>
    <div class="w-full max-w-screen-md">
      <h1 class="text-2xl font-bold text-white uppercase">Categories</h1>
      <section class="grid grid-cols-4 gap-4 mt-8 mb-4">
        <Tile
          v-for="radio in RADIOS"
          :key="radio"
          :radio="radio"
          class="h-40 text-2xl text-white border-white cursor-pointer"
        ></Tile>
      </section>
    </div>
  </Section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RADIOS from "../assets/data/radios.json";

import Tile from "@/components/UI/Tile.vue";
import Section from "@/components/Layout/Section.vue";

export default defineComponent({
  components: {
    Tile,
    Section,
  },
  setup: () => {
    return { RADIOS };
  },
});
</script>
