<template>
  <div class="card" v-on:click="$emit(`click`)" v-bind:class="card.vendor">
    <header>
      <img src="../assets/chip-light.svg" />
      <img v-bind:src="require(`../assets/vendor-${card.vendor}.svg`)" />
    </header>

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
    return {};
  },
  methods: {},
};
</script>

<style>
.card {
  max-width: 24rem;
  height: 14rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 0.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 2.8rem;
  text-shadow: rgba(255, 255, 255, 0.4) -1px -1px 2px;
  border-radius: 0.6rem;
  background: rgb(238, 238, 238);
  padding: 1rem;
  gap: 0.5rem 0px;
}
.card > img {
  position: relative;
  top: 10%;
  right: 36%;
}

.number {
  position: relative;
  top: 10%;
  right: 30%;
  font-size: 36px;
}
.name {
  font-size: small;
  position: relative;
  right: 30%;
  top: 15%;
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