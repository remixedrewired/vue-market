<template>
  <div class="order">
    <section class="order__box">
      <h4 class="order__title">Order info</h4>
      <div class="order__row">
        <strong class="order__highlighted">Exchange Rate:</strong>
        {{ order.exchange_rate | addCurrency }}
      </div>
      <div class="order__row">
        <strong class="order__highlighted">Weight:</strong>
        from
        <strong
          class="order__highlighted order__highlighted--medium"
        >{{ order.range[0] | addGrams }}</strong>
        to
        <strong
          class="order__highlighted order__highlighted--medium"
        >{{ order.range[order.range.length -1] | addGrams }}</strong>
      </div>
    </section>

    <section class="order__box">
      <h4 class="order__title">User info</h4>
      <div class="order__row">
        <strong class="order__highlighted">Name:</strong>
        {{ user.name }}
      </div>
      <div class="order__row">
        <strong class="order__highlighted">Rating:</strong>
        {{ user.rating }}
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Order",
  filters: {
    addGrams(value) {
      return `${value}g`;
    },
    addCurrency(value) {
      return `${value}$`;
    }
  },
  props: {
    order: {
      type: Object,
      required: true
    },
    user: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
$borderColor: #eaeaea;

.order {
  min-width: 0;
  background-color: #fff;
  box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
  border: 1px solid $borderColor;

  &__title {
    margin-top: 0;
    margin-bottom: 15px;
    font-size: 22px;
    text-align: center;
  }

  &__box {
    & + & {
      border-top: 1px solid $borderColor;
      margin-top: 20px;
      padding-top: 20px;
    }
  }

  &__row {
    & + & {
      margin-top: 10px;
    }
  }

  &__highlighted {
    &--medium {
      font-weight: 500;
    }
  }
}
</style>