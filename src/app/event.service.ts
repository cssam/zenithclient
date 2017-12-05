
import { Injectable } from '@angular/core';
import {SERVER_URL} from './config';
import {Event} from './event';

import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


//const brokersURL = SERVER_URL + 'eventAPI/';

@Injectable()
export class EventService {

  constructor(public http: Http) {

  }

  findAll() {
      return this.http.get(SERVER_URL + '/events')
          .map(res => res.json())
          .toPromise();
  }

  findById(id) {
      return this.http.get(SERVER_URL + '/event/' + id)
          .map(res => res.json())
          .toPromise();
  }



}
