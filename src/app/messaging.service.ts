import { Injectable }          from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth }     from 'angularfire2/auth';
import { environment } from '../environments/environment';
import * as firebase from 'firebase';

import 'rxjs/add/operator/take';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MessagingService {
    payload = {} as any;
    messaging;
    currentMessage = new BehaviorSubject(null)

    constructor(
    private db: AngularFireDatabase, 
    private afAuth: AngularFireAuth,
    private http: Http) {
        if (firebase.messaging.isSupported()) {
            this.messaging = firebase.messaging();
        }
    }

    setHeader(options: RequestOptions) {
        const headers = new Headers();
        headers.append('Content-Type', `application/json; charset=utf-8`);
        options.headers = headers;
    }


    updateToken(token) {
        this.afAuth.authState.take(1).subscribe(user => {
          if (!user) return;

          const data = { [user.uid]: token }
          this.db.object('fcmTokens/').update(data)
        })
    }

    getPermission() {
        this.messaging.requestPermission()
        .then(() => {
            console.log('Notification permission granted.');
            return this.messaging.getToken()
        })
        .then(token => {
            this.updateToken(token)
            this.updateFcm(token)
        })
        .catch((err) => {
            console.log('Unable to get permission to notify.', err);
        });
    }

    updateFcm(token) {
        const options = new RequestOptions();
        this.setHeader(options);
        this.payload['reg_id'] = token;

        this.http.put('https://api.marung.gumcode.net/fcm', this.payload, options)
         .map((res: Response) => res.json())
         .subscribe(data => {
            console.log(data)
        }, (err) => {
            console.log(err)         
        });

    }

    receiveMessage() {
        this.messaging.onMessage((payload) => {
            this.currentMessage.next(payload)
        });
    }
}