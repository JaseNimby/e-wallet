<template>
  <div class="card">
    Card holder name
    <div class="number">{{ card.number }}</div>
    <div class="name">{{ card.name }}</div>
    <div class="month">{{ card.month }}</div>
    <div class="year">{{ card.year }}</div>
    <div class="ccv">{{ card.ccv }}</div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    card: Object,
  },
};
</script>

<style scoped>
.card {
  background-color: lightgrey;
  padding: 10px;
  -webkit-box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.51);
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.51);
}
</style>