<template>
  <div>
    <Card v-bind:card="card" />
    <CardStack />
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
        ccv: "",
      },
    };
  },
};
</script>

<style scoped>
</style>