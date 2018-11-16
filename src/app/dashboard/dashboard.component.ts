import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/share'
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  number = 0

  constructor(private storageService: StorageService) {
  }

  ngOnInit() {
    this.number = Number(localStorage.getItem('number'))
    window.addEventListener("storage", ()=> {
      this.number = Number(localStorage.getItem('number'))
    });
  }
}
