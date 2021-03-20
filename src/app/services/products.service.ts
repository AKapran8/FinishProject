import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IProduct, IGetProductResponse, IGetProductAndCount } from '../interfaces/product';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  count = parseInt(localStorage.getItem('count'), 10) || 0;
  cCount: any;
  productAndCount: IGetProductAndCount[];
  // При виборі селекту
  countByProduct: number;
  pageNumber: number;

  cartSubject = new Subject<any>();
  productCartSubject = new Subject<IProduct>();

  constructor(private http: HttpClient) { }

  goToPage(value: number) {
    this.pageNumber = value;
    console.log(this.pageNumber);

    return this.getProducts();
  }

  // Отримуєм продукти
  getProducts(): Observable<IGetProductResponse> {
    return this.http.get<IGetProductResponse>(`https://nodejs-final-mysql.herokuapp.com/products?keyword=&pageNumber=${this.pageNumber}`);
  }


  buy(product: IProduct) {

    if (product) {
      this.count++; //!
      localStorage.setItem('count', this.count.toString());
      this.cCount = localStorage.getItem('count');

    }
    this.cartSubject.next({ product, count: this.count });
    this.productCartSubject.next(product);

    this.productAndCount = JSON.parse(localStorage.getItem('products'));
    // countByProduct
    this.productAndCount.push({ products: product, count: 25 });

    localStorage.setItem('products', JSON.stringify(this.productAndCount));
  }


  // !Перевірити параметри функції, передивитися на рахунок заміни у всіх інших компонентах
  // !productByIdInformation
  // !app.component умова
  buyProductAndCount(product: IGetProductAndCount) {
    // this.productCartSubject.next(product);

    // this.productAndCount = JSON.parse(localStorage.getItem('products'));
    // // countByProduct
    // this.productAndCount.push({ products: product, count: 25 });

    // localStorage.setItem('products', JSON.stringify(this.productAndCount));
  }

}








