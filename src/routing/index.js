import {createRouter, createWebHistory} from 'vue-router'

import Dashboard from '../views/Dashboard.vue'

const routes = [
    {
        name: 'Dashboard',
        path: '/',
        component: Dashboard
    }
]

const router = Router()

export default router;

function Router() {
    const router = new createRouter({
        history: createWebHistory(),
        routes
    })
    return router
}