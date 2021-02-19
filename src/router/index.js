import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsView from '@/views/NewsView'
import AskView from '@/views/AskView'
import JobsView from '@/views/JobsView'

Vue.use(VueRouter)

const routes = [
  // Redirection Routes
  {
    path: '/',
    redirect: '/news'
  },

  // Navigation Bar Routes
  {
    path: '/news',
    name: 'News',
    component: NewsView,
    category: 'navbar'
  },
  {
    path: '/ask',
    name: 'Ask',
    component: AskView,
    category: 'navbar'
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: JobsView,
    category: 'navbar'
  }
]

const router = new VueRouter({
  routes
})

export default router
