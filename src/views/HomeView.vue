<script setup>
import { onMounted } from "vue";
</script>

<template>
  <div class="home">
    <div class="band">
      <div class="band-right">
        <svg
          class="band-img"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#253E67"
            d="M47.5,-70.7C62.1,-64.6,74.7,-52.2,81,-37.3C87.3,-22.4,87.3,-4.9,84.2,11.6C81,28.1,74.7,43.7,64.2,55.2C53.6,66.8,38.8,74.3,22.7,80.3C6.6,86.4,-10.7,91.1,-25.3,86.6C-39.9,82.2,-51.7,68.6,-62.2,54.8C-72.8,41,-82.1,27.1,-85.7,11.5C-89.3,-4.2,-87.1,-21.5,-80.5,-37C-73.8,-52.6,-62.7,-66.4,-48.5,-72.7C-34.3,-79,-17.2,-77.7,-0.3,-77.2C16.5,-76.7,32.9,-76.8,47.5,-70.7Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div class="band-left">
        <h2></h2>
      </div>
    </div>
  </div>
</template>

<style scoped>
.band-img {
  width: 300px;
}
</style>
