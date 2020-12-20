import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movie/:id',
    name: 'MovieSingle',
    props: true,
    component: () => import(/* webpackChunkName: "MovieDetail" */ '../views/MovieSingle.vue')
  },
  {
    path: "/:catchAll(.*)",
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "404" */ '../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      const position = {};
      if (to.hash) {
        position.selector = to.hash;
        if (document.querySelector(to.hash)) {
          return position;
        }
        return false
      }
    }  
  }
})

export default router
