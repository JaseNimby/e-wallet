<template>
  <div class="home">
    <Card v-bind:card="card" />

    <CardForm v-on:sent="recieved" />

    <router-link to="/"> <NewButton v-on:click="createCard" /></router-link>
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
        cardInfo: [],
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

    // kortet() {
    //   this.$emit("kortet", createCard());
    // },
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>
