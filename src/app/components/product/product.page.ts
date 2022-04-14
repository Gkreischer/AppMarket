import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
import { Product } from 'src/app/shared/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  id: number = null;
  product: Product = null;
  
  constructor(private route: ActivatedRoute, private crud: CrudService) { }

  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get('id'));
    this.id = +this.route.snapshot.paramMap.get('id');

    this.getProductDetail();
  }


  getProductDetail() {
    this.crud.getSpecificData('/products', this.id).subscribe((res) => {
      this.product = res;
    }, err => {
      console.error(err);
    })
  }

  addProductToFavorites(event){
    let target = event.target || event.currentTarget || event.srcElement;
    let id = target.attributes.id.value;

    let op = confirm('Do you want to add this product on favorites?');

    if(op){

      alert('Product added with success');

    } else {
      alert('Operation canceled succefully');
    }
  }

}
