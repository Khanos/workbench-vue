import { createRouter, createWebHistory } from 'vue-router'
import CounterView from '../views/CounterView.vue';
import ReactClone from '../views/ReactClone.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'counter',
      component: CounterView
    },
    {
      path: '/users',
      name: 'users',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/UsersView.vue')
    },
    {
      path: '/react-clone',
      name: 'react-clone',
      component: ReactClone
    }
  ]
})

export default router
