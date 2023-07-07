import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/v-home.vue'
import About from '@/views/v-about.vue'
import Contact from '@/views/v-contact.vue'
import ProductDetail from '@/views/v-product-detail.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/:catchAll(.*)',
            redirect: '/notFound'
        },
        {
            path: '/',
            component: Home,
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
            path: '/notFound',
            component: () => import('@/views/v-not-found.vue')
        },
        {
            path: '/dashboard',
            component: () => import('@/views/v-dashboard'),
            meta: {
                isProtected: true
            }
        },
        {
            path: '/auth',
            component: () => import('@/templates/v-auth.vue'),
            children: [
                {
                    path: 'login',
                    component: () => import('@/components/organismos/v-login-form.vue')
                },
                {
                    path: 'register',
                    component: () => import('@/components/organismos/v-register-form.vue')
                }
            ]
        }
    ]
})

router.beforeEach((to) => {
    if (to.meta?.isProtected) {
        const isAuth = Boolean(localStorage.getItem('isAuth'))

        if (!isAuth) {
            this.$router.push('/')
        }

        return true
    }

    return true
})

export default router