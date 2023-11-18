import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Favorites', url: '/favorites', icon: 'heart' },
    { title: 'Contact', url: '/contact', icon: 'call' },
    { title: 'Login', url: '/login', icon: 'log-in' }
  ];

  constructor(private storage: Storage) { }

  async ngOnInit() {
    await this.storage.create();
    this.verifyIfIsLogged();
  }

  async verifyIfIsLogged() {

    let { token } = await this.storage.get('token');

    if(token && token.length > 0 && (token.length === 40)){
      console.log('User logged');
    } else {
      console.log('User not logged');
      return;
    }

  }
}
