import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Categories from '@/views/Categories.vue'
import Category from '@/views/Category.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/categories',
        name: 'Categories',
        component: Categories
    },
    {
        path: '/category/:name',
        name: 'Category',
        component: Category,
    }
]

const router = createRouter({ history: createWebHistory(), routes })

export default router