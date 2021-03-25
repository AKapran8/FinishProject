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

  selectedCount = 1;
  counts: number[] = [];
  @Input('product') product: IProduct;
  value: number;


  @Output() sendSelectedCount = new EventEmitter<number>(); // !

  constructor(public productService: ProductsService, public http: HttpClient) { }

  ngOnInit(): void {
    for (let i = 1; i <= this.product.countInStock; i++) {
      this.counts.push(i);
    }

  }

  // Чи потрібно тут параметром велью?
  send(value: number) {
    this.sendSelectedCount.emit(this.selectedCount); // !
    console.log(this.selectedCount);
  }

  // ngOnChanges(changes: SimpleChange): void {
  //   this.sendSelectedCount.emit(this.selectedCount); // !
  //   alert(this.selectedCount);
  // }

}
