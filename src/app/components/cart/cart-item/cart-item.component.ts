import { IGetProductAndCount } from './../../../interfaces/product';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  newSelectCount: number;
  @Input('product') product: IGetProductAndCount;
  @Input('i') i: number;
  @Output() newCount = new EventEmitter<number>();

  constructor(public productService: ProductsService) { }

  ngOnInit(): void {

  }

  removeProductFormCart(i: number) {
    this.productService.removeFromLocalStorage(i);
  }

  selectToCartItem(value: number) {
    console.log(value, this.product);
    this.productService.editCardItem(this.product.products._id, this.product);
    this.newSelectCount = value;
    this.newCount.emit(this.newSelectCount);
  }
}
