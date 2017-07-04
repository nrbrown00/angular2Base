import {Injectable} from '@angular/core';
import {ApiService} from '../api/api.service';
import {OrderModel} from './order.model';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map'
@Injectable()

export class OrdersService {
    constructor(private apiService:ApiService){}

    getOrders() : Observable<OrderModel[]> {
        return this.apiService.get('/orders').map(response => 
            response.json() as OrderModel[]
        )
    }
}