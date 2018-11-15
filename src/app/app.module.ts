import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { BarecodeScannerLivestreamModule } from 'ngx-barcode-scanner';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BarecodeScannerLivestreamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
