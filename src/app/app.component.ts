import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { BarecodeScannerLivestreamComponent } from 'ngx-barcode-scanner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  	@ViewChild(BarecodeScannerLivestreamComponent)
    BarecodeScanner: BarecodeScannerLivestreamComponent;
    
    barcodeValue;
    
    ngAfterViewInit() {
        this.BarecodeScanner.start();
    }
 
    onValueChanges(value){
        this.barcodeValue = value.code;
    }
}
