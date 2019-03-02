import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-counting',
  templateUrl: './counting.component.html',
  styleUrls: ['./counting.component.css']
})
export class CountingComponent implements OnInit {
  audio = new Audio();
  payload = {} as any;
  number = 0

  constructor(private http: Http, private storageService: StorageService) { }

  ngOnInit() {
    this.number = Number(localStorage.getItem('number'))
    // this.count()
    // this.playBeep()
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

  count() {
    const options = new RequestOptions();
    this.setHeader(options);

    this.http.get('http://192.168.1.9:3000/counting', options)
      .map((res: Response) => res.json())
      .subscribe(res => {
         this.number = res['data'];
         this.storageService.store('number', this.number)
         this.playBeep()
      }, (err) => {
        console.log(err)
        this.playBuup()
        // err
      });
  }
}
