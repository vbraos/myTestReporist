import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {UserData} from '../UserData';
import {Ng2SmartTableModule,LocalDataSource } from 'ng2-smart-table';
import {UserDtlServiceService} from '../user-dtl-service.service';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-table-user',
  templateUrl: './table-user.component.html',
  styleUrls: ['./table-user.component.css']
})
export class TableUserComponent implements OnInit {
  users: UserData[];
  pageSize = 5;
  editUser: UserData;
  
  // add this config
  settings = {
    mode: external,
    add: {
      confirmCreate: true,
    },
    edit: {
      confirmSave: true,
    },
    delete: {
      confirmDelete: true,
    },
    columns: {
      userId: {
        title: 'ID',
        editable:false,
        filter:false,
        addable: false
      },
      userName: {
        title: 'Name',
        filter:false
      },
      userType: {
        title: 'Type',
        filter:false
      },
      userGrade: {
        title: 'Grade.',
        filter:false
      }
    },
    actions:{
      columnTitle: '',
      add: true,
      edit: false,
      delete: false
    },
    pager:
     {
      perPage: 5
      }
    
  };

  constructor(private service: UserDtlServiceService,private router: Router ) { 
  }

  ngOnInit() {
   this.getData1();
   console.log('in on ng init');
}

getData1()
{
  this.service.get_users1().subscribe((data: UserData[]) => {
    this.users = data;
    console.log("in table user comp"+this.users);
});
}

getData(pageNo:string,sortOn:string)
{
  this.service.get_users(pageNo,sortOn).subscribe((data: UserData[]) => {
    this.users = data;
    console.log("in table user comp"+this.users);
});
this.service.get_users(pageNo,sortOn).subscribe().unsubscribe;
}

  onCreateConfirm(event) {
    console.log("Create Event In Console")
    console.log(event);
    let createrec = window.confirm("Are you sure to Add Record");
    if (createrec)
    {
    this.service.addUser(event.newData).subscribe(
      data =>{
        event.confirm.resolve(event.newData);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
          window.alert("Server-side error occured.");
        }
      });
    this.getData("1","5");
    }
  }

  onSaveConfirm(event) {
    console.log("Edit Event In Console")
    console.log(event);
    let editrec = window.confirm("Are you sure to Save the changes Record");
    if (editrec)
    {
    this.service.edituser(event.newData).subscribe(
      data =>{
        event.confirm.resolve(event.newData);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
          window.alert("Server-side error occured.");
        }
      });
      this.service.edituser(event.newData).subscribe().unsubscribe;
    this.getData("1","5");
    } 
   }

  onDeleteConfirm(event) {
    console.log("Delete Event In Console")
    console.log(event);
    let deleterec = window.confirm("Are you sure to delete");
    if (deleterec) {
    this.service.deleteuser(event.data).subscribe(
      data =>{
        event.confirm.resolve(event.data);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
          window.alert("Server-side error occured.");
        }
      });
      this.service.deleteuser(event.data).subscribe().unsubscribe;
    this.getData("1","5");
  }
  }

  onRowSelect(event)
  {
    console.log("row selected"+event);
    console.log("on row select"+event.data.userId);
    this.router.navigate(['/edituser/'+event.data.userId]);

  }

  onCreateClicked(event)
  {
    console.log("create clicked"+event);
  }


}
