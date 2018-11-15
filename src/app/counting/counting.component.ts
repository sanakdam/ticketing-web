import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-counting',
  templateUrl: './counting.component.html',
  styleUrls: ['./counting.component.css']
})
export class CountingComponent implements OnInit {
  audio = new Audio();
  payload = {} as any;

  constructor(private http: Http) { }

  ngOnInit() {
    // this.count()
    // this.playBuup()
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
    this.payload['code'] = 834598

    this.http.post('http://101.50.2.59:3031/ticket-validate', this.payload, options)
      .map((res: Response) => res.json())
      .subscribe(res => {
         console.log(res)
         this.playBeep()
      }, (err) => {
        console.log(err)
        this.playBuup()
        // err
      });
  }
}
