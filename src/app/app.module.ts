import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 import { HttpModule } from '@angular/http';

import { BarecodeScannerLivestreamModule } from 'ngx-barcode-scanner';

import { AppComponent } from './app.component';
import { ValidationComponent } from './validation/validation.component';
import { CountingComponent } from './counting/counting.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { StorageService } from './storage.service';
import { DecreaseComponent } from './decrease/decrease.component';


@NgModule({
  declarations: [
    AppComponent,
    ValidationComponent,
    CountingComponent,
    DashboardComponent,
    DecreaseComponent
  ],
  imports: [
    BrowserModule,
    BarecodeScannerLivestreamModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
