import { createWebHistory, createRouter } from "vue-router";
import LoginPage from "@/components/LoginPage";
import NoticeWrite from "./components/NoticeWrite";
import DashBoard from "@/components/DashBoard";

const requireAuth = () => (from, to, next) => {
    const isAuthenticated = false
    if (isAuthenticated) return next()
    next('/login')
}

const routes = [
    {
        path: '/login',
        name: '/LoginPage',
        component : LoginPage
    },
    {
        path: '/notice/write',
        name: 'NoticeWrite',
        component: NoticeWrite,
        beforeEnter: requireAuth()
    },
    {
        path: '/',
        name: 'DashBoard',
        component: DashBoard,
        beforeEnter: requireAuth
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
});