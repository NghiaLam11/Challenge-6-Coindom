<template>
  <div ref="containerHeader" class="container-header">
    <div class="header">
      <ul class="logo">
        <li>Coindom</li>
      </ul>
      <ul class="nav">
        <li class="nav-item">
          <router-link active-class="active" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link active-class="active" to="/dashboard"
            >Dash Board</router-link
          >
        </li>
        <li class="nav-item">
          <router-link active-class="active" to="/coin">Coin</router-link>
        </li>
        <li class="nav-item">
          <router-link active-class="active" to="/about">About Us</router-link>
        </li>
      </ul>
      <ul class="coin">
        <li class="coin-item" @click="onToggleMode">
          <div class="spin"></div>
          <img class="img" src="../images/crypto.png" alt="Coin image" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const containerHeader = ref();

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 0) {
    containerHeader.value.style.backgroundColor = "rgba(0,0,0,0.2)";
    containerHeader.value.style.position = "fixed";
    containerHeader.value.style.top = "0";
    containerHeader.value.style.left = "0";
    containerHeader.value.style.right = "0";
  } else {
    containerHeader.value.style.backgroundColor = "transparent";
    containerHeader.value.style.position = "static";
  }
});
const isToggle = ref(false);
const onToggleMode = () => {
  const body = document.querySelector("body");
  const spin = document.querySelector(".spin");
  const img = document.querySelector(".img");
  const coinName = document.querySelectorAll(".coin-name");
  if (!isToggle.value) {
    isToggle.value = true;
    body.style.backgroundImage = "linear-gradient(to left, #f0f9ff, #dbeafe)";
    body.style.color = "black";
    spin.style.border = "2px dashed black";
    img.style.filter = "grayscale(100%)";
    spin.style.boxShadow = "0 0 1rem 0.1rem #cbd5e1";
    for (var i = 0; i < coinName.length; i++) {
      coinName[i].style.backgroundColor = "white";
    }
  } else {
    isToggle.value = false;
    body.style.backgroundImage = "linear-gradient(to left, #0D1D32, #1C3150)";
    body.style.color = "white";
    spin.style.border = "2px dashed yellow";
    img.style.filter = "none";
    spin.style.boxShadow = "0 0 1rem 0.1rem rgb(255, 255, 0, 0.3)";
    for (var i = 0; i < coinName.length; i++) {
      coinName[i].style.backgroundColor = "#1e293b";
    }
  }
};
</script>

<style scoped>
.active {
  color: aqua;
}
.container-header {
  z-index: 99;
}
.header {
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1245px;
  margin: 0 auto;
}
.logo li {
  font-family: monospace;
  font-weight: bold;
  font-size: 1.5rem;
}
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 40%;
}
.nav li {
  padding: 0.5rem 1rem;
}
.coin .img {
  padding: 8px;
  height: 55px;
  width: 55px;
}
.coin .coin-item {
  position: relative;
  cursor: pointer;
}
.coin .spin {
  position: absolute;
  height: 55px;
  width: 55px;
  top: calc(50% - (55px / 2));
  right: calc(50% - (55px / 2));
  transition: all 0.5s linear;
  box-shadow: 0 0 1rem 0.1rem rgb(255, 255, 0, 0.3);
  border-radius: 50%;
  border: 2px dashed yellow;
  z-index: 2;
  background-color: transparent;
  animation: spinBorderCoin 7s linear infinite;
}
.coin:hover .spin {
  scale: 1.1;
}
@keyframes spinBorderCoin {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(180deg);
  }
}
</style>
