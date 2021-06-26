<script>
export default {
  data() {
    return {
      project_color_list: null,
    };
  },
  computed: {
    all_projects() {
      return this.$store.state.all_projects;
    },
    router_id() {
      return this.$route.params.id;
    },
    project_cate(){
        return this.$store.state.all_projects[this.router_id - 1].cate;
    },
    backcolor() {
      if (this.project_color_list) {
        return this.project_color_list[this.router_id].color;
      } else {
        return "#fff";
      }
    },
  },
  methods: {
    toggleProject(sign) {
      let id = parseInt(this.router_id);
      if (sign == "+" && id < this.all_projects.length ) {
        this.$router.push({
          path: `/project_intro/${id + 1}`,
        });
      } else if(sign == "-" && id > 1) {
        this.$router.push({
         path: `/project_intro/${id - 1}`,
        });
      }
    },
  },
  watch: {
    all_projects() {
      if (this.all_projects !== []) {
          this.project_color_list = {};
        this.all_projects.forEach((item) => {
          this.project_color_list[item.id] = {
            color: item.color,
            dark: item.dark,
          };
        });
      }
    },
  },
  mounted() {},
};
</script>
<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
