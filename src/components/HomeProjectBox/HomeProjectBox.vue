<script>
export default {
  props: ["item"],
  computed: {
    info() {
        return this.$i18n.t(`all_projects.${this.item.short_name}.box`);
    },
    info_text() {
      let length = this.$i18n.locale == "en" ? 80 : 50;
      let cut =
        this.info.slice(0,length) + "......";
      return cut;
    },
  },
};
</script>
<template src="./template.html"></template>
<style src="./style.scss" lang="scss" scoped></style>
