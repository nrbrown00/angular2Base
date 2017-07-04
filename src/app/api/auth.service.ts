import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Injectable, OnInit} from '@angular/core';
import 'rxjs/add/operator/map'
@Injectable()

export class AuthService implements OnInit {
    public isLoggedIn: boolean;
    private token: string;
    constructor(private http: Http){
        
    }

    login(username:string, password: string) :void {
        let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('username', username);
        urlSearchParams.append('password', password);
        urlSearchParams.append('grant_type', 'password');

        let body = urlSearchParams.toString();
        this.http.post('http://localhost:51328/token', body).subscribe((response) => this.onGetResponse(response),
        (errorResponse) => this.onLoginError(errorResponse));
    }
    onLoginError(resp : Response) {
        alert('Login failed!');
    }
    onGetResponse(tokenResponse : Response) {
        this.token = tokenResponse.json().access_token;
        this.isLoggedIn = true;
        alert('Logged In!');
    }

    getToken() {
        return this.token;
    }

    ngOnInit(){
        this.isLoggedIn = false;
    }
}
