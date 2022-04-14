import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  constructor(private storage: Storage) { }

  async ngOnInit() {
    await this.storage.create();

    this.getAllFavorites();
  }

  async getAllFavorites(){
    console.log(await this.storage.keys());
  }

}
