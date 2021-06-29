<script>
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import SwiperCore, {Navigation} from "swiper/core";

SwiperCore.use([Navigation]);

export default {
  props: ["pic_num"],
  data() {
    return {
      swiper: null,
      active_num: 0,
    };
  },
  watch:{
      pic_num(){
          this.active_num = this.pic_num;
          this.swiper.update();
          this.swiper.slideTo(this.pic_num, 0)
      }
  },
  methods:{
      modalClose(){
          this.$emit("modalClose");
      },
      modalClick(tag){
          if(tag == '+' && this.active_num < 5){
              this.active_num++;
          }else if(tag == '-' && this.active_num > 0){
              this.active_num--;
          }
      }
  },
  mounted() {
    this.$nextTick(() => {
      this.swiper = new Swiper(".mySwiperModal", {
          navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    });
  },
};
</script>
<template src="./template.html"></template>
<style src="./style.scss" lang="scss" scoped></style>
