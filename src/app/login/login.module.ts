import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms'
import {LoginComponent} from './login.component';
import {ApiModule} from '../api';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ], 
    declarations: [
        LoginComponent
    ],
    exports: [
        LoginComponent
    ]
})

export class LoginModule {

}