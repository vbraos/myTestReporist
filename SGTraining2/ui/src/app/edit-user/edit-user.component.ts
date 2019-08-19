import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup} from '@angular/forms';
import { Observable } from 'rxjs'
import {UserData} from '../UserData';
import {UserDtlServiceService} from '../user-dtl-service.service';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
   userData: UserData[];

  constructor(private service: UserDtlServiceService,
    private route:ActivatedRoute) { 
      this.readData();
    }
    
  
  ngOnInit() {
   
  }

  readData()
  {
    console.log(this.route.snapshot.paramMap);
    if(this.route.snapshot.paramMap != undefined)
    {
     let id:string = this.route.snapshot.paramMap.get('userId');
    console.log("in edit user comp id="+id);
    this.service.get_user_data(id).subscribe((data: UserData[]) => {
      this.userData = data;
      console.log("in edit user comp"+this.userData);
  });
}
  }
}
