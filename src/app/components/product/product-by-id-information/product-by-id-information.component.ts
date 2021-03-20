import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-by-id-information',
  templateUrl: './product-by-id-information.component.html',
  styleUrls: ['./product-by-id-information.component.scss']
})
export class ProductByIdInformationComponent implements OnInit {

  id: string;
  product: any;
  selectedCount = 1;
  counts: number[] = [];

  constructor(public productService: ProductsService, private activateRoute: ActivatedRoute, public http: HttpClient) {
  }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];

    this.http.get(`https://nodejs-final-mysql.herokuapp.com/products/${this.id}`).subscribe(res => {
      this.product = res;
      for (let i = 1; i <= this.product.countInStock; i++) {
        this.counts.push(i);
      }
    });
  }

  buyProduct(product: IProduct): void {
    this.productService.buyProductAndCount({ products: product, count: Number(this.selectedCount) });
  }

}
