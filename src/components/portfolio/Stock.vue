<template>
      <v-flex flexbox>
        <v-card>
          <v-card-text class="deep-purple accent-3">
            <div class="title my-2  white--text">
              {{ stock.name }}
              <div class="subheading">
                (Price: {{ stock.price }} | Quantity: {{ stock.quantity }})
              </div>
            </div>
          </v-card-text>
          <v-card-actions>
            <p class="text-xs-left">
              <v-text-field
                class="input-style"
                color="deep-purple accent-4"
                type="number"
                v-model.number="quantity"
              ></v-text-field>
            </p>
            <p class="text-xs-right">
              <v-btn
                outline
                large
                color="deep-purple accent-4"
                @click="sellStock"
                :disabled="
                  insufficientQuantity ||
                    quantity <= 0 ||
                    !Number.isInteger(quantity)
                "
                >{{ insufficientQuantity ? "Not enough" : "Sell" }}</v-btn
              >
            </p>
          </v-card-actions>
        </v-card>
      </v-flex>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "appStock",
  props: ["stock"],
  data: () => ({
    quantity: 0
  }),
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    ...mapActions({
      placeSellOrder: "sellStock"
    }),
    sellStock: function() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.placeSellOrder(order);
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
