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



  constructor(public productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.cartSubject.subscribe(cart => {
      if (cart?.length > 0) {
        cart.forEach(item => {
          console.log(item)
          this.totalPrice += item.products.price * item.count;
          this.totalCount += item.count;
        });
        this.totalPrice = +this.totalPrice.toFixed(2);
      }
    })
    this.products = JSON.parse(localStorage.getItem('products'));
  }


}