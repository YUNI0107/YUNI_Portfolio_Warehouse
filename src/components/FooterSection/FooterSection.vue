<script>
import * as Clipboard from "clipboard";
export default {
  methods: {
    mailCopy() {
      this.$refs.tool.style.opacity = 1;
      let timer = setTimeout(() => {
        this.$refs.tool.style.transition = 0.5 + "s";
        this.$refs.tool.style.opacity = 0;
        let in_timer = setTimeout(() => {
          this.$refs.tool.style.transition = 0 + "s";
          clearTimeout(timer);
          clearTimeout(in_timer);
        }, 500);
      }, 500);
    },
  },
  mounted() {
    this.$nextTick(() => {
      new Clipboard(".mail_btn");
    });
  },
};
</script>
<template src="./template.html"></template>
<style src="./style.scss" lang="scss" scoped></style>
