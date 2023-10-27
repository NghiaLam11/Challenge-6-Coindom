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
        <svg
          class="coin-img"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
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
    <div class="chart">
      <h2 class="cate-title">DASHBOARD</h2>

      <Line
        v-if="dataChart.labels.length !== 0"
        ref="chart"
        :data="dataChart"
        :options="options"
      />
      <div class="parameter" v-if="cryptos.length > 0">
        <div class="coin-name">
          <img src="../images/binance.png" alt="" />
          <div class="coin-infor">
            <span class="title"
              >Bitcoin ({{ new Date().toLocaleDateString() }})</span
            >
            <h3 class="price"><span>BTC/USD</span></h3>
          </div>
        </div>
        <div class="coin-name">
          <div class="coin-infor">
            <span class="title">Open</span>
            <h3 class="price">
              <Vue3autocounter
                :startAmount="0"
                :endAmount="Number(cryptos[0]['1b. open (USD)'])"
                :duration="3"
                prefix="$"
                suffix="USD"
                separator=","
                decimalSeparator="."
                :decimals="2"
                :autoinit="true"
              />
            </h3>
          </div>
        </div>
        <div class="coin-name">
          <div class="coin-infor">
            <span class="title">CLose</span>
            <h3 class="price">
              <Vue3autocounter
                :startAmount="0"
                :endAmount="Number(cryptos[0]['4b. close (USD)'])"
                :duration="3"
                prefix="$"
                suffix="USD"
                separator=","
                decimalSeparator="."
                :decimals="2"
                :autoinit="true"
              />
            </h3>
          </div>
        </div>
        <div class="coin-name">
          <div class="coin-infor">
            <span class="title">High</span>
            <h3 class="price high-price">
              <Vue3autocounter
                :startAmount="0"
                :endAmount="Number(cryptos[0]['2b. high (USD)'])"
                :duration="3"
                prefix="$"
                suffix="USD"
                separator=","
                decimalSeparator="."
                :decimals="2"
                :autoinit="true"
              />
            </h3>
          </div>
        </div>
        <div class="coin-name">
          <div class="coin-infor">
            <span class="title">Low</span>
            <h3 class="price low-price">
              <Vue3autocounter
                :startAmount="0"
                :endAmount="Number(cryptos[0]['3b. low (USD)'])"
                :duration="3"
                prefix="$"
                suffix="USD"
                separator=","
                decimalSeparator="."
                :decimals="2"
                :autoinit="true"
              />
            </h3>
          </div>
        </div>
      </div>
      <h2 class="limited-fetch" v-else>OPPS! SORRY THE API HAD LIMITED</h2>
    </div>
    <div class="news">
      <h2 class="cate-title">NEWS</h2>
      <Carousel
        :breakpoints="breakpoints"
        :autoplay="5000"
        :transition="500"
        :pause-autoplay-on-hover="true"
      >
        <Slide v-for="slide in 10" :key="slide">
          <div class="carousel-item">
            <div class="news-item">
              <img src="../images/coin news.jpg" alt="" class="news-img" />
              <div class="news-text">
                <h4>Bitcoin pariatur dolores provident iure nulla?</h4>
                <p class="multiline-ellipsis">
                  Lorem ipsum dolor sit amet consectetur sicing elit. Excepturi,
                  debitis atque delectus placeat quae facilis. Eum eaque magnam
                  voluptatem veniam, esse recusandae ipsa nemo quaerat labore
                  illo culpa laboriosam ex?
                </p>
              </div>
            </div>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
  </div>
