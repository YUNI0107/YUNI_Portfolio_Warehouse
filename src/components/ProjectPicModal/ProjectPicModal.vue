<script>
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation } from "swiper/core";

SwiperCore.use([Navigation]);

export default {
  props: ["pic_num", "project"],
  data() {
    return {
      swiper: null,
    };
  },
  methods: {
    modalOpen() {
      this.$nextTick(() => {
        this.swiper.update();
        this.swiper.slideTo(this.pic_num, 0);
      });
    },
    modalClose() {
      this.$emit("modalClose");
    },
    modalDestory() {
      if(this.swiper){
        this.swiper.slideTo(0, 0);
      }
    },
  },
  mounted() {
    this.$on("modalOpen", (res) => {
      if (res) {
        this.$nextTick(() => {
          this.swiper = new Swiper(".mySwiperModal", {
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
          this.modalOpen();
        });
      } else {
        this.modalOpen();
      }
    });
  },
};
</script>
<template src="./template.html"></template>
<style src="./style.scss" lang="scss" scoped></style>
