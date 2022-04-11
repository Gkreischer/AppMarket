import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Cart', url: '/cart', icon: 'cart' },
    { title: 'Contact', url: '/folder/Favorites', icon: 'call' }
  ];
  constructor() { }
}
