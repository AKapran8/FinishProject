import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-by-id-info',
  templateUrl: './product-by-id-info.component.html',
  styleUrls: ['./product-by-id-info.component.scss']
})
export class ProductByIdInfoComponent implements OnInit {

  id: string;
  product: any;

  constructor(public productService: ProductsService, private activateRoute: ActivatedRoute, public http: HttpClient) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];

    this.http.get(`https://nodejs-final-mysql.herokuapp.com/products/${this.id}`).subscribe(res => {
      this.product = res;
    });
  }

  buyProduct(product: IProduct) {
    this.productService.buy(product);
  }
}
