import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    all_projects: null,
  },
  mutations: {
    initProject(state){
      axios.get("project.json").then((res)=>{
        state.all_projects = res.data;
      })
    }
  },
  actions: {
    initProject(context){
      context.commit("initProject");
    }
  },
  modules: {
  }
})
