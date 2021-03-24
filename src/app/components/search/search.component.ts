import { IProduct } from 'src/app/interfaces/product';
import { IGetProductResponse } from './../../interfaces/product';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  products: IProduct[] = [];
  // dublicate: IProduct[] = [];
  i: number;

  constructor(public productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getSearchProducts()
      .subscribe((res: IGetProductResponse) => {
        // debugger;
        this.products = res.products;
        // console.log(this.products);
        // this.dublicate = this.products.slice(0);
        // console.log(this.dublicate);
        // this.productService.qqqqq(this.products, this.dublicate);
        // this.productService.searchSubject.subscribe(aaa => {
        //   if (aaa !== '' || aaa === undefined) {
        //     // console.log(aaa);
        //     this.products.forEach((element, index) => {
        //       if (element.name.toLowerCase().includes(aaa) === true) {
        //         this.i = index;
        // console.log(aaa);
        // console.log(element.name.toLowerCase());
        // console.log(this.dublicate);
        // this.dublicate.push(element);
        // console.log(this.dublicate);
        // console.log(this.i);
        // } else {
        // console.log('Wrong product');
        // }
        // this.searchSubject.next(this.dublicate);
        // })
        // }

      });


    // this.products.forEach((element, index) => {
    //   if (element.name.toLowerCase().includes(this.searchProduct))
    //     // console.log(this.searchProduct);
    //     // console.log(element.name.toLowerCase());
    //     this.dublicate.push(element);
    //   // console.log(this.dublicate);
    //   this.searchSubject.next(this.dublicate);
    // })

    // this.productService.searchSubject.subscribe(res => {
    //   if (res !== '' || res === undefined) {
    //     this.products.forEach((element, index) => {
    //       if (element.name.toLowerCase().includes(res) === true) {
    //         // console.log(res);
    //         // console.log(element.name.toLowerCase());
    //         this.dublicate.push(element);
    //         console.log(this.dublicate);
    //       } else {
    //         console.log('Pidar');
    //       }
    //       // this.searchSubject.next(this.dublicate);
    //     })
    //   }
    // });


    // this.productService.getSearchProducts(this.products, this.dublicate)
  }



}
