import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/v-home.vue'
import About from '@/views/v-about.vue'
import Contact from '@/views/v-contact.vue'
import ProductDetail from '@/views/v-product-detail.vue'
import Register from '@/views/v-register.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/contact',
            component: Contact
        },
        {
            path: '/product/:id',
            component: ProductDetail
        },
        {
            path: '/register',
            component: Register
        }
    ]
})


export default router