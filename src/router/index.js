import Vue from "vue";
import VueRouter from "vue-router";
const Home = () => import('views/home/Home')
const Classify = () => import('views/classify/Classify')
const Cart = () => import('views/cart/Cart')
const Me = () => import('views/me/Me')

Vue.use(VueRouter)

const router =new VueRouter({
    routes: [
        {
          path: '',
          redirect: '/home'
        },
        {
          path:'/home',
          component: Home
        },
        {
          path:'/classify',
          component: Classify
        },
        {
          path:'/cart',
          component: Cart
        },
        {
          path:'/me',
          component: Me
        }
       ],
       mode:'history'
})

export default router