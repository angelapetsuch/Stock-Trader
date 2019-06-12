<template>
  <v-flex flexbox>
    <v-card>
      <v-card-text class="pink accent-3">
        <div class="title my-2 white--text">
          {{ stock.name }}
          <div class="subheading">(Price: {{ stock.price }})</div>
        </div>
      </v-card-text>
      <v-card-actions>
        <p class="text-xs-left mr-2 ml-2">
          <v-text-field
            class="input-style"
            color="pink accent-4"
            type="number"
            v-model.number="quantity"
          ></v-text-field>
        </p>
        <p class="text-xs-right ml-2">
          <v-btn
            outline
            large
            color="pink accent-4"
            @click="buyStock"
            :disabled="
              insufficientFunds || quantity <= 0 || !Number.isInteger(quantity)
            "
            >{{ insufficientFunds ? "Too Poor!" : "Buy" }}</v-btn
          >
        </p>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: "appStock",
  props: ["stock"],
  data: () => ({
    quantity: 0
  }),
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    }
  },
  methods: {
    buyStock: function() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    }
  }
};
</script>
<style scoped>
.input-style {
  padding: 1em;
}
</style>
