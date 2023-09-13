import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Entry from '../views/Entry.vue'

const router = createRouter({

    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/user",
            name: "user",
            component: User
        },
        {
            path: "/entry",
            name: "entry",
            component: Entry
        }
    ]
})

export default router