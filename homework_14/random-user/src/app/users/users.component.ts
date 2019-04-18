import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private _users:any[];
  constructor(private userService : UserService) { 
    this._users = userService.getUsers();
  }

  get users():any[]{
    return this._users;
  }

  ngOnInit() {
  }

}
