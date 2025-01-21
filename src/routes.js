import Home from './pages/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
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
  }
]

export default routes
