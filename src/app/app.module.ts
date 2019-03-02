import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 import { HttpModule } from '@angular/http';

import { BarecodeScannerLivestreamModule } from 'ngx-barcode-scanner';

import { AppComponent } from './app.component';
import { ValidationComponent } from './validation/validation.component';
import { CountingComponent } from './counting/counting.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

import { StorageService } from './storage.service';
import { DecreaseComponent } from './decrease/decrease.component';
import { ScanComponent } from './scan/scan.component';


@NgModule({
  declarations: [
    AppComponent,
    ValidationComponent,
    CountingComponent,
    DashboardComponent,
    DecreaseComponent,
    ScanComponent,
  ],
  imports: [
    BrowserModule,
    BarecodeScannerLivestreamModule,
    AppRoutingModule,
    HttpModule,
    ZXingScannerModule.forRoot()
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
