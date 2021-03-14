import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IProduct, IGetProductResponse } from '../interfaces/product';
import { LocalStorageService } from './local-storage.service';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  count = parseInt(localStorage.getItem('count'), 10) || 0;
  cCount: any;
  pp: any;

  cartSubject = new Subject<any>();
  // ---------------------------------------
  productCartSubject = new Subject<IProduct>();
  // ---------------------------------------
  pageNumber: number;
  constructor(private http: HttpClient, public localStorageService: LocalStorageService) { }

  goToPage(value: number) {
    this.pageNumber = value;

    console.log(this.pageNumber);
  }
  // Отримуєм продукти
  getProducts(): Observable<IGetProductResponse> {
    return this.http.get<IGetProductResponse>(`https://nodejs-final-mysql.herokuapp.com/products?keyword=&pageNumber=${this.pageNumber}`);
  }


  buy(product: IProduct) {

    if (product) {
      this.count++;
      localStorage.setItem('count', this.count.toString());
      this.cCount = localStorage.getItem('count');

      let ps = JSON.parse(localStorage.getItem('products'));
      // ps.push(this.productsInCart);
      localStorage.setItem('products', ps);

      // localStorage.setItem('product', '?');
      // this.pp = localStorage.getItem('product');
    }
    this.cartSubject.next({ product, count: this.count });
    // this.localStorageService.addProductInCart();
    // ----------------------------------
    this.productCartSubject.next(product);
  }

}








