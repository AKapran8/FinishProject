import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
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

  // Индекс товара в корзине
  i: number;

  // Для компоненты search
  searchProduct: string;

  // Сабджекты
  cartSubject = new BehaviorSubject<any>(null);
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
    // Колечество товаров в карте повышаем и храним его локально
    this.count += productAndCount.count;
    localStorage.setItem('count', this.count.toString());
    this.cCount = +localStorage.getItem('count');

    // Хранение товаров с корзины локально
    // Если есть товары, то их сохранять
    // В ином случае создавать пустой массив
    if (JSON.parse(localStorage.getItem('products'))?.length >= 0) {
      this.productAndCount = JSON.parse(localStorage.getItem('products'));
    } else {
      this.productAndCount = [];
    }
    // !console.log(productAndCount);
    // Если данный товар есть в корзине, то повышаем эго каунт в попереднем элементе масссива
    const candidate = this.productAndCount.find(product => product.products._id === productAndCount.products._id);
    if (candidate) {
      candidate.count += productAndCount.count;
    } else {
      this.productAndCount.push({ products: productAndCount.products, count: +productAndCount.count });
    }
    // Передаем обьект в карт компоненту
    this.cartSubject.next(this.productAndCount);

    localStorage.setItem('products', JSON.stringify(this.productAndCount));
  }

  // Функция поиска товаров по имени
  searchProductFunction(searchProduct, products: IProduct) {
    this.searchProduct = searchProduct.toLowerCase();
    this.searchSubject.next(this.searchProduct);
  }

  // Ссылка для поиска товаров в search
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

    // Удаляем с корзины к-во удалённого товара
    this.count -= index;
    localStorage.setItem('count', this.count.toString());
    this.cCount = +localStorage.getItem('count');
  }

  editCardItem(id, product) {
    let products = JSON.parse(localStorage.getItem('products'));

    console.log(id, product);
    console.log(products);
    let prodToChangeIndex = products.findIndex(prod => prod.products._id === id);

    products[prodToChangeIndex].count = product.count;
    localStorage.setItem('products', JSON.stringify(products));
  }

  updateCardTotalInfo() {
    const products = JSON.parse(localStorage.getItem('products'));
    if (products) {
      let totalCount = 0;
      let totalPrice = 0;
      products.forEach((product) => {

        totalCount += +product.count;
        totalPrice += +product.products.price * product.count;
      });
      return { totalCount, totalPrice };

    }

  }

}


















