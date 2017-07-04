import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrdersComponent} from './orders.component';
import {OrdersService} from './orders.service';
import {ApiModule} from '../api'

@NgModule({
    imports: [CommonModule, ApiModule],
    declarations: [OrdersComponent],
    providers: [OrdersService],
    exports: []
})

export class OrdersModule {

}