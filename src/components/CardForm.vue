<template>
  <div class="form">
    <div>
      <div>CARD NUMBER</div>
      <input
        type="text"
        placeholder="XXXX XXXX XXXX XXXX"
        v-model="number"
        v-on:input="sent"
      />
    </div>
    <div>
      <div>CARDHOLDER NAME</div>
      <input
        class="name"
        placeholder="Firstname Lastname"
        type="text"
        v-model="name"
        v-on:input="sent"
      />
    </div>
    <div>MONTH / YEAR</div>
    <div>
      <select class="month" type="text" v-model="month" v-on:input="sent">
        <option disabled vlaue="" />
        <option>01</option>
        <option>02</option>
        <option>03</option>
        <option>04</option>
        <option>05</option>
        <option>06</option>
      </select>
      <select class="year" type="text" v-model="year" v-on:input="sent">
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
      <input class="ccv" type="text" v-model="ccv" v-on:input="sent" />
    </div>
  </div>
</template>

<script>
export default {
  name: "card-form",
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
    sent() {
      this.$emit("sent", {
        number: this.number,
        name: this.name,
        month: this.month,
        year: this.year,
        ccv: this.ccv,
      });
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

.form {
  display: grid;
  grid-column: span 2 / 5;
  grid-row: 2;
  justify-items: left;
  font-size: small;
}

input {
  font-size: medium;
  padding: 0.5rem;
}
</style>