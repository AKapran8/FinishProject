import { Router } from '@angular/router';
import { IGetProductResponse, IProduct } from 'src/app/interfaces/product';
import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-app-btn',
  templateUrl: './app-btn.component.html',
  styleUrls: ['./app-btn.component.scss']
})
export class AppBtnComponent implements OnInit {

  @Input('searchProductBtn') searchProduct: string;
  products: IProduct;
  text: string;

  constructor(public productsService: ProductsService, public router: Router) { }

  ngOnInit(): void {

  }

  findProduct(text: string) {
    // alert(`Hello ${this.searchProduct}`);

    this.productsService.searchProductFunction(this.searchProduct, this.products);
    this.router.navigate([`search/${text}`]);

  }

}

