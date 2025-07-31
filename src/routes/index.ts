import { Bug, Github, Home, ListTodo, Mountain } from 'lucide-react';

import asyncComponentLoader from '@/utils/loader';

import { Routes } from './types';

const routes: Routes = [
    {
        component: asyncComponentLoader(() => import('@/pages/Welcome')),
        path: '/',
        title: 'Welcome',
        icon: Home,
    },
    {
        component: asyncComponentLoader(() => import('@/pages/Page1')),
        path: '/page-1',
        title: 'Page 1',
        icon: Github,
    },
    {
        component: asyncComponentLoader(() => import('@/pages/Page2')),
        path: '/page-2',
        title: 'Page 2',
        icon: ListTodo,
    },
    {
        component: asyncComponentLoader(() => import('@/pages/Page3')),
        path: '/page-3',
        title: 'Page 3',
        icon: Mountain,
    },
    {
        component: asyncComponentLoader(() => import('@/pages/Page4')),
        path: '/page-4',
        title: 'Page 4',
        icon: Bug,
    },
    {
        component: asyncComponentLoader(() => import('@/pages/NotFound')),
        path: '*',
    },
];

export default routes;
