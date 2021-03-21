import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { TopProsuctsService } from 'src/app/services/top-prosucts.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {


  items: IProduct[] = [];

  constructor(public http: HttpClient, public router: Router, public topProductService: TopProsuctsService) { }

  // homeSlider = {items : 1, dots: true, nav: false, loop: true};

  ngOnInit(): void {
    this.topProductService.getProducts()
      .subscribe((res: IProduct[]) => {
        // console.log(res);
        this.items = res;
      });
  }
}
