import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IGetProductResponse, IProduct } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.scss']
})

export class ProductItemComponent implements OnInit {

  id: string;
  products: any[] = [];

  // Принимаю с продукт компоненты продукт
  @Input('product') product: IProduct;

  constructor(public productService: ProductsService, public http: HttpClient, public router: Router) {

  }

  ngOnInit(): void {
  }

  // Переход на описание продукта
  goToProd(id: string): void {
    this.router.navigate([`products/${id}`]);
  }



}
