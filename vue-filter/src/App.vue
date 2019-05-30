<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h2>Filters and mixins</h2>
        <p>{{ text | toUppercase | to-lowercase }}</p>
        <hr>
        <input v-model="filterText">
        <ul>
          <li v-for="fruit in filteredFruits">{{ fruit }}</li>
        </ul>
        <hr>
        <app-list></app-list>
      </div>
    </div>
  </div>
</template>

<script>
import { fruitMixin } from "./fruitMixin";
import List from "./List.vue";

export default {
  data() {
    return {
      text: "hello maria"
    };
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    }
  },
  components: {
    appList: List
  },
  mixins: [fruitMixin]
};
</script>        

<style>
</style>
