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

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireMessagingModule } from 'angularfire2/messaging';
import { MessagingService } from './messaging.service';
import { TiketComponent } from './tiket/tiket.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ValidationComponent,
    CountingComponent,
    DashboardComponent,
    DecreaseComponent,
    ScanComponent,
    TiketComponent,
  ],
  imports: [
    BrowserModule,
    BarecodeScannerLivestreamModule,
    AppRoutingModule,
    HttpModule,
    ZXingScannerModule.forRoot(),
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    FormsModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule, 
    AngularFireMessagingModule,
  ],
  providers: [StorageService, MessagingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
