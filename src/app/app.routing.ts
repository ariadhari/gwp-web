import { RouterModule, Routes } from '@angular/router';
// import {LoginComponent} from "./login/login.component";
// import {AppComponent} from "./app.component";
import {UserListComponent} from "./user-list/user-list.component";
import {UserCreateComponent} from "./user-create/user-create.component";
import {UserEditComponent} from "./user-edit/user-edit.component";

import {PageListComponent} from "./page-list/page-list.component";
import {PageCreateComponent} from "./page-create/page-create.component";
import {PageEditComponent} from "./page-edit/page-edit.component";


const routes: Routes = [
  { path: 'user-list', component: UserListComponent },
  { path: 'user-create', component: UserCreateComponent },
  { path: 'user-edit', component: UserEditComponent },
  // {path : '', component : UserListComponent}
  { path: 'page-list', component: PageListComponent },
  { path: 'page-create', component: PageCreateComponent },
  { path: 'page-edit', component: PageEditComponent }
];

export const routing = RouterModule.forRoot(routes);