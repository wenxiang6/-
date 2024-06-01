import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
    path:'/user',
    component:()=>import('@/views/user/index.vue')
   },
   {
    path:'/role',
    component:()=>import('@/views/role/index.vue')
   },
   {
    path:'/',
    component:()=>import('@/views/login/index.vue')
   }
  ]
})

export default router
