<script>
import Nav from "@/components/Nav/Nav.vue";
import LittleBtn from "@/components/LittleBtn/LittleBtn.vue";
import HomeSwiper from "@/components/HomeSwiper/HomeSwiper.vue";
import FooterSection from "@/components/FooterSection/FooterSection.vue";

import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      skill_list: [
        { name: "vue", text: "Vue" },
        { name: "nuxt", text: "Nuxt" },
        { name: "boot", text: "Bootstrap5" },
        { name: "git", text: "Git" },
        { name: "js", text: "Javascript" },
        { name: "css", text: "CSS3 Animation" },
        { name: "sass", text: "Scss / Sass" },
        { name: "gsap", text: "Gsap" },
      ],
      side_project: [],
      small_project: [],
      uiux_project: [],
    };
  },
  components: {
    Nav,
    LittleBtn,
    HomeSwiper,
    FooterSection
  },
  mounted() {
    axios.get("project_simple.json").then((res) => {
      this.side_project = res.data.filter((item) => item.cate == "side");
      this.small_project = res.data.filter((item) => item.cate == "small");
      this.uiux_project = res.data.filter((item) => item.cate == "uiux");
    });
  },
};
</script>

<template src="./template.html"></template>
<style src="./style.scss" lang="scss" scoped></style>
