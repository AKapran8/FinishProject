import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(public productService: ProductsService) { }

  ngOnInit() { }

  goToPage(value: number) {
    this.productService.goToPage(value);
  }
}
