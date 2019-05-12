<template>
  <section class="range-filter">
    <h3 class="range-filter__title">
      <slot name="title"></slot>
    </h3>
    <VueSlider
      v-model="rangeSettings.value"
      @change="setRangeSliderValue({ property: statePropertyToSet, value: $event })"
      :min="min"
      :max="max"
      :formatter="rangeSettings.formatter"
    />
  </section>
</template>

<script>
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/material.css";

import { mapMutations } from "vuex";
import { constants } from "crypto";

export default {
  name: "RangeFilter",
  components: {
    VueSlider
  },
  props: {
    min: {
      type: Number,
      required: false
    },
    max: {
      type: Number,
      required: true
    },
    measure: {
      type: String,
      required: true
    },
    statePropertyToSet: {
      type: String,
      required: true
    }
  },
  created() {
    this.$store.commit("setRangeSliderValue", {
      property: this.statePropertyToSet,
      value: this.min ? [this.min, this.max] : this.max
    });
  },
  data() {
    return {
      rangeSettings: {
        value: this.min ? [this.min, this.max] : this.max,
        formatter: `{value} ${this.measure}`
      }
    };
  },
  methods: mapMutations(["setRangeSliderValue"])
};
</script>

<style scoped lang="scss">
.range-filter {
  &__title {
    margin-top: 0;
    margin-bottom: 40px;
  }
}
</style>
