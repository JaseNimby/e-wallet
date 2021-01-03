<template>
  <div class="card">
    Card holder name
    <div class="number">Number {{ card.number }}</div>
    <div class="name">Name {{ card.name }}</div>
    <div class="validThrough">Valid {{ card.validThrough }}</div>
    <div class="ccv">CCV{{ card.ccv }}</div>
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
  background-color: aquamarine;
  padding: 10px;
  -webkit-box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.51);
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.51);
}
</style>