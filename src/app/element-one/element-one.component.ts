import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-element-one',
  templateUrl: './element-one.component.html',
  styleUrls: ['./element-one.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ElementOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
