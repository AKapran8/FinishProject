import { IGetProductAndCount } from './../../interfaces/product';
import { IProduct } from 'src/app/interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';
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


  @Input('product') product: IGetProductAndCount;
  @Output() sendSelectedCount = new EventEmitter<number>(); // !

  constructor(public productService: ProductsService, public http: HttpClient) { }

  ngOnInit(): void {
    this.selectedCount = this.product.count;
    for (let i = 1; i <= this.product.products.countInStock; i++) {
      this.counts.push(i);
    }

  }

  // Чи потрібно тут параметром велью?
  send(value: number) {
    // this.sendSelectedCount.emit(this.selectedCount); // !
    // console.log(this.selectedCount);
    this.product.count = +this.selectedCount;
  }

}
