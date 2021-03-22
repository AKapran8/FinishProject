
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

  // Для компоненты search
  searchProduct: string;

  // Сабджекты
  cartSubject = new Subject<any>();
  productCartSubject = new Subject<IProduct>();

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
    if (productAndCount.products) {
      this.count++;
      localStorage.setItem('count', this.count.toString());
      this.cCount = localStorage.getItem('count');
    }
    this.cartSubject.next({ products: productAndCount.products, count: this.count });

    // Хранение товаров с корзины локально
    this.productAndCount = JSON.parse(localStorage.getItem('products'));
    this.productAndCount.push({ products: productAndCount.products, count: productAndCount.count });
    localStorage.setItem('products', JSON.stringify(this.productAndCount));
  }

  // Функция поиска товаров по имени
  searchProductFunction(searchProduct, products: IProduct) {
    this.searchProduct = searchProduct.toLowerCase();
    // alert(this.searchProduct);
    // console.log(products);
    return this.getSearchProducts();
  }

  // Результаты поиска
  getSearchProducts(): Observable<IGetProductResponse> {
    // alert('Success');
    console.log(this.searchProduct);
    return this.http.get<IGetProductResponse>(`https://nodejs-final-mysql.herokuapp.com/products?keyword=${this.searchProduct}`);

  }

}


















