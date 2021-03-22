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
  id: string;

  constructor(public http: HttpClient, public router: Router, public topProductService: TopProsuctsService) { }

  ngOnInit(): void {
    this.topProductService.getProducts()
      .subscribe((res: IProduct[]) => {
        // console.log(res);
        this.items = res;
      });
  }

  // Переход на продукт при клике
  goToProd(id: string): void {
    this.router.navigate([`products/${id}`]);
  }
}



