import {Routes} from '@angular/router';
import {OrdersComponent} from './orders.component';
export const ordersRoutes : Routes = [
    {path: '', redirectTo: '/orders', pathMatch: 'full'},
    {path: 'orders' , component: OrdersComponent}
]