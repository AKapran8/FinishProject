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

  // removeProductFormCart(id: string) {
  removeProductFormCart(i: number) {
    this.i = i;

    this.productService.removeFromLocalStorage(i);
    // console.log(this.i);
    // console.log(JSON.parse(localStorage.getItem('products')));
    // const products = JSON.parse(localStorage.getItem('products'));
    // console.log(products);
    // console.log(products[i]);
    // products.splice(i, 1);

    // console.log(localStorage.setItem('products', JSON.stringify(products)));
    // localStorage.setItem('products', JSON.stringify(this.productAndCount));
    // const index = products.findIndex(product => product._id === id);
    // console.log(index);
    // console.log(products);
    // products.splice(index, 1)
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
