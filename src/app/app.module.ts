import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OwlModule } from 'ngx-owl-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { ProductComponent } from './components/product/product.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppSearchComponent } from './components/header/header__components/app-search/app-search.component';
import { NavMenuComponent } from './components/header/header__components/nav-menu/nav-menu.component';
import { AppInputComponent } from './components/header/header__components/app-search/search__components/app-input/app-input.component';
import { AppBtnComponent } from './components/header/header__components/app-search/search__components/app-btn/app-btn.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './components/main/main.component';
import { ProductByIDComponent } from './components/product-by-id/product-by-id.component';
import { ProductItemComponent } from './components/product/products-item/products-item.component';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
import { ProductByIdInformationComponent } from './components/product/product-by-id-information/product-by-id-information.component';
// import { ProductsItemComponent } from './components/product/products-item/products-item.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    ProductComponent,
    FooterComponent,
    AppSearchComponent,
    NavMenuComponent,
    AppInputComponent,
    AppBtnComponent,
    LoginComponent,
    CartComponent,
    MainComponent,
    ProductByIDComponent,
    ProductItemComponent,
    CartItemComponent,
    ProductByIdInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
