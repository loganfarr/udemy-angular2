import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { UsersService } from './users.service';

@Component({
  selector: 'users',
  templateUrl: 'app/users/users.component.html',
  styles: [`
    .glyphicon-remove {
      cursor: pointer;
    }
  `]
})

export class UsersComponent implements OnInit {
  users = [];

  constructor(private _userService: UsersService) {

  }

  ngOnInit() {
    this._userService.getUsers().subscribe( res => this.users = res );
  }

  deleteUser(user) {
    console.log(user);

    if(confirm("Are you sure you want to delete " + user.name + "?")) {
      if(user != null && user != undefined) {
        this.users.splice(user.id-1, 1);
        this._userService.deleteUser(user).subscribe(res => console.log(res));
      }
    }
  }
}