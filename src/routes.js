import Home from './pages/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('./pages/Login.vue'),
  },
  {
    path: '/detail/:id',
    name: 'detail',
    props: true,
    component: () => import('./pages/Detail.vue'),
  },
  {
    path: '/account/:id',
    name: 'account',
    props: true,
    component: () => import('./pages/Account.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('./pages/Profile.vue'),
    meta: {
      requiresAuth: true,
    }
  }
]

export default routes
