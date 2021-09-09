<template>
  <navbar
    class="flex flex-col h-full py-6 w-80 bg-primary"
    :class="{ closed: isMenuClosed }"
  >
    <!-- MENU OPEN -->
    <template v-if="!isMenuClosed">
      <Icon
        name="LeftArrow"
        color="#fff"
        class="self-end w-8 h-8 mr-8 cursor-pointer"
        @click="isMenuClosed = !isMenuClosed"
      >
      </Icon>
      <SearchBar placeholder="Search a type..."></SearchBar>

      <MenuList class="flex-grow px-2 mb-12 mt-7">
        <MenuItem label="Categories" class="px-6">
          <section class="grid grid-cols-2 gap-2 mt-8 mb-4">
            <Tile
              v-for="radio in radios"
              :key="radio"
              :radio="radio"
              class="h-14"
            ></Tile>
          </section>
          <Button
            link="/categories"
            text="Load more"
            class="py-1 text-sm font-bold uppercase bg-white border  text-tile border-tile bg-opacity-10 hover:border-white hover:text-white"
          ></Button>
        </MenuItem>
      </MenuList>

      <!-- <Thumbnail
        title="Hip Hop radio"
        :isPlaying="isPlaying"
        @playPause="isPlaying = !isPlaying"
      ></Thumbnail> -->
    </template>

    <!-- MENU CLOSED-->
    <template v-else @click="isMenuClosed = !isMenuClosed">
      <Icon
        v-for="icon in icons"
        :key="icon.name"
        :name="icon.name"
        :color="iconProps.color"
        :class="`${iconProps.class} ${icon.class}`"
        @click="icon.action()"
      >
      </Icon>
    </template>
  </navbar>
</template>

<script lang="ts">
import { Ref, ref, defineComponent } from "vue";
import { Radio } from "../../../types/index";
import RADIOS from "../../../assets/data/radios.json";

import MenuList from "./MenuList.vue";
import MenuItem from "./MenuItem.vue";
import Tile from "@/components/UI/Tile.vue";
import Icon from "@/components/Icon/Icon.vue";
import Button from "@/components/UI/Button.vue";
import SearchBar from "@/components/UI/SearchBar.vue";
import Thumbnail from "@/components/UI/Thumbnail.vue";

const GRAY_ICON = "#969696";

export default defineComponent({
  components: {
    Tile,
    Icon,
    Button,
    MenuList,
    MenuItem,
    SearchBar,
    Thumbnail,
  },
  setup: () => {
    const isMenuClosed: Ref<Boolean> = ref(false);
    const isPlaying: Ref<Boolean> = ref(false);
    const radios: Array<Radio> = RADIOS.slice(0, 4);
    const iconProps = {
      color: GRAY_ICON,
      class: "self-end w-8 h-8 mr-3 cursor-pointer",
    };

    const playPause = (): Boolean => (isPlaying.value = !isPlaying.value);
    const toggleMenu = (): Boolean =>
      (isMenuClosed.value = !isMenuClosed.value);

    const icons = [
      {
        name: "RightArrow",
        action: () => toggleMenu(),
      },
      {
        name: "Search",
        class: "mt-10",
        action: () => toggleMenu(),
      },
      {
        name: "Categories",
        class: "mb-12 mt-7",
        action: () => toggleMenu(),
      },
      {
        name: `${isPlaying.value ? "Pause" : "Play"}`,
        class: "mt-auto",
        action: () => playPause(),
      },
    ];

    return {
      icons,
      radios,
      isMenuClosed,
      iconProps,
      isPlaying,
    };
  },
});
</script>

<style scoped>
navbar {
  transition: width 0.5s ease;
}

navbar.closed {
  width: 4rem;
}
</style>
