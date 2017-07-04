import {Component, OnInit} from '@angular/core';
import {OrderModel} from './order.model';
import {OrdersService} from './orders.service';
@Component({
    selector: 'orders',
    templateUrl: './orders.template.html'
})

export class OrdersComponent implements OnInit {
    private orders: OrderModel[];

    constructor(private ordersService: OrdersService){

    }
    ngOnInit(){
        this.ordersService.getOrders().subscribe(orders => this.orders = orders);
    }

}