<template>
  <div class="card">
    <div>
      {{ card.number }} {{ card.name }} {{ card.validThrough }}
      {{ card.ccv }}
    </div>
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
</style>