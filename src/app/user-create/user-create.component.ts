import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../service/user.service";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})

export class UserCreateComponent implements OnInit {

  addForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private router: Router,private userService: UserService) { }

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      // id: [],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      city: ['', Validators.required]
    });

  }

  // convenience getter for easy access to form fields
  get f() { return this.addForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.addForm.invalid) {
        return;
    }
    
    this.userService.createUser(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['user-list']);
      });
  }

}