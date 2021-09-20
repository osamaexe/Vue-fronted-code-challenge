import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/login",
    name: "Login",
    component: () => import("../components/Auth/Login.vue"),
  },
  {
    path: "/",
    name: "Dashboard",
    component: () => import("../components/Dashboard/AdminShell/admin.vue"),
    children: [
   
      {
        path: "",
        name: "List",
        component: () => import("../components/Dashboard/AdminShell/Users/list.vue"),
        meta: {requiresAuth: true}
      },
      {
        path: "detail/:id",
        name: "Detail",
        component: () => import("../components/Dashboard/AdminShell/Users/detail.vue"),
        meta: {requiresAuth: true}
      }


    ], meta: { requiresAuth: true }
  },
 
  { path: '*', redirect: '/' }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth) {
    const authUser = localStorage.getItem('user');
    if (authUser) {
      next()
    } else {
      next({ name: 'Login' });
    }
  } else {
    next()
  }
});


export default router;

