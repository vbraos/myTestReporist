import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs'
import { UserData } from './UserData';


@Injectable({
  providedIn: 'root'
})
export class UserDtlServiceService {
  baseUrl:string ='http://localhost:8080';
  constructor(private http: HttpClient) { }

  get_users()
  {
    console.log('in comp get_users');
    return this.http.get(this.baseUrl+'/all');
  }
}
