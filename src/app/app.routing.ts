import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {loginRoutes} from './login';
import {ordersRoutes} from './orders';

const routes: Routes = [
    ...loginRoutes,
    ...ordersRoutes
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
