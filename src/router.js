import {createWebHistory, createRouter} from "vue-router";
import LoginPage from "@/components/LoginPage";
import NoticeWrite from "@/components/NoticeWrite";
import NoticeMain from "@/components/NoticeMain";
import DashBoard from "@/components/DashBoard";
import GameMain from "@/components/GameMain";

import {useStore} from "vuex"

const requireAuth = () => (from, to, next) => {

    if (useStore.state.isLogin) {
        return next();
    } else {
        next('/login');
    }
}

const routes = [
    {
        path: '/login',
        name: 'LoginPage',
        component: LoginPage
    },
    {
        path: '/notice',
        name: 'NoticeMain',
        component: NoticeMain,
        beforeEnter: requireAuth
    },
    {
        path: '/notice/write',
        name: 'NoticeWrite',
        component: NoticeWrite,
        beforeEnter: requireAuth
    },
    {
        path: '/',
        name: 'DashBoard',
        component: DashBoard,
        beforeEnter: requireAuth
    },
    {
        path: '/game',
        name: 'GameMain',
        component: GameMain,
        props: true,
        beforeEnter: requireAuth
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
});