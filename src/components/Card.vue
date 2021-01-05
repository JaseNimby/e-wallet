<template>
  <div class="card" v-bind:class="card.vendor">
    <img src="../assets/chip-light.svg" />

    <div class="number">{{ card.number }}</div>

    <div class="name">
      CARDHOLDER NAME
      <div>{{ card.name }}</div>
    </div>

    <div class="valid">
      <div>VALID UNTIL</div>
      <div class="month">{{ card.month }}</div>
      <div class="year">{{ card.year }}</div>
    </div>

    <div class="vendor">Vendor {{ card.vendor }}</div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    card: Object,
  },
  data() {
    return {
      cardcolor: "green",
    };
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
}
.card > img {
  position: relative;
  top: 10%;
  right: 36%;
}

.number {
  position: relative;
  top: 20%;
  right: 30%;
  font-size: 36px;
}
.name {
  font-size: small;
  position: relative;
  right: 30%;
  top: 20%;
  padding-bottom: 2px;
}

.name > div {
  font-size: 24px;
}

.month {
  position: relative;
}

.valid {
  position: relative;
  left: 30%;
  top: 20%;
}

.ninja {
  background-color: rgb(46, 46, 46);
}

.blockchain {
  background-color: rgb(134, 34, 228);
}

.bitcoin {
  background-color: rgb(255, 202, 28);
}

.evil {
  background-color: rgb(255, 0, 55);
}
</style>