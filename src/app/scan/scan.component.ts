import { Component, VERSION, OnInit, ViewChild } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';

import { Result } from '@zxing/library';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
})
export class ScanComponent implements OnInit {
    audio = new Audio();
    ngVersion = VERSION.full;
    error: any

    @ViewChild('scanner')
    scanner: ZXingScannerComponent;

    hasCameras = false;
    hasPermission: boolean;
    qrResultString: string;

    availableDevices: MediaDeviceInfo[];
    selectedDevice: MediaDeviceInfo;

    constructor(private http: Http) {
    }

    ngOnInit(): void {

        this.scanner.camerasFound.subscribe((devices: MediaDeviceInfo[]) => {
            this.hasCameras = true;

            console.log('Devices: ', devices);
            this.availableDevices = devices;
        });

        this.scanner.camerasNotFound.subscribe((devices: MediaDeviceInfo[]) => {
            console.error('An error has occurred when trying to enumerate your video-stream-enabled devices.');
        });

        this.scanner.permissionResponse.subscribe((answer: boolean) => {
          this.hasPermission = answer;
        });

        this.playBeep()
    }

    setHeader(options: RequestOptions) {
        const headers = new Headers();
        headers.append('Content-Type', `application/json`);
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

    handleQrCodeResult(resultString: string) {
        console.log('Result: ', resultString);
        this.qrResultString = resultString;

        const options = new RequestOptions();
        this.setHeader(options);

        this.http.post('https://api.marung.gumcode.net/validate', {
            code: resultString
        }, options)
        .map((res: Response) => res.json())
        .subscribe(res => {
            return this.playBeep().then(() => {
                alert("Validasi berhasil!")
            })
        }, (err) => {
            this.error = err
            alert("Data tiket tidak ditemukan!")
        });
    }

    onDeviceSelectChange(selectedValue: string) {
        console.log('Selection changed: ', selectedValue);
        this.selectedDevice = this.scanner.getDeviceById(selectedValue);
    }
}
