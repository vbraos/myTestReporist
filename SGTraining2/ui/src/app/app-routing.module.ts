import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent} from './app.component';
import { CommonModule } from '@angular/common';
import {UserlistComponent} from './userlist/userlist.component';
import {UserDtlsDashboardComponent} from './user-dtls-dashboard/user-dtls-dashboard.component';
import {NewUserComponent} from './new-user/new-user.component';
import {TableUserComponent} from './table-user/table-user.component';
import {EditUserComponent} from './edit-user/edit-user.component';

const routes: Routes = [
  {path:'', redirectTo:'/home',pathMatch:'full'},
  {path:'home', component:UserDtlsDashboardComponent},
  {path: 'dashboard',component:TableUserComponent},
  {path: 'newuser',component:NewUserComponent},
  {path: 'edituser/:userId',component:EditUserComponent}
 ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
