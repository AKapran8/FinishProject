import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  count: number = 0;
  cCount: number = 0;

  loginValue: string = 'sign up';
  aaa: string;

  constructor(public productService: ProductsService, public loginService: LoginService) { }

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

    this.loginService.userNameSubject.subscribe(res => {
      if (res) {
        this.loginValue = 'admin';
      }
    });
  }

}