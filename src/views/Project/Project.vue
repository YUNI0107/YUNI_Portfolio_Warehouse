<script>
import ProjectSwiper from "@/components/ProjectSwiper/ProjectSwiper";

export default {
  data(){
      return{

      }
  },
  components: {
    ProjectSwiper,
  },
  computed: {
    project() {
      if(this.$store.state.all_projects){
          return this.$store.state.all_projects[this.router_id - 1]
      }else{
          return null;
      }
    },
    router_id() {
      return this.$route.params.id;
    },
  },
  mounted() {
    this.$store.dispatch("initProject");
  },
};
</script>
<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
