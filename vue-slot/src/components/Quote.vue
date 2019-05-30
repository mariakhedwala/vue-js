<template>
  <div class="wrapper">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper {
  border: 1px solid black;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
