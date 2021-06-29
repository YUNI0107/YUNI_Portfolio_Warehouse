<script>
import gsap from "gsap";
import * as Clipboard from 'clipboard';
import LangModal from "@/components/LangModal/LangModal";

export default {
  data() {
    return {
      current_pic: 1,
      tl: null,
      nav_open: false,
      lang_modal: false,
      modal_text: ["English", "Language"],
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
    icon_show() {
      let show =
        this.location == "about" ||
        this.location == "project" ||
        this.location == "home";
      return show;
    },
    lang() {
      return this.$i18n.locale;
    },
  },
  components: {
    LangModal,
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
      // this.tl.reverse();
      this.tl.progress(0); 
      this.tl.pause(); 
    },
    changeLang() {
      this.modal_text =
        this.lang == "ch" ? ["English", "Language"] : ["中文", "切換語言"];
      this.lang_modal = true;
      setTimeout(() => {
        this.lang_modal = false;
      }, 1000);

      let c_lang = this.lang == "en" ? "ch" : "en";
      setTimeout(() => {
        this.$root.$i18n.locale = c_lang;
      }, 500);
    },
    mailCopyLink(){
      this.$refs.tool.style.opacity = 1;
      let timer = setTimeout(()=>{
       this.$refs.tool.style.transition = .5 + 's';
        this.$refs.tool.style.opacity = 0;
        let in_timer = setTimeout(()=>{
          this.$refs.tool.style.transition = 0 + 's';
          clearTimeout(timer);
          clearTimeout(in_timer);
        },500)
      },500)
    },
    mailCopyContact(){
      this.$refs.tool_c.style.opacity = 1;
      let timer = setTimeout(()=>{
       this.$refs.tool_c.style.transition = .5 + 's';
        this.$refs.tool_c.style.opacity = 0;
        let in_timer = setTimeout(()=>{
          this.$refs.tool_c.style.transition = 0 + 's';
          clearTimeout(timer);
          clearTimeout(in_timer);
        },500)
      },500)
    },
  },
  watch: {},
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

    this.$refs.middle_part.style.transition = 0;
    this.$refs.second_section.style.transition = 0;

    this.$nextTick(()=>{
      new Clipboard('.mail_btn');
    })
  },
  destroyed(){
    this.tl.clear();
  }
};
</script>
<template src="./template.html"></template>
<style src="./style.scss" lang="scss" scoped></style>
