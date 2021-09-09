<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    :fill="color"
    :color="color"
  >
    <path d="M14 7l-5 5 5 5V7z"></path>
    <path d="M24 0v24H0V0h24z" fill="none"></path>
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