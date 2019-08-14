import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UserDtlsWeb';
  mode = new FormControl('side');

  constructor (private router: Router)
  { }
  goToDBPage()
  {
    console.log(' in app comonent gotoDBPage');
    this.router.navigate([`home/dashboard`]);
  }
}
