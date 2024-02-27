import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/about',
    name: 'AboutView',
    component: () => import('@/views/AboutView.vue'),
  },
  {
    path: '/cats',
    name: 'CatListView',
    component: () => import('@/views/CatListView.vue'),
  },
  {
    path: '/cats/:catId',
    name: 'CatDetailView',
    component: () => import('@/views/CatDetailView.vue'),
    props: true,
  },
  // 設定したurlにいずれもマッチしない場合
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router