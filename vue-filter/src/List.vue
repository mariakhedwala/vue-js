<template>
  <div>
    <h2>Filters and mixins</h2>
    <input v-model="filterText">
    <ul>
      <li v-for="fruit in filteredFruits">{{ fruit }}</li>
    </ul>
  </div>
</template>

<script>
import { fruitMixin } from "./fruitMixin";
export default {
  mixins: [fruitMixin]
};
</script>        

<style>
</style>
