import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "virtual:generated-pages";


const routes = setupLayouts(generatedRoutes);

// console.log(import.meta.env.VITE_BASE_URL)

// 手動添加一個默認重新定向
routes.push({
  path: '/',
  redirect: BASE_URL
});
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})



export default router
