import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GerechtenView from "@/views/GerechtenView";
import FavoritesView from "@/views/FavoritesView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/gerechten',
    name: 'gerechten',
    component: GerechtenView
  },
  {
    path: '/favorieten',
    name: 'favorieten',
    component: FavoritesView
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
