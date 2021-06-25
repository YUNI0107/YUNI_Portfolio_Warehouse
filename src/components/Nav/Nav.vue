<script>
import gsap from "gsap";

export default {
  data() {
    return {
      current_pic: 1,
      tl: null,
      nav_open: false,
    };
  },
  computed: {
    location() {
      return this.$route.name;
    },
    location_text() {
      return this.location == "home"
        ? "Home"
        : this.location == "about"
        ? "About"
        : "Project";
    },
  },
  methods: {
    toggleNav() {
      this.nav_open = !this.nav_open;
      if (this.nav_open) {
        this.tl.play();
      } else {
        this.tl.reverse();
      }
    },
    mainPicChange(num) {
      this.current_pic = num;
    },
    routeChange(num) {
      this.mainPicChange(num);
      this.nav_open = false;
      this.tl.reverse();
    },
  },
  mounted() {
    this.tl = gsap.timeline({
      paused: true,
    });
    this.tl
      .to(".fix_part .top", {
        y: "-100%",
        duration: 0.2,
        ease: " power2. out out",
      })
      .from(
        ".middle_part",
        {
          x: "-100%",
          duration: 0.2,
          ease: " power2. out out",
        },
        "-=.4"
      )
      .from(".second_section", {
        x: "-100%",
        duration: 0.2,
        ease: " power2. out out",
      })
      .fromTo(
        ".middle_part .links .link_block",
        {
          y: -50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.1,
        },
        "-=0.3"
      )
      .from(
        ".little_pic",
        {
          scale: 0,
          duration: 0.3,
          ease: "elastic.outout(11,0.30.3)",
        },
        "-=0.3"
      );

    this.$refs.middle_part.style.transition = 0.5;
    this.$refs.second_section.style.transition = 0.5;
  },
};
</script>
<template src="./template.html"></template>
<style src="./style.scss" lang="scss" scoped></style>
