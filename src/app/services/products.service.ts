import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IProduct, IGetProductResponse } from '../interfaces/product';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  cartSubject = new Subject<IProduct>();
  count: number = 0;
  // TEST 17 line
  productCartSubject = new Subject<IProduct>();

  constructor(private http: HttpClient) { }

  // Отримуєм продукти
  getProducts(): Observable<IGetProductResponse> {
    return this.http.get<IGetProductResponse>('https://nodejs-final-mysql.herokuapp.com/products?keyword=&pageNumber=1');
  }


  buy(product: IProduct) {
    if (product) this.count++;
    // Відправляєм збільшення к-ті в корзині
    this.cartSubject.next(product);
    // Test Відправляєм данні продукта
    this.productCartSubject.next(product);
  }

}








