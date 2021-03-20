import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'finish';

  constructor() {

  }

  ngOnInit() {
    let products = JSON.stringify(localStorage.getItem('products'));
    if (!products || products.length) {
      localStorage.setItem('products', JSON.stringify([]));
    }
  }

}
