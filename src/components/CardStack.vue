<template>
  <div>
    <Card
      v-for="card in cards"
      v-bind:key="card.id"
      v-bind:card="card"
      v-on:click="selectedCard(card)"
    />

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
    methods: {
      slecetdCard(card) {
        this.$emit("selectedCard", card);
      },
    },
  },
};
</script>

<style scoped>
</style>