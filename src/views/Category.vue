<template>
  <Section>
    <div class="flex flex-col w-full max-w-screen-md">
      <ScaleLoader v-if="isLoading" color="#fff" class="mt-32"></ScaleLoader>
      <template v-else>
        <h1 class="self-center text-2xl font-bold text-white uppercase">
          {{ source.genre }}
        </h1>
        <div class="flex items-center self-center mt-16">
          <Video :src="source.url" width="560" height="315"></Video>
        </div>
      </template>
    </div>
  </Section>
</template>

<script lang="ts">
import {
  computed,
  ComputedRef,
  onMounted,
  onUpdated,
  ref,
  Ref,
  defineComponent,
} from "vue";
import { useRoute } from "vue-router";
import { Radio } from "../types/index";
import RADIOS from "../assets/data/radios.json";

import Video from "@/components/UI/Video.vue";
import Section from "@/components/Layout/Section.vue";
import ScaleLoader from "vue-spinner/src/ScaleLoader.vue";

export default defineComponent({
  components: {
    Video,
    Section,
    ScaleLoader,
  },
  props: {
    radio: {
      type: Object,
      default: null,
    },
  },
  setup: (props: Record<string, any>) => {
    const route = useRoute();
    const isLoading: Ref<Boolean> = ref(true);

    const showLoader = (): void => {
      isLoading.value = true;
      setTimeout(() => {
        isLoading.value = false;
      }, 300);
    };

    onMounted(() => {
      showLoader();
    });
    onUpdated(() => {
      showLoader();
    });

    const source: ComputedRef<Radio | undefined> = computed(() => {
      if (!props.radio) {
        return RADIOS.find(
          (radio) => radio?.genre.replace(/\s/g, "") == route?.params?.name
        );
      }
      return props.radio;
    });
    return {
      isLoading,
      source,
    };
  },
});
</script>