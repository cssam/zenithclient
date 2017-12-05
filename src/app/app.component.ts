import { Component, OnInit } from '@angular/core';
import {EventService} from './event.service';
import {Event} from './event';
import {Activity} from './activity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'Zenith Society';

  events: Event[];
  selectedEvent: Event;

    constructor(private service: EventService) {
      service.findAll().then(data => this.events = data);
    }

    ngOnInit() {

    }

    onSelect(event: Event): void {
      this.selectedEvent = event;
    }


}
