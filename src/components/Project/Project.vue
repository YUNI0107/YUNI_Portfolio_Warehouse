<script>
import ProjectSwiper from "@/components/ProjectSwiper/ProjectSwiper";

export default {
  data() {
    return {
      ready: false,
    };
  },
  components: {
    ProjectSwiper,
  },
  computed: {
    project() {
      if (this.$store.state.all_projects) {
        return this.$store.state.all_projects[this.router_id - 1];
      } else {
        return null;
      }
    },
    router_id() {
      return this.$route.params.id;
    },
  },
  methods:{
    titleInit(){
      document.title = this.$i18n.t(`all_projects.${this.project.short_name}.name`) +"- YUNI's PORTFOLIO";
    }
  },
  watch:{
    project(){
      if(this.$store.state.all_projects){
        this.titleInit();
      }
    },
  },
  mounted(){
    if(this.$store.state.all_projects){
        this.titleInit();
      }
  },
  beforeRouteUpdate(to, from, next) {
    this.$refs.swiper.numReset();
    next();
  },
};
</script>
<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
