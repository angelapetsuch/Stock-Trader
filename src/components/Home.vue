<template>
  <v-container fluid grid-list-lg>
    <h1>Trade or View your Portfolio</h1>
    <h6>You may Save & Load our Data</h6>
    <h6>Click on 'End Day' to begin a New Day!</h6>
    <hr />
    <p>Your Funds: {{ funds | currency }}</p>
  </v-container>
</template>

<script>
export default {
  name: "",
  data: () => ({}),
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
};
</script>

<style scoped></style>
