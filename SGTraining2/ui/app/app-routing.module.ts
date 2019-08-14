import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent} from './app.component';
import { UserDtlServiceService } from './user-dtl-service.service';
import { CommonModule } from '@angular/common';
import {UserData} from './UserData';
import { Observable } from 'rxjs';
import {UserlistComponent} from './userlist/userlist.component';


const routes: Routes = [
  {path:'home', component:AppComponent,
  children: [
    {path: 'dashbaord',component:UserlistComponent}
 ] }  
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
