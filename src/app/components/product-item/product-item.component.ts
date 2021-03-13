import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  users: any[] = [];


  constructor(public productService: ProductsService) {

  }

  ngOnInit(): void {
    this.productService.getUsers()
      .subscribe((res: any[]) => {
        console.log(res);
        this.users = res;
      });

    // this.productService.getProducts()
    //   .subscribe((res: any[]) => {
    //     console.log(res);
    //     this.products = res;
    //   });
  }



  // countStar(star) {
  //   this.selectedValue = star;
  // }

  // addClass(star) {
  //   let ab = "";
  //   for (let i = 0; i < star; i++) {
  //     ab = "starId" + i;
  //     document.getElementById(ab).classList.add("selected");
  //   }
  // }
  // removeClass(star) {
  //   let ab = "";
  //   for (let i = star - 1; i >= this.selectedValue; i--) {
  //     ab = "starId" + i;
  //     document.getElementById(ab).classList.remove("selected");
  //   }
  // }

}
