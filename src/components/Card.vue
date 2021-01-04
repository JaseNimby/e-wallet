<template>
  <div class="card">
    <img src="../assets/chip-light.svg" />
    <div class="number">XXXX{{ card.number }}</div>

    <div class="name">
      CARDHOLDER NAME
      <div>{{ card.name }}</div>
    </div>
    <div class="month">MM{{ card.month }}</div>
    <div class="year">YY{{ card.year }}</div>
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
  background-color: lightgrey;
  width: 340px;
  height: 240px;
  padding: 2px;
  -webkit-box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.51);
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.51);
  position: relative;
  justify-content: left;
}
.card > img {
  position: relative;
  top: 10%;
  left: 5%;
}

.number {
  position: relative;
  top: 50%;
  left: 0%;
  font-size: 36px;
}
.name {
  font-size: small;
  position: relative;
  left: 5%;
  top: 40%;
  padding-bottom: 2px;
}

.name > div {
  font-size: 24px;
}

.month {
}
</style>