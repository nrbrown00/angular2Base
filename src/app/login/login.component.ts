import {Component, OnInit} from '@angular/core';
import {UserModel} from './user.model';
import {AuthService} from '../api';

@Component({
    selector: 'login',
    templateUrl: './login.template.html'
}) 

export class LoginComponent implements OnInit {
    private user: UserModel;

    constructor(private authService: AuthService) {

    }

    ngOnInit(){
        this.user = new UserModel();
    }

    onFormChange(){
        console.log(this.user.userName);
    }

    onSubmit() {
        console.log('username: ' + this.user.userName + ' password: ' + this.user.password);
        this.authService.login(this.user.userName, this.user.password).subscribe();
    }
}