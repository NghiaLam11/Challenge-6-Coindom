<template>
    <div class="dashboard">
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
  </template>
  
  <script setup>
  import { onMounted, ref } from "vue";
  import Vue3autocounter from "vue3-autocounter";
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
  const dataChart = ref({
    labels: [],
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
        if (dataMoney.Information == null) {
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
  });
  </script>
  <style scoped>
  .dashboard {
    padding: 5rem 1rem;
  }
  .cate-title {
    padding-bottom: 5rem;
    font-size: 3rem;
    text-align: center;
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
  </style>
  