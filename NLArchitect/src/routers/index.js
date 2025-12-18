import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/user/Home.vue'
import About from '../views/user/About.vue'
import Project from '../views/user/Project.vue'
import ProjectDetail from '../views/user/ProjectDetail.vue'
import Contact from '../views/user/Contact.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/project', name: 'Project', component: Project },
  { path: '/projectdetail/:slug', name: 'ProjectDetail', component: ProjectDetail },
  { path: '/contact', name: 'Contact', component: Contact },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
