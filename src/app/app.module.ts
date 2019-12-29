import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OlaComponent } from './ola/ola.component';
import { DestroyComponent } from './destroy/destroy.component';

@NgModule({
  declarations: [
    AppComponent,
    OlaComponent,
    DestroyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
