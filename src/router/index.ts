import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Articles',
        component: () => import('../views/Articles.vue')
    },
    {
        path: '/users&posts',
        name: 'Users&Posts',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router