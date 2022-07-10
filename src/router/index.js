import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'
const Find = () => import('@/views/Find')
const Home = () => import('@/views/Home')
const My = () => import('@/views/My')
const Zixun = () => import('@/views/Zixun')
const Login = () => import('@/views/Login')
const City = () => import('@/views/City')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      { path: 'home', component: Home },
      { path: 'find', component: Find },
      { path: 'my', component: My },
      { path: 'zixun', component: Zixun }
    ]

  },
  { path: '/login', component: Login },
  { path: '/city', component: City }
]

const router = new VueRouter({
  routes
})

export default router
