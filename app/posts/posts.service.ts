import { Http }       from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class PostsService {
  private _url = "http://jsonplaceholder.typicode.com/posts";

  constructor(private _http: Http) {

  }

  getPosts() {
    return this._http.get(this._url).map(res => res.json());
  }

  getPost(id) {
    return this._http.get(this._url + "/" + id).map(res => res.json());
  }

  getPostComments(id) {
    return this._http.get(this._url + "/" + id + "/comments").map(res => res.json());
  }

  getUserPosts(userId) {
    return this._http.get(this._url + "?userId=" + userId).map(res => res.json());
  }
}