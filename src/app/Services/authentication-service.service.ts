import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';

import {environment} from '../../environments/environment';


@Injectable({ providedIn: 'root' })
export class AuthenticationServiceService {
user= new User();
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
      return this.currentUserSubject.value;
  }
// tslint:disable-next-line:no-shadowed-variable

  login(user: User) {
     
      
    const options = {headers: {'Content-Type': 'application/json'}};
    return   this.http.post<User>(`${environment.ApiUrl}` + 'api/v1/user/', JSON.stringify(user), options)
    // return this.http.post(`${environment.ApiUrl}',{user})
   // return this.http.post<any>(`http://localhost:58063/users/authenticate`, { username, password })
          // tslint:disable-next-line:no-shadowed-variable
          .pipe(map(user => {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('currentUser', JSON.stringify(user));
              this.currentUserSubject.next(user);
              return user;
          }));
  }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
  }
}
