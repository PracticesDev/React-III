//LazyLoad por Componentes
import { LazyExoticComponent } from 'react';
import { lazy } from 'react'

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string;
}

const LazyPage1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */'../lazyload/pages/LazyPage1'));
const LazyPage2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */'../lazyload/pages/LazyPage2'));
const LazyPage3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */'../lazyload/pages/LazyPage3'));


export const routes: Route[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        component: LazyPage1,
        name: 'LazyPage-1'
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        component: LazyPage2,
        name: 'LazyPage-2'
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        component: LazyPage3,
        name: 'LazyPage-3'
    },
]

