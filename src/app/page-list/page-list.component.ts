import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PageService} from "../service/page.service";
import {Page} from "../model/page.model";

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})

export class PageListComponent implements OnInit {

  pages: Page[];

  constructor(private router: Router, private pageService: PageService) { }

  ngOnInit() {
    this.pageService.getPages()
      .subscribe( data => {
        this.pages = data.data;
        if (this.pages != null) {
	        this.pages.forEach(page => {
	        });
	    }
    });
  }

  addPage(): void {
    this.router.navigate(['page-create']);
  };

  editPage(page: Page): void {
    localStorage.removeItem("editPageId");
    localStorage.setItem("editPageId", page.page_id.toString());
    this.router.navigate(['page-edit']);
  };

  deletePage(page: Page): void {
    this.pageService.deletePage(page.page_id)
      .subscribe( data => {
        this.pages = this.pages.filter(u => u !== page);
      })
  };

}


