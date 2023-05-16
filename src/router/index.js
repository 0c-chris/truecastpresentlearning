import { createRouter, createWebHistory } from "vue-router"
import Home from "./../views/Home"
import News from "./../views/News"
import Contact from "./../views/Contact"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/news",
    name: "News",
    component: News,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
