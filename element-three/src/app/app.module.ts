import { APP_BASE_HREF } from '@angular/common';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ElementThreeComponent } from './element-three/element-three.component';

@NgModule({
  declarations: [
    ElementThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  entryComponents: [ElementThreeComponent]
})
export class AppModule { 
  constructor(private injector: Injector){}

  ngDoBootstrap(){
    const elementThree = createCustomElement(ElementThreeComponent, {injector: this.injector});
    customElements.define('element-three', elementThree);
  }
}
