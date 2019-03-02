import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { BarecodeScannerLivestreamComponent } from 'ngx-barcode-scanner';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit, AfterViewInit {
    audio = new Audio();
    payload = {} as any;
    mySubject = new Subject();

  	constructor(private http: Http) {
        this.mySubject
        .debounceTime(500)
        .subscribe(value => {
            this.barcodeValue = value;

            const options = new RequestOptions();
            this.setHeader(options);
            this.payload['code'] = value;

            this.http.post('https://api.marung.gumcode.net/validate', this.payload, options)
            .map((res: Response) => res.json())
            .subscribe(res => {
                return this.playBeep().then(() => {
                    alert("Validasi berhasil!")
                })
            }, (err) => {
                return this.playBuup().then(() => {
                    alert("Tiket tidak ditemukan atau sudah melakukan validasi!")
                }) 
            });
        });
    }

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
        this.mySubject.next(value.code);
    }
}
