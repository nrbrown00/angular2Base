import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>hello</ h1>
  <button [routerLink] = "'/orders'" >orders</ button>
  <button [routerLink]="'/login'" >login</ button>
  <router-outlet></ router-outlet>`
})

export class AppComponent {
}
