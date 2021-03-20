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
  findProduct: string;

  cartSubject = new Subject<any>();
  productCartSubject = new Subject<IProduct>();

  constructor(private http: HttpClient) {
  }

  goToPage(value: number): Observable<IGetProductResponse> {
    this.pageNumber = value;
    return this.getProducts();
  }

  // Отримуєм продукти
  getProducts(): Observable<IGetProductResponse> {
    return this.http.get<IGetProductResponse>(`https://nodejs-final-mysql.herokuapp.com/products?keyword=&pageNumber=${this.pageNumber}`);
  }


  // buy(product: IProduct): void {
  //   if (product) {
  //     this.count++;
  //     localStorage.setItem('count', this.count.toString());
  //     this.cCount = localStorage.getItem('count');
  //   }
  //   this.cartSubject.next({ product, count: this.count });
  // }

  // findProductItem() {
  //   // this.findProduct =
  // }

  // !Перевірити параметри функції, передивитися на рахунок заміни у всіх інших компонентах
  // !productByIdInformation
  // !app.component умова
  buyProductAndCount(productAndCount: IGetProductAndCount): void {
    if (productAndCount.products) {
      this.count++;
      localStorage.setItem('count', this.count.toString());
      this.cCount = localStorage.getItem('count');
    }
    this.cartSubject.next({ products: productAndCount.products, count: this.count });


    this.productAndCount = JSON.parse(localStorage.getItem('products'));
    this.productAndCount.push({ products: productAndCount.products, count: productAndCount.count });
    localStorage.setItem('products', JSON.stringify(this.productAndCount));
  }

}








