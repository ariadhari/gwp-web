import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Page} from "../model/page.model";

@Injectable()
export class PageService {
  constructor(private http: HttpClient) { }
  // baseUrl: string = 'http://localhost:8080/user-portal/users';
  baseUrl: string = 'http://localhost:8080/services-gwp-web/page_api/page';

  getPages() {
    return this.http.get<Page[]>(this.baseUrl);
  }

  getPageById(id: number) {
    return this.http.get<Page>(this.baseUrl + '/' + id);
  }

  createPage(page: Page) {
    return this.http.post(this.baseUrl, page);
  }

  updatePage(page: Page) {
    return this.http.post(this.baseUrl + '/' + page.page_id, page);
  }

  deletePage(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}