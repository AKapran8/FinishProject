import { Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {

  products: any[] = [];
  id: string;

  @Input('product') product: IProduct;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  goToProd(id: string): void {
    this.router.navigate([`products/${id}`]);
  }

}
