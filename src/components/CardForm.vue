<template>
  <div>
    <Card
      v-for="newCard in cardInfo"
      v-bind:key="newCard.id"
      v-bind:card="newCard"
    />
    <input class="number" type="text" placeholder="NUMBER" v-model="number" />
    <input class="name" type="text" placeholder="NAME" v-model="name" />
    <input
      class="validThrough"
      type="text"
      placeholder="VALID THROUGH"
      v-model="validThrough"
    />
    <input class="ccv" type="text" placeholder="CCV" v-model="ccv" />
    <button class="button" v-on:click="createCard">Skapa</button>
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
</style>