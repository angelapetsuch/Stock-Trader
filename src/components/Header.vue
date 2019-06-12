<template>
  <v-toolbar app color="grey darken-4" dark>
    <router-link to="/">
      <v-toolbar-title class="margin-brand" to="/"
        >Stock Trader</v-toolbar-title
      >
    </router-link>
    <v-btn fab to="/portfolio">Portfolio</v-btn>
    <v-btn fab to="/stocks">Stocks</v-btn>
    <v-spacer></v-spacer>
    <v-btn fab @click="endDay">End Day</v-btn>
    <v-spacer></v-spacer>
    <v-btn fab @click="saveData">Save</v-btn>
    <v-btn fab @click="loadData">Load</v-btn>

    <strong>Funds: {{ funds | currency }}</strong>
  </v-toolbar>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "appHeader",
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions({
      randomizeStocks: "randomizeStocks",
      fetchData: "loadData"
    }),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      // save data
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };
      this.$http.put("data.json", data); //overwrite current record on firebase
    },
    loadData() {
      // load data
      // execute load data action in store since we are actually
      // changing the state, or mutating it.
      this.fetchData();
    }
  }
};
</script>
<style scoped>
a {
  color: white;
  text-decoration: none;
}

.margin-brand {
  margin-right: 30px !important;
}
</style>
