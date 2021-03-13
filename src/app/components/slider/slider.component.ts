import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {


  constructor() { }


  ngOnInit() {

  }

  homeSlider = { items: 1, dots: true, nav: false, loop: true };

}
