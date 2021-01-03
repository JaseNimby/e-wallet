<template>
  <div class="container">
    <Card
      v-for="newCard in cardInfo"
      v-bind:key="newCard.id"
      v-bind:card="newCard"
    />

    <div class="card">
      <div>{{ number }}</div>
      <div id="name">CARDHOLDER NAME {{ name }}</div>
      <div id="validThrough">
        <div>VALID UNTIL</div>
        {{ month }} {{ year }}
      </div>
    </div>

    <div class="form">
      <div>
        <div>CARD NUMBER</div>
        <input type="text" placeholder="XXXX XXXX XXXX XXXX" v-model="number" />
      </div>
      <div>
        <div>CARDHOLDER NAME</div>
        <input
          class="name"
          placeholder="Firstname Lastname"
          type="text"
          v-model="name"
        />
      </div>
      <div>MONTH / YEAR</div>
      <div>
        <select class="year" type="text" v-model="year">
          <option disabled vlaue="" />
          <option>01</option>
          <option>02</option>
          <option>03</option>
          <option>04</option>
          <option>05</option>
          <option>06</option>
        </select>
        <select class="month" type="text" v-model="month">
          <option disabled vlaue="" />
          <option>2021</option>
          <option>2022</option>
          <option>2023</option>
          <option>2024</option>
          <option>2025</option>
          <option>2026</option>
        </select>
      </div>
      <div>
        CCV
        <input class="ccv" type="text" v-model="ccv" />
      </div>
      <NewButton v-on:click="createCard" />
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
import NewButton from "./NewButton.vue";

export default {
  name: "card-form",
  components: { Card, NewButton },
  data() {
    return {
      number: "",
      name: "",
      month: "",
      year: "",
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
        month: this.month,
        year: this.year,
        ccv: this.ccv,
        completed: true,
      });
      this.number = "";
      this.name = "";
      this.month = "";
      this.year = "";
      this.ccv = "";
    },
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 5fr 5fr 5fr 5fr 5fr;
  grid-template-rows: 5fr 5fr 5fr 5fr 5fr;
  grid-gap: 20px;
}

.card {
  display: grid;
  grid-column: 3;
  grid-row: 1;
  background-color: aquamarine;
  padding: 10px;
  -webkit-box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.51);
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.51);
}
.form {
  display: grid;
  grid-column: 3;
  grid-row: 2;
  justify-items: left;
  font-size: small;
}

input {
  font-size: medium;
  padding: 0.5rem;
}
</style>