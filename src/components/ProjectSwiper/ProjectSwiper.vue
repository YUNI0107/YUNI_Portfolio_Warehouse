<script>
import ProjectPicModal from "@/components/ProjectPicModal/ProjectPicModal";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/thumbs/thumbs.min.css";

import SwiperCore, { Navigation, Thumbs } from "swiper/core";

SwiperCore.use([Navigation, Thumbs]);

export default {
  props: ["project", "router_id"],
  data() {
    return {
      modal_show: false,
      first_init: true,
      swiper1: null,
      swiper2: null,
      pic_num: 0,
    };
  },
  methods: {
    changeSwiper() {
      if (this.router_id !== null && this.project !== null) {
        let vue_this = this;
        this.$nextTick(() => {
          this.swiper1 = new Swiper(".mySwiper", {
            spaceBetween: 20,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            breakpoints: {
              576: {
                slidesPerView: 6,
                spaceBetween: 20,
              },
            },
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
    swiperClick() {
      this.pic_num = this.swiper2.clickedIndex;
      this.modal_show = true;
      if (this.first_init == true) {
        this.$refs.modal.$emit("modalOpen", true);
      } else {
        this.$refs.modal.$emit("modalOpen", false);
      }
      this.first_init = false;
    },
    modalClose() {
      this.modal_show = false;
    },
    numReset() {
      this.$refs.modal.modalDestory();
      this.pic_num = 0;
    },
  },
  components: {
    ProjectPicModal,
  },
  watch: {
    project() {
      this.changeSwiper();
    },
  },
  mounted() {
    this.changeSwiper();
  },
};
</script>
<template src="./template.html"></template>
<style src="./style.scss" lang="scss" scoped></style>
