<script setup>
import { onMounted } from "vue";
const body = document.querySelector("body");
const onLight = () => {
  body.style.backgroundColor = "white";
  body.style.color = "black";
};
</script>

<template>
  <div>
    <button @click="onLight">LIGHTNING</button>
    <i class="fa-solid fa-book"></i
    ><span
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloremque
      distinctio possimus culpa. Reprehenderit dolorum illo ex error omnis
      molestias eius tempora, optio aut fuga amet incidunt quaerat, veniam
      repellendus!</span
    >
  </div>
</template>

<style scoped></style>
