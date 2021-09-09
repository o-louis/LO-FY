<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :fill="color">
    <path d="M0 0h24v24H0z" fill="none"></path>
    <path d="M12 2l-5.5 9h11z"></path>
    <circle cx="17.5" cy="17.5" r="4.5"></circle>
    <path d="M3 13.5h8v8H3z"></path>
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