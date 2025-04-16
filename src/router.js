import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './views/AppHome.vue';
import AppAbout from './views/AppAbout.vue';
import AppProjects from './views/AppProjects.vue';
import AppContact from './views/AppContact.vue';
import SingleProject from './views/SingleProject.vue';




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
            path: '/projects',
            name: 'projects',
            component: AppProjects
        },
        {
            path: '/contact',
            name: 'contact',
            component: AppContact
        },

        {
            path: '/projects/:id',
            name: 'project',
            component: SingleProject,
        },
    ]
});
export { router };