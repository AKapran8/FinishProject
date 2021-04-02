import { InterceptorService } from './services/interceptor.service';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OwlModule } from 'ngx-owl-carousel';
import { FormsModule } from '@angular/forms';

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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MainComponent } from './components/main/main.component';
import { ProductItemComponent } from './components/product/products-item/products-item.component';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
import { ProductByIdInformationComponent } from './components/product/product-by-id-information/product-by-id-information.component';
import { SearchComponent } from './components/search/search.component';
import { SelectComponent } from './components/select/select.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// !
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'


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
    ProductItemComponent,
    CartItemComponent,
    ProductByIdInformationComponent,
    SearchComponent,
    SelectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
