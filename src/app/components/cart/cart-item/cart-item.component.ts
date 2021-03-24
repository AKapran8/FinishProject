import { IGetProductAndCount } from './../../../interfaces/product';
import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input('product') product: IGetProductAndCount;
  @Input('i') i: number;
  // selectedCount = 1;
  // counts: number[] = [];


  constructor(public productService: ProductsService) { }

  ngOnInit(): void {

  }

  removeProductFormCart(i: number) {
    console.log(i);
    // this.products.splice(i, 1);
    // console.log(i);
    // console.log(this.products[i]);
    // this.products = JSON.(localStorage.getItem('products'));
    // console.log(this.products[i]);
    // this.products.push({ products: products.products, count: productAndCount.count });
    // this.products[i] = JSON.parse(localStorage.removeItem('products'));
    // this.products.localStorage.removeItem()
  }

}
