<template>
  <div>
    <h1>The User Page</h1>
    <hr>
    <!-- <p>Loaded Id: {{ id }}</p> -->
    <button
      @click="navigateToHome"
      class="btn btn-primary"
    >Go to home</button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    navigateToHome() {
      this.$router.push("/");
    }
  }
};
</script>