import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import About from '../views/About/About.vue'
import AllProject from '../views/AllProject/AllProject.vue'
import ProjectIntro from '../views/ProjectIntro/ProjectIntro.vue'
import Project from '../components/Project/Project.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/project',
    name: 'project',
    component: AllProject
  },
  {
    path: '/project_intro',
    name: 'project_intro',
    component: ProjectIntro,
    children:[
        { path: "/project_intro/:id", name: 'project_detial', component: Project },
    ]
  },

]

const router = new VueRouter({
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

export default router
