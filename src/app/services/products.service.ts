import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct, IGetProductResponse } from '../interfaces/product';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }



  // getUsers(): Observable<any[]> {
  //   return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users');
  // }
  // !For all products
  getProducts(): Observable<IGetProductResponse> {
    return this.http.get<IGetProductResponse>('https://nodejs-final-mysql.herokuapp.com/products?keyword=&pageNumber=1');
  }


  // !For one product
  // getProsuctByName(value?: string): Observable<any[]> {
  //   return this.http.get<any[]>(`link${value}`);
  // }

  // getUserById(value?: string): Observable<any[]> {
  //   // if (!value) return [];
  //   return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/users/${value}`);
  // }
}








