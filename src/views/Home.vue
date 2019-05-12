<template>
  <div id="app">
    <div class="app-container">
      <section class="app-section">
        <h2 class="app-h2">Filters</h2>
        <Filters :orders="orders"/>
      </section>

      <section class="app-section">
        <h2 class="app-h2">Sort from:</h2>
        <Sorting/>
      </section>

      <section class="app-section">
        <h2 class="app-h2">Orders</h2>
        <Orders :orders="orders"/>
      </section>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Filters from "../components/Filters/Filters";
import Sorting from "../components/Sorting/Sorting";
import Orders from "../components/Orders/Orders";
import orders from "../data/orders.json";

export default {
  name: "home",
  components: {
    Filters,
    Sorting,
    Orders
  },
  data() {
    return {
      orders
    };
  }
};
</script>


<style lang="scss">
body {
  font: 300 18px/1.3 "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  background-color: #fafafa;
}

.app-container {
  padding: 40px 5vw;
  @media (max-width: 640px) {
    padding: 30px;
  }
}

.app-section + .app-section {
  margin-top: 70px;
}

.app-h2 {
  margin-top: 0;
  margin-bottom: 35px;
}
</style>
