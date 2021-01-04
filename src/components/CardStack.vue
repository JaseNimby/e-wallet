<template>
  <div>
    <Card
      v-for="newCard in cards"
      v-bind:key="newCard.id"
      v-bind:card="newCard"
    />
    <Card v-bind:card="cards[1]" />

    {{ cards }}
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  name: "Cardstack",
  components: { Card },
  computed: {
    cards() {
      return this.$root.cardInfo;
    },
  },
};
</script>

<style scoped>
</style>