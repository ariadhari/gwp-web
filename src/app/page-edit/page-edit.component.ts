import { Component, OnInit } from '@angular/core';
import {PageService} from "../service/page.service";
import {Router} from "@angular/router";
import {Page} from "../model/page.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})

export class PageEditComponent implements OnInit {

  page: Page;
  editForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private router: Router, private pageService: PageService) { }

  ngOnInit() {
    let pageId = localStorage.getItem("editPageId");
    if(!pageId) 
    {
      alert("Invalid action.")
      this.router.navigate(['page-list']);
      return;
    }

    this.editForm = this.formBuilder.group({
      page_id: [],
      page_title: ['', Validators.required],
      page_slug: ['', Validators.required],
      page_description: ['', Validators.required]
    });

    this.pageService.getPageById(+pageId)
      .subscribe( data => {
        console.log(data.data);
        this.editForm.setValue({
          // data
          page_id: data.data.page_id,
          page_title: data.data.page_title,
          page_slug: data.data.page_slug,
          page_description: data.data.page_description
          
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

    this.pageService.updatePage(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['page-list']);
        },
        error => {
          alert(error);
        });
  }

}
