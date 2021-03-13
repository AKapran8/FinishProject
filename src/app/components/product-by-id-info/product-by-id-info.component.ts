import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-by-id-info',
  templateUrl: './product-by-id-info.component.html',
  styleUrls: ['./product-by-id-info.component.scss']
})
export class ProductByIdInfoComponent implements OnInit {

  id: string;
  product: any;

  constructor(private activateRoute: ActivatedRoute, public http: HttpClient) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];

    this.http.get(`https://nodejs-final-mysql.herokuapp.com/products/${this.id}`).subscribe(res => {
      this.product = res;
    });
  }

}
