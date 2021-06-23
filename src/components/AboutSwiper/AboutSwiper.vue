<script>
import Swiper from "swiper";
import "swiper/swiper-bundle.css";


export default {
  data() {
    return {
      swiper: null,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 10,
        breakpoints: {
          992: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        },
      });
    });
  },
};
</script>
<template src="./template.html"></template>
<style src="./style.scss" lang="scss" scoped></style>
