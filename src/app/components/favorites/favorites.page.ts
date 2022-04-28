import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { Product } from 'src/app/shared/product';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  favoritesInfo: Product[] = [];

  constructor(private storage: Storage, private route: Router, private toast: ToastController) { }

  async ngOnInit() {
    await this.storage.create();
  }

  ionViewWillEnter() {
    this.favoritesInfo = [];
    this.getAllFavorites();
  }

  async presentToast(message: string) {
    const toast = await this.toast.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  async getAllFavorites() {
    let favorites = await this.storage.keys();

    if (favorites.length > 0) {
      favorites.forEach(async (el) => {
        this.favoritesInfo.push(await this.storage.get(el));
        await console.log(this.favoritesInfo);
      });
    } else {
      return;
    }

  }

  async deleteFavorite(event) {

    let target = event.target || event.srcElement || event.currentTarget;
    let id = target.attributes.id.value;
    let confirm = window.confirm('Do you want remove the favorite product selected?');

    if (confirm) {

      await this.storage.remove(id);
      this.favoritesInfo = this.favoritesInfo.filter((favorite) => {
        return favorite.id !== +id;
      })

      this.presentToast('Product favorited removed with success');

    } else {

      this.presentToast('Operation canceled succefully');
      return;

    }
  }

  goToSelectedProduct(event) {

    let target = event.target || event.currentTarget || event.srcElement;
    let id = target.attributes.id.value;
    console.log(id);

    this.route.navigate(['/product', id]);
  }

}
