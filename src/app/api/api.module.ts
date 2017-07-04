import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {ApiService} from './api.service';
import {AuthService} from './auth.service';
@NgModule({
    imports: [HttpModule],
    providers: [ApiService, AuthService]
})

export class ApiModule {

}