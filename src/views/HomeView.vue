<template>
  <div class="home">
    <div class="band">
      <div class="band-left">
        <h2>Coindom sit amet consectetur adipisicing</h2>
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
        <h2>Coindom sit amet consectetur elit</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi tenetur
          minus facilis, delectus, incidunt nemo at eius quae dolores accusamus
          inventore animi quisquam quas.
        </p>
      </div>
    </div>
    <div class="dashboard">
      <DashBoard />
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
          <a href="" class="carousel-item">
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
          </a>
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
import DashBoard from "../components/DashBoard.vue";
import { gsap } from "gsap";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { onMounted, ref } from "vue";
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

onMounted(() => {
  let mm = gsap.matchMedia();
  mm.add("(min-width: 964px)", () => {
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
    let dashboard = gsap.timeline({
      scrollTrigger: {
        trigger: ".dashboard",
        scrub: 1,
      },
    });
    dashboard
      .addLabel("start")
      .from(".dashboard", {
        scaleY: 0.3,
        display: "none",
        opacity: 0,
      })
      .to(
        ".dashboard",
        {
          scaleY: 1,
          display: "block",
          opacity: 1,
        },
        "+=2"
      );
  });
  mm.add("(min-width: 734px) and (max-width: 964px)", () => {
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
        x: -330,
        scale: 5,
        duration: 2,
        ease: "circ.out",
      })
      .to(".band-eth", {
        y: 800,
        x: -400,
        scale: 2,
        duration: 1,
        ease: "circ.out",
      });
    let dashboard = gsap.timeline({
      scrollTrigger: {
        trigger: ".dashboard",
        scrub: 1,
      },
    });
    dashboard
      .addLabel("start")
      .from(".dashboard", {
        scaleY: 0.3,
        display: "none",
        opacity: 0,
      })
      .to(
        ".dashboard",
        {
          scaleY: 1,
          display: "block",
          opacity: 1,
        },
        "+=2"
      );
  });
  mm.add("(max-width: 734px)", () => {
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
        y: 720,
        x: 150,
        scale: 4,
        duration: 2,
        ease: "circ.out",
      })
      .to(".band-eth", {
        y: 820,
        x: 10,
        scale: 1.3,
        duration: 1,
        ease: "circ.out",
      });
    let dashboard = gsap.timeline({
      scrollTrigger: {
        trigger: ".dashboard",
        scrub: 1,
      },
    });
    dashboard
      .addLabel("start")
      .from(".dashboard", {
        scaleY: 0.3,
        display: "none",
        opacity: 0,
      })
      .to(
        ".dashboard",
        {
          scaleY: 1,
          display: "block",
          opacity: 1,
        },
        "+=2"
      );
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
.news {
  margin-top: 5rem;
  margin-bottom: 5rem;
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
@media screen and (max-width: 734px) {
  .band {
    flex-direction: column;
  }
  .band-right {
    margin-top: 3rem;
  }
  .band-bitcoin {
    left: -10%;
    top: 60px;
  }
  .coin {
    flex-direction: column-reverse;
    margin-top: 4rem;
  }
  .coin-right {
    width: 100%;
    padding-bottom: 2rem;
  }
  .news {
    padding: 0 0.8rem;
  }
}
</style>
