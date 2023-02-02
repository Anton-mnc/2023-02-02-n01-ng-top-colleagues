import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { C1Component } from './c1/c1.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    C1Component,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
