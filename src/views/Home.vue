<template>
  <div class="home">
    <Card />

    <CardForm class="cardForm" />
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import CardForm from "@/components/CardForm.vue";

export default {
  name: "Home",
  components: {
    Card,
    CardForm,
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>
