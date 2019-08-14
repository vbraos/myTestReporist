import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { UserDtlServiceService } from '../user-dtl-service.service';
import {UserData} from '../UserData';
import { Router } from '@angular/router'


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  private userDataObservable:Observable<any> ; 

  constructor(private uservice: UserDtlServiceService,private router: Router ) { 
    console.log(' in user list constructor');

  }

 

  ngOnInit()
  {
    console.log(' in user list ngOnInit');
    this.userDataObservable = this.uservice.get_users();

  }

}
