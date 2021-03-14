import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  count: number = 0;
  cCount: any;
  constructor(public productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.cartSubject.subscribe(change => {
      if (change && change.count) {
        this.cCount = change.count; 
      }
    })

  }

  
  
}