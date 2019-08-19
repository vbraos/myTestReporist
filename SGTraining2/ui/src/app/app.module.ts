import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpHeaders} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { Observable } from 'rxjs'
import {MatMenuModule, MatButtonModule} from '@angular/material'
import { MatTabsModule, MatSidenavModule,MatToolbarModule } from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserDtlsDashboardComponent } from './user-dtls-dashboard/user-dtls-dashboard.component';
import { NewUserComponent } from './new-user/new-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import {Ng2SmartTableModule } from 'ng2-smart-table';
import { TableUserComponent } from './table-user/table-user.component';


@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    UserDtlsDashboardComponent,
    NewUserComponent,
    EditUserComponent,
    TableUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatMenuModule, MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CommonModule,
    MatTabsModule,
    MatSidenavModule,
    Ng2SmartTableModule
  ],
  exports :[
    MatTabsModule,
    MatSidenavModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
