<template>
  <div class="relative flex flex-col">
    <iframe
      :width="width"
      :height="height"
      :src="source"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <p class="absolute mt-6 text-lg text-white" style="bottom: -4.5rem">
      Playing for 00:45..
      <br />
      <a
        :href="src"
        target="__blank"
        class="text-sm text-white underline text-opacity-30"
        >Link to the YT video</a
      >
    </p>
  </div>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent } from "vue";

export default defineComponent({
  props: {
    src: {
      type: String,
      default: undefined,
    },
    width: {
      type: Number,
    },
    height: {
      type: Number,
    },
  },
  setup: (props: Record<string, any>) => {
    const getVideoID = (url: string): string | boolean => {
      const regExp =
        /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
      const match = url.match(regExp);
      return match && match[7].length === 11 ? match[7] : false;
    };
    const source: ComputedRef<string> = computed(
      () => `https://www.youtube.com/embed/${getVideoID(props.src)}?autoplay=1`
    );
    return { source };
  },
});
</script>
