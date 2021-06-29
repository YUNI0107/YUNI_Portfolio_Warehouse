<script>
export default {
  props: ["item"],
  data() {
    return {
      text_length: 50,
      skill_num: 10,
    };
  },
  computed: {
    info() {
      return this.$i18n.t(`all_projects.${this.item.short_name}.box`);
    },
    info_text() {
      let length = this.$i18n.locale == "en" ? 80 : 50;
      let cut = this.info.slice(0, length) + "......";
      return cut;
    },
    skill_list() {
      return this.item.skill.slice(0, this.skill_num);
    },
  },
  methods: {
    textLengthChange(e) {
      if (e.matches) {
        this.text_length = 30;
        this.skill_num = 4;
      } else {
        this.text_length = 50;
        this.skill_num = 10;
      }
    },
  },
  mounted() {
    let mql = window.matchMedia("(max-width: 576px)");
    mql.addEventListener("change", this.textLengthChange);
    this.textLengthChange(mql);
  },
};
</script>
<template src="./template.html"></template>
<style src="./style.scss" lang="scss" scoped></style>
