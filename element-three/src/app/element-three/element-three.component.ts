import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-element-three',
  templateUrl: './element-three.component.html',
  styleUrls: ['./element-three.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ElementThreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
