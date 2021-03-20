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
  countByProduct = 0;
  counts = Array;

  constructor(public productService: ProductsService, private activateRoute: ActivatedRoute, public http: HttpClient) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];

    this.http.get(`https://nodejs-final-mysql.herokuapp.com/products/${this.id}`).subscribe(res => {
      this.product = res;
    });
  }

  // IProduct => IGetProductAndCount але це ще напевно створити функцію в сервісі для покупки щоб в 
  // неї продукт іншого інтерфесу передати
  buyProduct(product: IProduct) {
    this.productService.buy(product);
  }
}
