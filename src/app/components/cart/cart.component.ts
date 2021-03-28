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

    // this.productService.cartSubject.subscribe(cart => {
    //   this.cart = cart;
    //   if (cart?.length > 0) {
    //     cart.forEach(item => {
    //       // console.log(item);
    //       this.totalPrice += item.products.price * item.count;
    //       this.itemCount = item.count;
    //       // console.log(this.itemCount);
    //       this.totalCount += item.count;
    //     });
    //     this.totalPrice = +this.totalPrice.toFixed(2);
    //   }
    // });

    // this.productService.cartSubject.subscribe(cart => {
    //   this.cart = cart;
    // })

    const { totalCount, totalPrice } = this.productService.updateCardTotalInfo();
    this.totalCount = +totalCount;
    this.totalPrice = Number(totalPrice);
    this.totalPrice.toFixed(2);

  }


  countAndCart(value: number): void {
    const { totalCount, totalPrice } = this.productService.updateCardTotalInfo();
    this.totalCount = +totalCount;
    this.totalPrice = +totalPrice;
  }

}
