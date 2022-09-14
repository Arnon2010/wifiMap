import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, first, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  redirectUrl: string = '/home';
  //baseUrl: string = "http://localhost/php";

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient: HttpClient) { }
  public userLogin(username: string, password: string) {
    return this.httpClient.post<any>(environment.baseUrl + '/login.php', { username, password })
      .pipe(map(UserInfo => {
        console.log(UserInfo)
        this.setToken(UserInfo[0].username);
        this.getLoggedInName.emit(true);
        return UserInfo;
      }));
  }
  public changePassword(username:any, old_password: string, new_password: string) {
    return this.httpClient.post<any>(environment.baseUrl + "/changePassword.php", { username, old_password, new_password })
      .pipe(first())
      .subscribe(
        data => {
          if (data["code"] == 403) {
            alert("User old password is incorrect");
          } else {
            alert("Password has been change !!")
          }
        },
        error => {
          console.log(error)
        });
  }
  public userRegistration(name: string, email: string, pwd: string) {
    return this.httpClient.post<any>(environment.baseUrl + '/register.php', { name, email, pwd })
      .pipe(map(UserInfo => {
        return UserInfo;
      }));
  }


  //token
  setToken(token: string) { //it name
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  deleteToken() {
    localStorage.removeItem('token');
  }
  isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken != null) {
      return true
    }
    return false;
  }
}