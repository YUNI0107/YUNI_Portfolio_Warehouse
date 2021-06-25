<script>
import AllProjectBox from "@/components/AllProjectBox/AllProjectBox";
import FooterSection from "@/components/FooterSection/FooterSection";

import axios from "axios";
export default {
  data() {
    return {
      cd_class: "side",
      currentTop: 0,
      window_height: 0,
      side_top: 0,
      small_top: 0,
      uiux_top: 0,
      side_project: [],
      small_project: [],
      uiux_project: [],
    };
  },
  components: {
    FooterSection,
    AllProjectBox,
  },
  methods: {
    getScroll() {
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      this.currentTop = scrollTop;
    },
    resizeTop(){
        this.window_height = window.innerHeight / 2;
        this.side_top = this.$refs.side.offsetTop + this.window_height;
        this.small_top = this.$refs.small.offsetTop + this.window_height;
        this.uiux_top = this.$refs.uiux.offsetTop + this.window_height;
    },
    scrollProject(tag){
        let num = (tag == "side") ? this.side_top : (tag == "small") ? this.small_top : this.uiux_top;
        document.documentElement.scrollTop = num - this.window_height -150;
        document.body.scrollTop = num - this.window_height -150;
    }
  },
  watch: {
    currentTop() {
      this.cd_class =
        this.currentTop < this.side_top
          ? "side"
          : this.currentTop < this.small_top
          ? "small"
          : "uiux";
    },
    cd_class(){
      let num = this.cd_class == "side" ? 0 : this.cd_class == "small" ? 45 : 90;
      this.$refs.cd.style.transform = `rotate(${num}deg)`
    }
  },
  mounted() {
    axios.get("project_simple.json").then((res) => {
      this.side_project = res.data.filter((item) => item.cate == "side");
      this.small_project = res.data.filter((item) => item.cate == "small");
      this.uiux_project = res.data.filter((item) => item.cate == "uiux");

      this.$nextTick(() => {
        this.resizeTop();
      });
    });

    window.addEventListener("scroll", this.getScroll);
    window.addEventListener("resize", this.resizeTop);

    let html = document.querySelector("html");
    html.style.scrollBehavior = "smooth";
  },
  destroyed(){
    window.removeEventListener("scroll", this.getScroll);
    window.removeEventListener("resize", this.resizeTop);
    let html = document.querySelector("html");
    html.style.scrollBehavior = "auto";
  }
};
</script>
<template src="./template.html"></template>
<style src="./style.scss" lang="scss" scoped></style>
