import { Router } from '@angular/router';
import { IGetProductResponse, IProduct } from 'src/app/interfaces/product';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-app-btn',
  templateUrl: './app-btn.component.html',
  styleUrls: ['./app-btn.component.scss']
})
export class AppBtnComponent implements OnInit {

  // Подтягиваю с интупа значение
  @Input('searchProductBtn') searchProduct: string;
  products: IProduct;
  text: string;

  @Output() zeroing = new EventEmitter<string>();
  constructor(public productsService: ProductsService, public router: Router) { }

  ngOnInit(): void {

  }

  // Поиск товара по инпуте
  findProduct(text: string) {
    this.productsService.searchProductFunction(this.searchProduct, this.products);
    this.router.navigate([`search/${text}`]);
    // console.log(this.searchProduct);
    this.zeroing.emit(this.searchProduct);

  }

}

