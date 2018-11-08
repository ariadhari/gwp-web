import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user.service";
import {Router} from "@angular/router";
import {User} from "../model/user.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})

export class UserEditComponent implements OnInit {

  user: User;
  editForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private router: Router, private userService: UserService) { }

  ngOnInit() {
    let userId = localStorage.getItem("editUserId");
    if(!userId) 
    {
      alert("Invalid action.")
      this.router.navigate(['user-list']);
      return;
    }

    this.editForm = this.formBuilder.group({
      uid: [],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      city: ['', Validators.required]
    });

    this.userService.getUserById(+userId)
      .subscribe( data => {
        console.log(data.data);
        this.editForm.setValue({
          // data
          uid: data.data.uid,
          email: data.data.uemail,
          username: data.data.uusername,
          password: data.data.upassword,
          city: data.data.ucity

        });
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.editForm.controls; }

  onSubmit() {

    this.submitted = true;
    // stop here if form is invalid
    if (this.editForm.invalid) {
        return;
    }

    this.userService.updateUser(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['user-list']);
        },
        error => {
          alert(error);
        });
  }

}