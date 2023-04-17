import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("@/templates/app.vue"),
      children: [
        {
          path: "/",
          name: "home",
          component: () => import("@/views/Home/index.vue"),
        },
        {
          path: "/edit/:id",
          name: "edit",
          component: () => import("@/views/Edit/index.vue"),
        },
        {
          path: "/register",
          name: "register",
          component: () => import("@/views/Register/index.vue"),
        }
      ]
    },
    {
      path: "/account",
      component: () => import("@/templates/account.vue"),
      children: [
        {
          path: "sign-up",
          name: "sign-up",
          component: () => import("@/views/SignUp/index.vue")
        },
        {
          path: "sign-in",
          name: "sign-in",
          component: () => import("@/views/SignIn/index.vue")
        }
      ]
    }
  ]
})

export default router
