<script>
import LittleBtn from "@/components/LittleBtn/LittleBtn";
import AboutSwiper from "@/components/AboutSwiper/AboutSwiper";
import FooterSection from "@/components/FooterSection/FooterSection";

export default {
  data() {
    return {
      personality_list: ["Ambition", "Creative", "Enthusiasm", "Improving"],
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
      com_list: [
        { name: "uiux", text: "UI/UX" },
        { name: "visual", text: "Visual Design software" },
        { name: "ae", text: "Motion Graphic" },
      ],
    };
  },
  components: {
    AboutSwiper,
    FooterSection,
    LittleBtn,
  },
};
</script>

<template src="./template.html"></template>
<style src="./style.scss" lang="scss" scoped></style>
