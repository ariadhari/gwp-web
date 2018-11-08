import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../service/user.service";
import {User} from "../model/user.model";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {

  users: User[];

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe( data => {
        this.users = data.data;
        this.users.forEach(user => {
          // console.log(user);
        });
    });
  }

  addUser(): void {
    this.router.navigate(['user-create']);
  };

  editUser(user: User): void {
    localStorage.removeItem("editUserId");
    localStorage.setItem("editUserId", user.uid.toString());
    this.router.navigate(['user-edit']);
  };

  deleteUser(user: User): void {
    this.userService.deleteUser(user.uid)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

}
