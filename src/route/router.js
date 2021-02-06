import { createRouter, createWebHistory} from "vue-router"

import Roomates from '../pages/Roomates';

import Calender from '../pages/Calender';

import Home from '../pages/Home';

import Markdown from '../pages/markdown';

import carousel from '../pages/carousel';
//remember that routes is an object and the path  should be mentioned too

const routeHistory = createWebHistory();
const routes = [


    {path: '/carousel', component: carousel},

    {path: '/todo', component: Roomates},

    {path: '/calender', component:Calender},


    {path: '/markdown', component:Markdown},

    {path: '/', component: Home},
]

const router  = createRouter({
history : routeHistory,
    routes
});

export default router;