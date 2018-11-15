import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { BarecodeScannerLivestreamComponent } from 'ngx-barcode-scanner';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit, AfterViewInit {
    audio = new Audio();
    payload = {} as any;

  	constructor(private http: Http) { }

	ngOnInit() {
        this.playBeep()
	}

    @ViewChild(BarecodeScannerLivestreamComponent)
    BarecodeScanner: BarecodeScannerLivestreamComponent;
    
    barcodeValue;
    
    ngAfterViewInit() {
        this.BarecodeScanner.start();
    }

    setHeader(options: RequestOptions) {
        const headers = new Headers();
        headers.append('Content-Type', `application/json`);
        options.headers = headers;
    }

    playBeep() {
        this.audio.src = "./assets/beep.mp3"
        this.audio.load()
        this.audio.play()
    }

    playBuup() {
        this.audio.src = "./assets/buup.mp3"
        this.audio.load()
        this.audio.play()
    }
 
    onValueChanges(value){
        this.barcodeValue = value.code;

        const options = new RequestOptions();
        this.setHeader(options);
        this.payload['code'] = this.barcodeValue

        this.http.post('http://101.50.2.59:3031/ticket-validate', this.payload, options)
        .map((res: Response) => res.json())
        .subscribe(res => {
            console.log(res)
            this.playBeep()
        }, (err) => {
            console.log(err)
            this.playBuup()
        });
    }
}
