import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  count: number = 0;

  // Если нету товаров в козине что б не было значения
  cCount: number = 0;

  constructor(public productService: ProductsService) { }

  ngOnInit(): void {
    // функция для отображения общего количества товаров в корзине
    this.productService.cartSubject.subscribe(cart => {
      // Ставим 0 перед переходом в корзину товара
      this.cCount = 0;
      if (cart?.length > 0) {
        cart.forEach(item => {
          this.cCount += item.count
        });
      }

    })
    // const { totalCount, totalPrice } = this.productService.updateCardTotalInfo();

    // this.cCount = totalCount;
  }


}