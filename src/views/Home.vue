<template>
  <div class="home">
    <Card />

    <CardForm />
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
