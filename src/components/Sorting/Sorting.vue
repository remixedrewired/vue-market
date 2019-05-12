<template>
  <ul class="sorting">
    <li class="sorting__item">
      <label class="radiobutton">
        <input type="radio" class="radiobutton__input" value="priceAsc" v-model="sortBy">
        <span class="radiobutton__caption">Low Price to High</span>
      </label>
    </li>
    <li class="sorting__item">
      <label class="radiobutton">
        <input type="radio" class="radiobutton__input" value="priceDesc" v-model="sortBy">
        <span class="radiobutton__caption">High price to Low</span>
      </label>
    </li>
    <li class="sorting__item">
      <label class="radiobutton">
        <input type="radio" class="radiobutton__input" value="ratingAsc" v-model="sortBy">
        <span class="radiobutton__caption">Low Rating to High</span>
      </label>
    </li>
    <li class="sorting__item">
      <label class="radiobutton">
        <input type="radio" class="radiobutton__input" value="ratingDesc" v-model="sortBy">
        <span class="radiobutton__caption">High Rating to Low</span>
      </label>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Sorting",
  computed: {
    sortBy: {
      get() {
        return this.$store.state.sortBy;
      },
      set(value) {
        this.$store.commit("setSortBy", value);
      }
    }
  }
};
</script>

<style scoped lang="scss">
.sorting {
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;

  &__item {
    &:not(:last-child) {
      margin-right: 20px;
    }
  }

  @media (max-width: 1024px) {
    text-align: center;
    flex-direction: column;
    &__item {
      &:not(:last-child) {
        margin-right: 0;
        margin-bottom: 10px;
      }
    }
  }
}

.radiobutton {
  white-space: nowrap;
  font-size: 16px;
  display: block;

  &__input {
    display: none;
    &:checked + .radiobutton__caption {
      background-color: #ff2952;
      color: #fff;
      box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.1);
    }
  }

  &__caption {
    display: block;
    padding: 15px 30px;
    border-radius: 10px;
    border: 1px solid #ccc;
  }
}
</style>
