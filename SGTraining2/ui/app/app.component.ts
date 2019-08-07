import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDtlServiceService } from './user-dtl-service.service';
import {UserData} from './UserData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'UserDtlsWeb';
  
  private userDataObservable:Observable<any[100]> ; 

  constructor(private uservice: UserDtlServiceService ) { 
  }

  ngOnInit()
  {
    console.log(' in app comp constructor');
    this.userDataObservable = this.uservice.get_users();

  }
}
