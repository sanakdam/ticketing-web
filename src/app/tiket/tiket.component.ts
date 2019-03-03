import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-tiket',
  templateUrl: './tiket.component.html',
  styleUrls: ['./tiket.component.css']
})
export class TiketComponent implements OnInit {
    title = 'app works!';
    games = []
    key: string = 'outlet';
    reverse: boolean = false;
    filter: any;
  
    sort(key){
        this.key = key;
        this.reverse = !this.reverse;
    }

    //initializing p to one
    p: number = 1;
  
    constructor(private http: Http) {
    }

    ngOnInit() {
        this.fetchData()
    }

    setHeader(options: RequestOptions) {
        const headers = new Headers();
        headers.append('Content-Type', `application/json`);
        options.headers = headers;
    }

    fetchData() {
        const options = new RequestOptions();
        this.setHeader(options);

        this.http.get('https://api.marung.gumcode.net/ticket', options)
        .map((res: Response) => res.json())
        .subscribe(res => {
            this.games = res['data']
        }, (err) => {
        });
    }

    onVerify(resultString: string) {
        const options = new RequestOptions();
        this.setHeader(options);

        this.http.post('https://api.marung.gumcode.net/validate', {
            code: resultString
        }, options)
        .map((res: Response) => res.json())
        .subscribe(res => {
            this.fetchData()
            alert("Validasi berhasil!")
        }, (err) => {
            this.fetchData()
            alert("Data tiket tidak ditemukan!")
        });
    }
}    
