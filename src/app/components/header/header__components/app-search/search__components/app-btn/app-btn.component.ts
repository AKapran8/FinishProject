import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-btn',
  templateUrl: './app-btn.component.html',
  styleUrls: ['./app-btn.component.scss']
})
export class AppBtnComponent implements OnInit {

  @Input('searchProduct') searchProduct: string;

  constructor() { }

  ngOnInit(): void {
  }

  hello() {
    alert('hello');
  }
}
