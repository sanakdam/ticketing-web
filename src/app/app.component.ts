import { Component, OnInit } from '@angular/core';
import { MessagingService } from "./messaging.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{ 
  message;

   constructor(
      private msgService: MessagingService) {
     }

     ngOnInit() {
      this.msgService.getPermission()
      this.msgService.receiveMessage()
      this.message = this.msgService.currentMessage
      
      this.message.subscribe((message) => {
         if(message != null) {
           console.log(message);
            new Notification(message.notification.title + "( " + message.data.title + " )", { body: message.data.body , icon: "http://api.partner.dolano.id:8081/partner/image/dolano_logo.png" });
         }
      })
  }
}