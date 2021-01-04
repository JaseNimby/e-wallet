<template>
  <div>
    <Card v-on:kortet="nyttKort" />
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "Home",
  coponents: { Card },

  data() {
    return {
      card: {
        number: "",
        name: "",
        month: "",
        year: "",
        ccv: "",
        cardInfo: [],
      },
    };
  },
  methods: {
    nyttKort(omg) {
      this.cardInfo = omg.CardInfo;
    },
  },
};
</script>

<style scoped>
</style>