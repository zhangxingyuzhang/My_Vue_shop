<<<<<<< HEAD
import Vue from "vue";
import Router from "vue-router";
import Login from "./components/Login.vue";
import Home from "./components/Home.vue";
=======
import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'
import Home from './components/Home.vue'
import Welcome from './components/Welcome.vue'
import Users from './components/user/Users.vue'
>>>>>>> user

Vue.use(Router);

const router = new Router({
  routes: [
<<<<<<< HEAD
    { path: "/", redirect: "/login" },
    { path: "/login", component: Login },
    { path: "/home", component: Home },
  ],
});
//挂载路由守卫
router.beforeEach((to, from, next) => {
  //to将要访问的路径
  //from代表从哪个路径跳转而来
  //next是一个函数，表示放行
  //      next()放行     next('login')强制跳转

  if (to.path === "/login") return next();
  //获取token
  const tokenStr = window.sessionStorage.getItem("token");
  if (!tokenStr) return next("/login");
  next();
});

export default router;
=======
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    {
      path: '/home',
      component: Home,
      redirect: '/welcome',
      children: [
        { path: '/welcome', component: Welcome },
        { path: '/users', component: Users }
      ]
    }
  ]
})

// 挂载路由守卫
router.beforeEach((to, from, next) => {
  // to将要访问的路径
  // from代表从哪个路径跳转而来
  // next是一个函数，表示放行
  //      next()放行     next('login')强制跳转

  if (to.path === '/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
>>>>>>> user
