import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  items: any[] = [];


  constructor(public productsServive: ProductsService) { }

  ngOnInit(): void {
    this.productsServive.getItems()
      .subscribe((res: any[]) => {
        console.log(res);
        this.items.push(res);
      })
  }
}
