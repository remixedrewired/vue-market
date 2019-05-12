<template>
  <div class="orders">
    <div v-if="filteredOrders.length" class="orders__list">
      <Order
        v-for="order in filteredOrders"
        :key="order.id"
        :order="order"
        :user="findUserById(order.id)"
      />
    </div>
    <p v-else class="orders__message">There are no results...</p>
  </div>
</template>

<script>
import Order from "./Order/Order";
import users from "../../data/users";
import { mapGetters } from "vuex";

export default {
  name: "Orders",
  components: {
    Order
  },
  props: {
    orders: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      users
    };
  },
  computed: {
    ...mapGetters([
      "exchangeRateRangeSliderValue",
      "gramsRangeSliderValue",
      "sortBy"
    ]),
    filteredOrders() {
      const ordersFilteredByExchangeRate = this.filterByExchangeRate(
        this.sortedOrders
      );
      return this.filterByRange(ordersFilteredByExchangeRate);
    },

    sortedOrders() {
      switch (this.sortBy) {
        case "priceAsc":
          return this.sortOrdersBy("exchange_rate");
        case "priceDesc":
          return this.sortOrdersBy("exchange_rate").reverse();
        case "ratingAsc":
          return this.sortOrdersBy("rating");
        case "ratingDesc":
          return this.sortOrdersBy("rating").reverse();
        default:
          return this.orders;
      }
    }
  },
  methods: {
    findUserById(id) {
      return this.users.find(user => user.id === id);
    },
    filterByExchangeRate(arr) {
      const range = this.exchangeRateRangeSliderValue;

      return arr.filter(order => {
        return (
          order.exchange_rate >= range[0] &&
          order.exchange_rate <= range[range.length - 1]
        );
      });
    },
    filterByRange(arr) {
      return arr.filter(obj => {
        return obj.range[obj.range.length - 1] <= this.gramsRangeSliderValue;
      });
    },
    sortOrdersBy(prop) {
      const ordersCopy = [...this.orders];

      return ordersCopy.sort((a, b) => {
        const valA = this.checkPropertyExistence(a, prop);
        const valB = this.checkPropertyExistence(b, prop);

        return valA - valB;
      });
    },
    checkPropertyExistence(obj, prop) {
      return obj[prop] ? obj[prop] : this.findUserById(obj.id)[prop];
    }
  }
};
</script>

<style scoped lang="scss">
.orders {
  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;

    @media (max-width: 1440px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 1200px) {
      grid-template-columns: none;
    }
  }

  &__message {
    text-align: center;
    font-size: 24px;
  }
}
</style>
