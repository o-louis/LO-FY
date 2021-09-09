<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    :fill="color"
    :color="color"
  >
    <path d="M10 17l5-5-5-5v10z"></path>
    <path d="M0 24V0h24v24H0z" fill="none"></path>
  </svg>
</template>


<script>
export default {
  props: {
    color: {
      type: String,
    },
  },
};
</script>