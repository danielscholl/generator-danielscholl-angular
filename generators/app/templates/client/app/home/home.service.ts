import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';

// const URL_HOME = 'mock/home.json';
const URL_HOME = '/api/v1/home';

@Injectable()
export class HomeService {

  constructor(private _http: Http) { }

  getData() {
    return this._http.get(URL_HOME)
      .map((response: Response) => response.json())
      .catch(this._handlerError);
  }

  _handlerError(err: any) {
    console.log(err); // log this somewhere and format the message well for devs
    return Observable.throw(err); // our opportunity customize this error
  }
}
