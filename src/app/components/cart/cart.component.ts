import { IGetProductAndCount } from './../../interfaces/product';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  products: IGetProductAndCount[] = [];

  productsInCard: any[] = [];

  totalCount: number = 0;
  totalPrice: number = 0;
  cart: any;
  val: number;
  itemCount: number;

  constructor(public productService: ProductsService) {
  }

  ngOnInit(): void {
    this.products = JSON.parse(localStorage.getItem('products'));

    const { totalCount, totalPrice } = this.productService.updateCardTotalInfo();
    this.totalCount = +totalCount;
    this.totalPrice = parseFloat(totalPrice.toFixed(2));
  }

  countAndCart(value: number): void {
    const { totalCount, totalPrice } = this.productService.updateCardTotalInfo();
    this.totalCount = +totalCount;
    this.totalPrice = Number(totalPrice);
  }

}
