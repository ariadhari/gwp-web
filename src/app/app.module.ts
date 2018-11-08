import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {routing} from "./app.routing";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import { UserListComponent } from './user-list/user-list.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import {UserService} from "./service/user.service";

import { PageListComponent } from './page-list/page-list.component';
import { PageCreateComponent } from './page-create/page-create.component';
import { PageEditComponent } from './page-edit/page-edit.component';
import {PageService} from "./service/page.service";

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserCreateComponent,
    UserEditComponent,
    PageListComponent,
    PageCreateComponent,
    PageEditComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UserService, PageService],
  bootstrap: [AppComponent]
})

export class AppModule { }
