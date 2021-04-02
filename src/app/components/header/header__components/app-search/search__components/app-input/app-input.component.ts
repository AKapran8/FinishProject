import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-app-input',
  templateUrl: './app-input.component.html',
  styleUrls: ['./app-input.component.scss']
})
export class AppInputComponent implements OnInit {

  searchProduct: string;

  constructor(public productService: ProductsService) { }

  ngOnInit(): void {

  }

  zeroing(searchProduct: string) {
    this.searchProduct = '';
  }

}
