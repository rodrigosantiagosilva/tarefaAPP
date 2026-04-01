import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: () => import('../views/PerfilPage.vue')
  },
  {
    path: '/eventos',
    name: 'Evento',
    component: () => import('../views/EventsPage.vue')
  },
  {
    path: '/eventosfavoritos',
    name: 'EventoFavorito',
    component: () => import('../views/EventsFavoritos.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
