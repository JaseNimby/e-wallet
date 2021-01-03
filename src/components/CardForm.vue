<template>
  <div class="container">
    <Card
      v-for="newCard in cardInfo"
      v-bind:key="newCard.id"
      v-bind:card="newCard"
    />
    <div class="form">
      <div class="number">
        <div>CARD NUMBER</div>
        <input type="text" placeholder="XXXX XXXX XXXX XXXX" v-model="number" />
      </div>
      <div class="name">
        <div>CARDHOLDER NAME</div>
        <input
          class="name"
          placeholder="Firstname Lastname"
          type="text"
          v-model="name"
        />
      </div>
      <input class="validThrough" type="text" v-model="validThrough" />
      <input class="ccv" type="text" v-model="ccv" />
      <button class="button" v-on:click="createCard">Skapa</button>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: "card-form",
  components: { Card },
  data() {
    return {
      number: "",
      name: "",
      validThrough: "",
      ccv: "",
      cardInfo: [],
    };
  },
  methods: {
    createCard() {
      this.cardInfo.push({
        id: Date.now(),
        number: this.number,
        name: this.name,
        validThrough: this.validThrough,
        ccv: this.ccv,
        completed: true,
      });
      this.number = "";
      this.name = "";
      this.validThrough = "";
      this.ccv = "";
    },
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 5fr 5fr 5fr;
  grid-template-rows: 5fr 5fr 5fr;
  grid-gap: 20px;
}

.form {
  display: grid;
  grid-column: 2;
  grid-row: 2;
  justify-items: left;
}

.number > div {
  font-size: small;
}

.number > input {
  font-size: medium;
  padding: 0.5rem;
}

.name > div {
  font-size: small;
}

.name > input {
  font-size: medium;
  padding: 0.5rem;
}
</style>