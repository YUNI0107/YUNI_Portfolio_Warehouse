<script>
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/thumbs/thumbs.min.css"

import SwiperCore, { Navigation, Thumbs} from "swiper/core";

SwiperCore.use([Navigation, Thumbs]);

export default {
  props: ["project","router_id"],
  data() {
    return {
      swiper1: null,
      swiper2: null,
    };
  },
  watch: {
    project() {
      console.log(this.router_id);
      console.log(this.project);
      if (this.router_id !== null && this.project !== null) {
        let vue_this = this;
        this.$nextTick(() => {
          console.log(0);
          this.swiper1 = new Swiper(".mySwiper", {
            spaceBetween: 20,
            slidesPerView: 6,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
          });
          this.swiper2 = new Swiper(".mySwiper2", {
            spaceBetween: 10,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            thumbs: {
              swiper: vue_this.swiper1,
            },
          });
        });
      }
    },
  },
};
</script>
<template src="./template.html"></template>
<style src="./style.scss" lang="scss" scoped></style>
