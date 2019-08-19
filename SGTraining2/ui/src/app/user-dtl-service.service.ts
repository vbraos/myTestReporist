import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { UserData } from './UserData';

@Injectable({
  providedIn: 'root'
})

export class UserDtlServiceService {
  baseUrl:string ='http://localhost:8080/users';
  
  constructor(private http: HttpClient) { }

  get_users(PageNo: string,PageSize:string)
  {
    console.log('in comp get_users');
    const params = new HttpParams()
  .set('pageNo', PageNo)
  .set('pageSize', PageSize);
  return this.http.get(this.baseUrl+'/all',{params});
  }

  get_users1()
  {
    console.log('in comp get_users');
  return this.http.get(this.baseUrl+'/all1');
  }

  add_user(userData: UserData)
  {
    console.log('in comp add_user');
    return this.addUser(userData);
  }

  addUser(userData:UserData):Observable<UserData> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    }
    return this.http.post<UserData>(this.baseUrl+'/nuser', userData, httpOptions);
} 

edituser(userData:UserData):Observable<UserData> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    }
    return this.http.put<UserData>(this.baseUrl+'/'+userData.userId, userData, httpOptions);
}

deleteuser(userData:UserData):Observable<UserData> {
  let httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  }
  return this.http.delete<UserData>(this.baseUrl+'/'+userData.userId, httpOptions);
}

get_user_data(id: string)
  {
    console.log('in comp get_user_data');
  return this.http.get(this.baseUrl+'/'+id);
  }

}
