import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/share'
import { StorageService } from '../storage.service';
import { MessagingService } from "../messaging.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  number = 0
  message;
  data: any;

  constructor(
      private storageService: StorageService,
      private msgService: MessagingService
      ) {
  }

    ngOnInit() {
        this.number = Number(localStorage.getItem('number'))
            window.addEventListener("storage", ()=> {
            this.number = Number(localStorage.getItem('number'))
        });

        this.msgService.getPermission()
        this.msgService.receiveMessage()
        this.message = this.msgService.currentMessage
      
        this.message.subscribe((message) => {
            if(message != null) {
                this.data = message.data
            }
        })
    }
}
