import { APP_BASE_HREF } from '@angular/common';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ElementOneComponent } from './element-one/element-one.component';

@NgModule({
  declarations: [
    ElementOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  entryComponents: [ElementOneComponent]
})
export class AppModule { 
  constructor(
    private injector: Injector
  ){

  }

  ngDoBootstrap(){
    const elementOne = createCustomElement(ElementOneComponent, {injector: this.injector});
    customElements.define('element-one', elementOne);
  }
}
