<template>
  <v-app>
    <appHeader></appHeader>
    <v-content transition="slide-x-transition">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import appHeader from "./components/Header.vue";
export default {
  components: {
    appHeader
  },
  // upon creation of the DOM, load the stocks
  created() {
    this.$store.dispatch("initStocks");
  }
};
</script>

<style></style>
