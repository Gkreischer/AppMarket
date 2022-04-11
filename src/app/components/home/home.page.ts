import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Product } from 'src/app/shared/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  products: Product[] = null;

  constructor(private crud: CrudService) { }

  ngOnInit() {
    this.loadAllProducts();
  }

  loadAllProducts() {
    this.crud.getData('/products').subscribe((products) => {
      console.log(products);
      this.products = products;
    }, err => {
      console.error(err);
    })
  }

  goToSelectedProduct(event) {

    let target = event.target || event.currentTarget || event.srcElement;
    let id = target.attributes.id.value;
    console.log(id);
  }

}
