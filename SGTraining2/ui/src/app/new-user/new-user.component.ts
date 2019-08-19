import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import {UserData} from '../UserData';
import {UserDtlServiceService} from '../user-dtl-service.service';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  private userDataObservable:Observable<any> ; 
  

  constructor(private service: UserDtlServiceService) { }

  ngOnInit() {
  }

  register(form: {value: UserData; }) {
    console.log(form.value);
    console.log(this.service.add_user(form.value).subscribe());
  }

reset() {
  console.log('screen cleared');
}
}
