import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 import { HttpModule } from '@angular/http';

import { BarecodeScannerLivestreamModule } from 'ngx-barcode-scanner';

import { AppComponent } from './app.component';
import { ValidationComponent } from './validation/validation.component';
import { CountingComponent } from './counting/counting.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ValidationComponent,
    CountingComponent
  ],
  imports: [
    BrowserModule,
    BarecodeScannerLivestreamModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
