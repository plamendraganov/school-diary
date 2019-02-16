import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  events: any[];

  constructor() { }

  ngOnInit() {
    this.events = [
      {
        "title": "All Day Event",
        "start": "2019-02-02"
      },
      {
        "title": "Long Event",
        "start": "2019-02-05",
        "end": "2019-02-07"
      }
    ]
  }

}
