import { IGetProductAndCount } from './../../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  selectedCount: number;
  counts: number[] = [];
  value: number;

  // Прдтягиваем с родительского элем продукт
  @Input('product') product: IGetProductAndCount;
  // Передаём в родительскую компоненту
  @Output() sendSelectedCount = new EventEmitter<number>(); // !

  constructor(public productService: ProductsService, public http: HttpClient) { }

  ngOnInit(): void {
    // Вывод к-во товаров в селекте
    this.selectedCount = this.product.count;
    for (let i = 1; i <= this.product.products.countInStock; i++) {
      this.counts.push(i);
    }

  }

  // !Нужен ли параметр велью?
  send(value: number) {
    this.product.count = +this.selectedCount;
  }

}
