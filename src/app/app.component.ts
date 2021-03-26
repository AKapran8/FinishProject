import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'finish';

  constructor(private productService: ProductsService) {

  }


  ngOnInit() {
    // Проверка массива на наличие продуктов в корзине
    // ! + products.length реакция? Будет ли обнулять после одновдения страницы
    let products = JSON.parse(localStorage.getItem('products'));
    if (!products || !products.length) {
      localStorage.setItem('products', JSON.stringify([]));
    }
    this.productService.cartSubject.next(products)
  }

}
