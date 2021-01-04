<template>
  <div class="home">
    <div class="container">
      <div class="card">
        <Card v-bind:card="card" />
      </div>
      <div class="form">
        <CardForm v-on:sent="recieved" />
      </div>
      <div class="button">
        <NewButton v-on:click="createCard" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import CardForm from "@/components/CardForm.vue";
import NewButton from "@/components/NewButton.vue";

export default {
  name: "NewCard",
  data() {
    return {
      card: {
        number: "",
        name: "",
        month: "",
        year: "",
        ccv: "",
      },
    };
  },
  components: {
    Card,
    CardForm,
    NewButton,
  },

  methods: {
    recieved(grillkorv) {
      this.card.number = grillkorv.number;
      this.card.name = grillkorv.name;
      this.card.month = grillkorv.month;
      this.card.year = grillkorv.year;
      this.card.ccv = grillkorv.ccv;
    },

    createCard() {
      this.$root.cardInfo.push({
        id: Date.now(),
        number: this.card.number,
        name: this.card.name,
        month: this.card.month,
        year: this.card.year,
        ccv: this.card.ccv,
        completed: true,
      });
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.container {
  position: relative;
}

.card {
  display: grid;
  grid-row-start: 1;
  grid-column-start: 2;
}

.form {
  display: grid;
  position: relative;
  top: 20%;
  justify-items: left;
}

.button {
  display: grid;
  grid-row-start: 5;
  position: relative;
  top: 80%;
}
</style>
