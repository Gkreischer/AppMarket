import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
import { Category } from 'src/app/shared/category';
import { Product } from 'src/app/shared/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  products: Product[] = null;
  categories: Category[] = null;
  productsByCategory: Product[] = null;
  productsToShow: Product[] = null;
  
  constructor(private crud: CrudService, private route:Router) { }

  ngOnInit() {
    this.loadAllProducts();
    this.loadAllCategories();
  }

  loadAllCategories(){
    this.crud.getData('/products/categories').subscribe((categories) => {
      this.categories = categories;
    }, err => {
      console.error(err);
    })
  }

  loadAllProducts() {
    this.crud.getData('/products').subscribe((products) => {
      this.products = products;
      this.productsToShow = products;
    }, err => {
      console.error(err);
    })
  }

  goToSelectedProduct(event) {

    let target = event.target || event.currentTarget || event.srcElement;
    let id = target.attributes.id.value;
    console.log(id);

    this.route.navigate(['/product', id]);
  }

  filterProductsByCategory(event){
    let target = event.target || event.currentTarget || event.srcElement;
    let id = target.attributes.id.value;

    console.log(id);

    this.productsToShow = this.products.filter((products) => {
      return products.category === id;
    })

    if(id === 'no_category'){
      this.productsToShow = this.products;
    }

    console.log(this.productsToShow);


  }

}
