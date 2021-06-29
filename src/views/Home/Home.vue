<script>
import Nav from "@/components/Nav/Nav.vue";
import LittleBtn from "@/components/LittleBtn/LittleBtn.vue";
import HomeSwiper from "@/components/HomeSwiper/HomeSwiper.vue";
import FooterSection from "@/components/FooterSection/FooterSection.vue";

import axios from "axios";
import Rellax from "rellax";
import * as PIXI from "pixi.js";

import back_img from "../../assets/Home/back_water.jpg"
import ripple_img from "../../assets/Home/ripple.png"

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
      rellax: null,
      app: null,
      posX: 0,
    };
  },
  computed: {
    en_show() {
      return false;
    },
  },
  components: {
    Nav,
    LittleBtn,
    HomeSwiper,
    FooterSection,
  },
  mounted() {
    document.title = "Home - YUNI's PORTFOLIO";

    axios.get("project_simple.json").then((res) => {
      this.side_project = res.data.filter((item) => item.cate == "side");
      this.small_project = res.data.filter((item) => item.cate == "small");
      this.uiux_project = res.data.filter((item) => item.cate == "uiux");
    });

    this.rellax = new Rellax(".rellax", {
      breakpoints: [576, 768, 1200],
    });

    PIXI.utils.skipHello();
    this.app = new PIXI.Application({
      width: window.innerWidth,
      height: window.innerHeight,
      backgroundColor: 0xffffff,
      resizeTo: window,
    });

    document.querySelector(".back").appendChild(this.app.view);
    this.app.stage.interactive = true;
    let displacementSprite, displacementFilter, bg, vx;
    let container = new PIXI.Container();
    this.app.stage.addChild(container);
    this.app.loader
      .add('back',back_img)
      .add('ripple',ripple_img)
      .load(setup);

    let v_this = this;
    function setup() {
      // 放置精靈
      v_this.posX = v_this.app.renderer.width / 2;
      displacementSprite = new PIXI.Sprite(
        v_this.app.loader.resources.ripple.texture
      );
      displacementFilter = new PIXI.filters.DisplacementFilter(
        displacementSprite
      );
      displacementSprite.anchor.set(0.5);
      displacementSprite.x = v_this.app.renderer.width / 2;
      displacementSprite.y = v_this.app.renderer.height / 2;
      vx = displacementSprite.x;


      // 加上濾鏡
      v_this.app.stage.addChild(displacementSprite);
      container.filters = [displacementFilter];
      displacementFilter.scale.x = 0;
      displacementFilter.scale.y = 0;

      // 加上背景
      bg = new PIXI.Sprite(
        v_this.app.loader.resources.back.texture
      );
      bg.width = v_this.app.renderer.width;
      bg.height = v_this.app.renderer.height;
      container.addChild(bg);
      v_this.app.stage
        .on("mousemove", onPointerMove)
        .on("touchmove", onPointerMove);
      loop();
    }

    function onPointerMove(e) {
      v_this.posX = e.data.global.x;
    }

    function loop() {
      requestAnimationFrame(loop);
      vx += (v_this.posX - displacementSprite.x) * 0.045;
      displacementSprite.x = vx;
      let disp = Math.floor(v_this.posX - displacementSprite.x);
      if (disp < 0) disp = -disp;
      let fs = map(disp, 0, 500, 0, 120);
      disp = map(disp, 0, 500, 0.1, 0.6);
      displacementSprite.scale.x = disp;
      displacementFilter.scale.x = fs;
    }

    function map(n, start1, stop1, start2, stop2) {
      let newval =
        ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
      return newval;
    }
  },
  beforeDestroy(){
    this.app.destroy();
    PIXI.utils.clearTextureCache();
  }
};
</script>

<template src="./template.html"></template>
<style src="./style.scss" lang="scss" scoped></style>
