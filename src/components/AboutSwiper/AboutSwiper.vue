<script>
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

import AboutPicModal from '@/components/AboutPicModal/AboutPicModal'


export default {
  data() {
    return {
      swiper: null,
      modal_show: false,
      pic_num: null,
    };
  },
  methods:{
    swiperClick(){
      this.pic_num = this.swiper.clickedIndex;
      this.modal_show = true;
    },
    modalClose(){
      this.modal_show = false;
    }
  },
  components:{
    AboutPicModal
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
