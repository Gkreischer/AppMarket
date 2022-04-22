import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
import { Product } from 'src/app/shared/product';
import { Storage } from '@ionic/storage-angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  id: number = null;
  product: Product = null;
  favorite: boolean = false;
  constructor(private route: ActivatedRoute, private crud: CrudService, private storage: Storage, private toast: ToastController) {

  }

  async ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');

    this.getProductDetail();

    await this.storage.create();

    this.isFavorite();
  }

  async presentToast(message: string) {
    const toast = await this.toast.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  async isFavorite() {
    let favorites = await this.storage.keys();

    let favoriteProduct = favorites.filter((favoriteId) => {
      return +favoriteId === this.id;
    });

    if (favoriteProduct.length > 0) {
      this.favorite = true;
    } else {
      this.favorite = false;
    }

  }


  getProductDetail() {
    this.crud.getSpecificData('/products', this.id).subscribe((res) => {
      this.product = res;
    }, err => {
      console.error(err);
    })
  }

  async addProductToFavorites(event) {
    let target = event.target || event.currentTarget || event.srcElement;
    let id = target.attributes.id.value;

    let op = confirm('Do you want to add this product on favorites?');

    if (op) {

      this.presentToast('Product added with success');

      await this.storage.set(id, this.product);

      this.favorite = true;

    } else {

      this.presentToast('Operation canceled succefully');

      return false;

    }
  }

  async removeProductFromFavorites(event) {

    let target = event.target || event.srcElement || event.currentTarget;
    let id = target.attributes.id.value;
    let confirm = window.confirm('Do you want remove the favorite product selected?');

    if(confirm) {

      await this.storage.remove(id);
      this.favorite = false;

      this.presentToast('Product removed succefully');


    } else {

      this.presentToast('Operation canceled succefuly');


    }
  }

}
