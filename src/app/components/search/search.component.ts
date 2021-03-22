import { IProduct } from 'src/app/interfaces/product';
import { IGetProductResponse } from './../../interfaces/product';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  products: any[] = [];

  constructor(public productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe((res: IGetProductResponse) => {
        this.products = res.products;
      });
  }

}
