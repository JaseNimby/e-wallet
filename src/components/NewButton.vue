<template>
  <button v-on:click="click">ADD CARD</button>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
    },
  },

  methods: {
    click() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped>
button.disabled {
  background-color: darkgrey;
  color: grey;
}
</style>