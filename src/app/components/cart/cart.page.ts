import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
import { Cart } from 'src/app/shared/cart';
import { Product } from 'src/app/shared/product';
import { ProductCart } from 'src/app/shared/productCart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  cart: Cart;
  productsCart: ProductCart[] = null;
  products: Product[] = null;
  productsDetails: Product[] = [];

  constructor(private crud: CrudService, private router: Router) { }

  ngOnInit() {
    this.getCart();
  }

  getCart() {
    this.crud.getData('/carts/1').subscribe((res) => {
      console.log(res);
      this.cart = res;
      this.productsCart = this.cart.products;
      this.getProducts();
    }, err => {
      console.error(err);
    })
  }

  getProducts() {
    this.crud.getData('/products').subscribe((res) => {
      this.products = res;
      console.log(this.products);
      this.verifyProductsCart();
    }, err => {
      console.error(err);
    })
  }

  verifyProductsCart() {
    if(this.products.length !== 0 && this.productsCart.length !== 0){

      this.productsCart.forEach((productCart) => {

        this.products.forEach((product) => {

          if(productCart.productId === product.id){
            this.productsDetails.push(product);
          }

        })

      })

      console.log(this.productsDetails);

    }
  }

  goToProductSelected(event) {

    let target = event.target || event.currentTarget || event.srcElement;
    let id = target.attributes.id.value;
    
    this.router.navigate(['/product', id]);
  }

  

}
