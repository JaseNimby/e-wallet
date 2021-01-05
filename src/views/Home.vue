<template>
  <div>
    <Card v-bind:card="shoosenCard" v-if="choosenCard" />
    <CardStack v-on:showCard="showCard" />
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import CardStack from "@/components/CardStack.vue";

export default {
  name: "Home",
  components: { Card, CardStack },

  data() {
    return {
      card: {
        number: "",
        name: "",
        month: "",
        year: "",
        vendor: "",
      },
      choosenCard: null,
    };
  },

  methods: {
    showCard(shown) {
      this.choosenCard = {
        number: shown.number,
        name: shown.namem,
        month: shown.month,
        year: shown.year,
        vendor: shown.vendor,
      };
    },
  },
};
</script>

<style scoped>
</style>