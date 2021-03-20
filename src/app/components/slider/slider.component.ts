import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { TopProsuctsService } from 'src/app/services/top-prosucts.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  topProducts: any[] = [];

  constructor(public topProductsService: TopProsuctsService) { }


  ngOnInit() {
    this.topProductsService.getProducts()
      .subscribe((res: IProduct[]) => {
        this.topProducts = res;
      });
  }

  homeSlider = {
    items: 1,
    dots: true,
    nav: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3400,
    smartSpeed: 1000
  };
}
