<template>
  <v-container fill-height fluid grid-list-lg pa-2>
    <v-layout justify-center align-center row wrap pa-2>
      <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
    </v-layout>
  </v-container>
</template>

<script>
import appStock from "./Stock.vue";
export default {
  name: "appStocks",
  components: {
    appStock
  },
  // use getter we created in the store to get the stock data
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    }
  }
};
</script>

<style scoped></style>
