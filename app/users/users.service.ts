import { Http }       from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class UsersService {
  private _url = "http://jsonplaceholder.typicode.com/users";

  constructor(private _http: Http) {

  }

  getUsers() {
    return this._http.get(this._url).map(res => res.json());
  }

  createUser(user) {
    return this._http.post(this._url, JSON.stringify(user)).map(res => res.json());
  }

  getUser(id) {
    return this._http.get(this._url + '/' + id).map(res => res.json());
  }

  updateUser(user, id) {
    return this._http.put(this._url + '/' + id, JSON.stringify(user)).map(res => res.json());
  }

  deleteUser(id) {
    return this._http.delete(this._url).map(res => res.json());
  }
}