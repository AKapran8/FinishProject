import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class TopProsuctsService {

  constructor(private http: HttpClient) { }


  // Продукты для слайдера
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`https://nodejs-final-mysql.herokuapp.com/products/top`);
  }

}
