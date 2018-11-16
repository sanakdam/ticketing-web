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
        headers.append('Content-Type', `application/json; charset=utf-8`);
        options.headers = headers;
    }

    playBeep() {
        return new Promise((resolve, reject) => {
            this.audio.src = "./assets/beep.mp3"
            this.audio.load()
            this.audio.play()
            resolve()
        })
    }

    playBuup() {
        return new Promise((resolve, reject) => {
            this.audio.src = "./assets/buup.mp3"
            this.audio.load()
            this.audio.play()
            resolve()
        })
    }
 
    onValueChanges(value){
        this.barcodeValue = value.code;

        const options = new RequestOptions();
        this.setHeader(options);
        this.payload['code'] = value.code;

        this.http.post('http://101.50.2.59:3031/ticket-validate', this.payload, options)
        .map((res: Response) => res.json())
        .subscribe(res => {
            return this.playBeep().then(() => {
                alert("Validasi berhasil!")
            })
        }, (err) => {
            return this.playBuup().then(() => {
                alert("Tiket tidak ditemukan!")
            }) 
        });
    }
}
