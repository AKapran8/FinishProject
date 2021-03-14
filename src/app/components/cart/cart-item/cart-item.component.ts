import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { IProduct } from 'src/app/interfaces/product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  list: any[] = [];
  pp: any;
  constructor(public productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.productCartSubject.subscribe(product => {
      if (product) this.list.push(product);
    })
  }

}
