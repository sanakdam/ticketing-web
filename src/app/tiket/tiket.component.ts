import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tiket',
  templateUrl: './tiket.component.html',
  styleUrls: ['./tiket.component.css']
})
export class TiketComponent implements OnInit {
  title = 'app works!';
  games = [
    {
      "id":"1",
      "name": "DOTA 2",
      "genre": "Strategy"
    },
    {
      "id":"2",
      "name": "AOE 3",
      "genre": "Strategy"
    },
    {
      "id":"3",
      "name": "GTA 5",
      "genre": "RPG"
    },
    {
      "id":"4",
      "name": "Far Cry 3",
      "genre": "Action"
    },
    {
      "id":"5",
      "name": "GTA San Andreas",
      "genre": "RPG"
    },
    {
      "id":"6",
      "name": "Hitman",
      "genre": "Action"
    },
    {
      "id":"7",
      "name": "NFS MW",
      "genre": "Sport"
    },{
      "id":"8",
      "name": "Fifa 16",
      "genre": "Sport"
    },{
      "id":"9",
      "name": "NFS Sen 2",
      "genre": "Sport"
    },{
      "id":"10",
      "name": "Witcher Assasins on King",
      "genre": "Adventure"
    }
  ]
  key: string = 'name'; //set default
  reverse: boolean = false;
  
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

  //initializing p to one
  p: number = 1;
  filter = {} as any;
  
  constructor() { }

  ngOnInit() {
  }

}
