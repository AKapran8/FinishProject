import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  count: number = 0;
  cCount: any = null;
  constructor(public productService: ProductsService) { }

  ngOnInit(): void {
    // функция для отображения количества товаров в корзине
    this.productService.cartSubject.subscribe(cart => {
      this.cCount = 0;
      if (cart?.length > 0) {
        cart.forEach(item => {
          this.cCount += item.count
        });
      }
    })
  }
}