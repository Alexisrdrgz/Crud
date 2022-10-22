import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Listar from '../components/Listar.vue'
import Crear from '../components/Crear.vue'
import Editar from '../components/Editar.vue'
import Historial from '../components/HistorialClinico.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Login
  },
  {
    path: '/listar',
    name: 'Listar',
    component: Listar
  },
  {
    path: '/crear',
    name: 'Crear',
    component: Crear
  },
  {
    path: '/editar/:id',
    name: 'Editar',
    component: Editar
  },
  
  {
    path: '/historial',
    name: 'Historial',
    component: Historial
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
