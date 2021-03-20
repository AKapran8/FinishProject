import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { IProduct } from 'src/app/interfaces/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  list: any[] = [];


  constructor(public productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.cartSubject.subscribe(change => {
      if (change && change.product) {
        this.list.push('product');
      }
    })
  }

}