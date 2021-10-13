import { APP_BASE_HREF } from '@angular/common';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ElementTwoComponent } from './element-two/element-two.component';


@NgModule({
  declarations: [
    ElementTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents: [ElementTwoComponent],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
})
export class AppModule {
  constructor(private injector: Injector){}

  ngDoBootstrap(){
    const elementTwo = createCustomElement(ElementTwoComponent, {injector: this.injector});
    customElements.define('element-two', elementTwo);
  }
}
