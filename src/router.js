import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './views/AppHome.vue';
import AppAbout from './views/AppAbout.vue';
import AppProject from './views/AppProject.vue';
import AppContact from './views/AppContact.vue';



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout
        },
        {
            path: '/project',
            name: 'project',
            component: AppProject
        },
        {
            path: '/contact',
            name: 'contact',
            component: AppContact
        },
    ]
});
export { router };