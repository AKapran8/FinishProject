import { element } from 'protractor';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IProduct, IGetProductResponse, IGetProductAndCount } from '../interfaces/product';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // Переменные для отображения количества товаров в корзине
  count = parseInt(localStorage.getItem('count'), 10) || 0;
  cCount: any;

  // Переменная в которой продукт и количество с селекта
  productAndCount: IGetProductAndCount[];

  // При выборе селекта количество
  countByProduct: number;

  // Для перехода по страницам товара
  pageNumber: number;


  i: number;
  // Для компоненты search
  searchProduct: string;

  // Сабджекты
  cartSubject = new Subject<any>();
  productCartSubject = new Subject<IProduct>();
  searchSubject = new Subject<string>();

  constructor(private http: HttpClient) {
  }

  // Функция перехода по страницам
  goToPage(value: number): Observable<IGetProductResponse> {
    this.pageNumber = value;
    return this.getProducts();
  }

  // Одерживаем продукты 
  getProducts(): Observable<IGetProductResponse> {
    return this.http.get<IGetProductResponse>(`https://nodejs-final-mysql.herokuapp.com/products?keyword=&pageNumber=${this.pageNumber}`);
  }

  // Додаём продукт в корзину
  buyProductAndCount(productAndCount: IGetProductAndCount): void {
    // Колечество тораров в карте повышаем и храним его локально
    this.count += productAndCount.count;
    localStorage.setItem('count', this.count.toString());
    this.cCount = +localStorage.getItem('count');
    this.cartSubject.next({ products: productAndCount.products, count: this.count });

    // Хранение товаров с корзины локально
    if (JSON.parse(localStorage.getItem('products'))?.length >= 0) {
      this.productAndCount = JSON.parse(localStorage.getItem('products'))
    } else {
      this.productAndCount = []
    }
    console.log(productAndCount);
    const candidate = this.productAndCount.find(product => product.products._id === productAndCount.products._id)
    if (candidate) {
      candidate.count += productAndCount.count;
    } else {
      this.productAndCount.push({ products: productAndCount.products, count: +productAndCount.count });
    }
    localStorage.setItem('products', JSON.stringify(this.productAndCount));
    // this.countByProduct = productAndCount.count;
    // console.log(this.countByProduct);
  }

  // Функция поиска товаров по имени
  searchProductFunction(searchProduct, products: IProduct) {
    this.searchProduct = searchProduct.toLowerCase();
    this.searchSubject.next(this.searchProduct);
  }

  getSearchProducts(): Observable<IGetProductResponse> {
    return this.http.get<IGetProductResponse>(`https://nodejs-final-mysql.herokuapp.com/products?keyword=${this.searchProduct}`);
  }

  // Удаление продукта с корзины
  removeFromLocalStorage(i: number) {
    this.i = i;

    this.productAndCount = JSON.parse(localStorage.getItem('products'));
    const index = this.productAndCount[i].count;
    this.productAndCount.splice(i, 1);
    localStorage.setItem('products', JSON.stringify(this.productAndCount));
    // const aa = this.productAndCount[i].products.price;
    // console.log(aa);

    this.count -= index;
    localStorage.setItem('count', this.count.toString());
    this.cCount = +localStorage.getItem('count');
  }

}


















