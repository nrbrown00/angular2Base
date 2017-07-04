import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable() 

export class ApiService {
    private baseUrl: string = 'http://localhost:51328/api';

    constructor(private http: Http, private authService: AuthService){}

    get(url: string) : Observable<Response>{
        let token = this.authService.getToken();
        var headers = new Headers({'Authorization': 'Bearer ' + token});
        var options = new RequestOptions({headers: headers})
        return this.http.get(this.baseUrl + url, options);
    }
}