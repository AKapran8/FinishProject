import { IGetProductAndCount } from './../../../interfaces/product';
import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  // @Input('item') item: IProduct;
  // selectedCount = 1;
  // counts: number[] = [];
  products: IGetProductAndCount[] = [];

  constructor(public productService: ProductsService) { }

  ngOnInit(): void {
    this.products = JSON.parse(localStorage.getItem('products'));
  }

  removeProductFormCart(i: number) {
    this.products.splice(i, 1);
    // this.products.localStorage.removeItem()
  }

}
