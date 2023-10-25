<script setup>
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="app">
    <div>
      <Navbar/>
    </div>

    <router-view></router-view>
  </div>
</template>

<style scoped>
.app {
  max-width: 1245px;
  height: 3000px;
  margin: 0 auto;
}
</style>
