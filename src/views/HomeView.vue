<template>
  <div class="home">
    <div class="band">
      <div class="band-left">
        <h2>Coindom sit amet consectetur adipisicing elit</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi tenetur
          minus facilis, delectus, incidunt nemo at eius quae dolores accusamus
          inventore animi quisquam quas.
        </p>
      </div>
      <div class="band-right">
        <img class="band-analysis" src="../images/analysis.png" alt="" />
        <img class="band-bitcoin" src="../images/bitcoin.png" alt="" />
        <img class="band-eth" src="../images/ethereum.png" alt="" />
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
    </div>
    <div class="coin">
      <div class="coin-left">
        <svg class="coin-img" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#1E293B"
            d="M41,-69.9C55,-62.8,69.7,-55.8,78.5,-44.1C87.2,-32.5,90,-16.2,90.3,0.2C90.6,16.6,88.5,33.2,80.4,46.1C72.4,59,58.5,68.2,44.2,76.4C29.8,84.7,14.9,92.1,0.8,90.7C-13.3,89.4,-26.6,79.2,-40.2,70.5C-53.8,61.8,-67.8,54.5,-76.3,43C-84.8,31.4,-87.8,15.7,-85.5,1.4C-83.1,-13,-75.3,-26,-67.2,-38.1C-59,-50.3,-50.6,-61.7,-39.4,-70.4C-28.1,-79,-14.1,-84.9,-0.3,-84.4C13.5,-83.9,26.9,-76.9,41,-69.9Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div class="coin-right">
        <h2>Coindom sit amet consectetur adipisicing elit</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi tenetur
          minus facilis, delectus, incidunt nemo at eius quae dolores accusamus
          inventore animi quisquam quas.
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted } from "vue";

gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
  let tl = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: ".band-analysis",
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    },
  });
  // add animations and labels to the timeline
  tl.addLabel("start")
    .from(".band-bitcoin", {
      y: 0,
      x: 0,
      scale: 1,
      ease: "power2.out",
    })
    .to(".band-bitcoin", {
      y: 640,
      x: -460,
      scale: 5,
      ease: "power2.out",
    });
});
</script>
<style scoped>
.band {
  display: flex;
  align-items: center;
  padding-top: 5rem;
}
.band-right,
.band-left {
  flex-basis: 50%;
}

.band-left {
  padding: 0 2rem 0 1rem;
}
.band-left h2 {
  font-size: 3rem;
  line-height: 3rem;
  margin-bottom: 2rem;
}
.band-left p {
  font-size: 1rem;
  line-height: 1.5rem;
}
.band-right {
  position: relative;
}
.band-analysis {
  width: 400px;
  position: absolute;
  left: calc(50% - (400px / 2));
}
.band-img {
  width: 300px;
  margin: 0 auto;
}
.band-bitcoin,
.band-eth {
  width: 45px;
  position: absolute;
}
.band-bitcoin {
  left: 22%;
  top: 90px;
}
.band-eth {
  right: 20%;
  top: 10px;
}
.coin {
  margin-top: 15rem;
  display: flex;
  align-items: center;
}
.coin-left,
.coin-right {
  width: 50%;
}
.coin-right {
  padding: 0 1.5rem;
}
.coin-right h2 {
  font-size: 3rem;
  line-height: 3rem;
  margin-bottom: 2rem;
}
.coin-right p {
  font-size: 1rem;
  line-height: 1.5rem;
}
.coin-img {
  width: 450px;
  margin: 0 auto;
}
</style>
