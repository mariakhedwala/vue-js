<template>
  <div>
    <h3>Some User Details</h3>
    <p>User loaded has Id : {{ $route.params.id }}</p>
    <router-link
      tag="button"
      :to="{ name: 'userEdit', params: { id: $route.params.id }, query: { locale: 'en', q: 100 } }"
      class="btn btn-primary"
    >Edit user</router-link>
  </div>
</template>