import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PageService} from "../service/page.service";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-create',
  templateUrl: './page-create.component.html',
  styleUrls: ['./page-create.component.css']
})
export class PageCreateComponent implements OnInit {

  addForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private router: Router,private pageService: PageService) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      // id: [],
      page_title: ['', Validators.required],
      page_slug: ['', Validators.required],
      page_description: ['', Validators.required]
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
    
    this.pageService.createPage(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['page-list']);
      });
  }

}
