import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-element-two',
  templateUrl: './element-two.component.html',
  styleUrls: ['./element-two.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ElementTwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
