<script setup>
import { ref, onMounted } from "vue";
import Navbar from "./components/NavHeader.vue";
const body = ref();
window.addEventListener("scroll", (e) => {
  if (window.scrollY > 0) {
    body.value.style.marginTop = "87px";
  } else {
    body.value.style.marginTop = "0";
  }
});
</script>

<template>
  <div class="app">
    <div>
      <Navbar />
    </div>
    <div ref="body" class="body"><router-view></router-view></div>
  </div>
</template>

<style scoped>
.app {
  height: 3000px;
}
.body {
  max-width: 1245px;
  margin: 0 auto;
}
</style>