</template>
<script setup>
import { gsap } from "gsap";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import Vue3autocounter from "vue3-autocounter";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted, ref } from "vue";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Filler,
} from "chart.js";
import { Line } from "vue-chartjs";
const chart = ref();
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Filler
);
gsap.registerPlugin(ScrollTrigger);
const breakpoints = {
  0: {
    itemsToShow: 1,
    snapAlign: "start",
  },
  700: {
    itemsToShow: 2,
    snapAlign: "start",
  },
};
const dataChart = ref({
  labels: [
    // "label1",
    // "label2",
    // "label3",
    // "label4",
    // "label5",
    // "label6",
    // "label7",
    // "label8",
  ],
  datasets: [
    {
      label: "Volume",
      borderColor: "#fff",
      animations: {
        y: {
          easing: "ease",
        },
      },
      fill: true,
      backgroundColor: (ctx) => {
        const canvas = ctx.chart.ctx;
        const gradient = canvas.createLinearGradient(0, 0, 0, 400);

        gradient.addColorStop(1, "rgb(34, 211, 238, 0.8)");

        gradient.addColorStop(0, "rgb(125, 211, 252, 1)");
        return gradient;
      },
      borderWidth: 2,
      tension: 0.2,
      pointBackgroundColor: "#fff",
      data: [],
    },
  ],
});
const options = ref({
  responsive: true,
});
const cryptos = ref([]);

onMounted(() => {
  fetch(
    `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=CNY&apikey=UJ0QANCY81EVLMJI`
  )
    .then((response) => response.json())
    .then((dataMoney) => {
      console.log(dataMoney);
      if (dataMoney.length > 1) {
        let moneys = dataMoney["Time Series (Digital Currency Daily)"];
        dataChart.value.labels = [];
        for (const key in moneys) {
          if (moneys.hasOwnProperty(key) && cryptos.value.length < 8) {
            cryptos.value.push({ date: key, ...moneys[key] });
            dataChart.value.labels.unshift(key);
            dataChart.value.datasets[0].data.unshift(
              Number(moneys[key]["5. volume"])
            );
          }
        }
      }
    });
  let bitcoin = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: ".band-analysis",
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    },
  });
  // add animations and labels to the timeline
  bitcoin
    .addLabel("start", 3)
    .from(".band-bitcoin", {
      y: 0,
      x: 0,
      scale: 1,
      ease: "power2.out",
    })
    .from(".band-eth", {
      y: 0,
      x: 0,
      scale: 1,
      ease: "power2.out",
      delay: 2,
    })
    .to(".band-bitcoin", {
      y: 640,
      x: -460,
      scale: 5,
      duration: 2,
      ease: "circ.out",
    })
    .to(".band-eth", {
      y: 800,
      x: -660,
      scale: 2,
      duration: 1,
      ease: "circ.out",
    });
  let chart = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: ".chart",
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    },
  });
  chart
    .addLabel("start")
    .from(".chart", {
      scaleY: 0.3,
      display: "none",
      opacity: 0,
    })
    .to(
      ".chart",
      {
        scaleY: 1,
        display: "block",
        opacity: 1,
      },
      "+=2"
    );
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
.chart {
  margin-top: 5rem;
}
.parameter {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
}

.coin-name {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  background-color: #1e293b;
}
.coin-infor {
  padding: 0.4rem;
}
.coin-infor .title {
  opacity: 0.6;
  font-size: 0.8rem;
}
.coin-infor .price span {
  font-size: 1rem;
  font-weight: 500;
}
.coin-name img {
  width: 30px;
}
.low-price {
  color: #ff0000;
}
.high-price {
  color: #00ff5e;
}
.limited-fetch {
  text-align: center;
}
.news {
  margin-top: 5rem;
}
.cate-title {
  font-size: 3rem;
  text-align: center;
  margin-bottom: 4rem;
}
.news-item {
  display: flex;
  cursor: pointer;
}
.news-item .news-img {
  filter: grayscale(10);
  width: 40%;
  object-fit: cover;
  border-radius: 10px;
}
.news-item:hover .news-img {
  filter: grayscale(0);
}
.news-text {
  text-align: left;
  padding: 1rem;
}
.news-text h4 {
  font-size: 1.3rem;
  line-height: 1.3rem;
  margin-bottom: 0.5rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* start showing ellipsis when 3rd line is reached */
  white-space: pre-wrap;
}
.news-text p {
  font-size: 0.9rem;
  line-height: 1.1rem;
  opacity: 0.7;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4; /* start showing ellipsis when 3rd line is reached */
  white-space: pre-wrap;
}
.multiline-ellipsis {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4; /* start showing ellipsis when 3rd line is reached */
  white-space: pre-wrap; /* let the text wrap preserving spaces */
}
</style>
