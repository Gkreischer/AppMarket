import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
import { Product } from 'src/app/shared/product';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  id: number = null;
  product: Product = null;

  constructor(private route: ActivatedRoute, private crud: CrudService, private storage: Storage) {
    
  }

  async ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');

    this.getProductDetail();

    await this.storage.create();
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

      alert('Product added with success');

      await this.storage.set(id, id);

      console.log(await this.storage.get(id));

    } else {
      alert('Operation canceled succefully');
    }
  }

}
