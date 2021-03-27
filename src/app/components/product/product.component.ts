import { Component, OnInit } from '@angular/core';
import { IGetProductResponse } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  value: number;
  products: any[] = [];

  constructor(public productService: ProductsService) { }

  ngOnInit() {
    // Подтягиваю товары
    this.productService.getProducts()
      .subscribe((res: IGetProductResponse) => {
        this.products = res.products;
      });
  }

  // Переход по страницах
  pageNumber(value: number) {
    this.productService.goToPage(value).subscribe((newProducts: IGetProductResponse) => {
      this.products = newProducts.products;
    });
  }
}
