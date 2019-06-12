<template>
  <v-container fluid grid-list-lg>
    <v-layout justify-center align-center pa-2 row wrap>
      <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import Stock from "./Stock.vue";

export default {
  name: "appPortfolio",
  data: () => ({}),
  computed: {
    ...mapGetters({
      stocks: "stockPortfolio"
    })
  },
  components: {
    appStock: Stock
  }
};
</script>

<style scoped></style>
