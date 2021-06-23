<script>
import HomeProjectBox from "../../components/HomeProjectBox/HomeProjectBox";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation, Pagination } from "swiper/core";

SwiperCore.use([Navigation, Pagination]);

export default {
  props: ["project"],
  data() {
    return {
      swiper: null,
    };
  },
  components: {
    HomeProjectBox,
  },
  watch: {
    project() {
      if (this.project !== null) {
        this.$nextTick(() => {
          this.swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: false,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            breakpoints: {
              576: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              992: {
                slidesPerView: 2.5,
                spaceBetween: 40,
              },
              1200: {
                slidesPerView: 3.5,
                spaceBetween: 80,
              },
            },
          });
        });
      }
    },
  },
  mounted() {},
};
</script>
<template src="./template.html"></template>
<style src="./style.scss" lang="scss" scoped></style>
