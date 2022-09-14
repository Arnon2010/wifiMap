import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SSID, UNIV, User, NewUser } from './model';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
    SSIDList: SSID[] = [];
    UNIVList: UNIV[] = [];
    UserList: User[] = [];
  
    user: NewUser = {
      name: '',
      passwd: '',
      role: '',
      univ_id: 0,
      ssidId: 1,
    };
  
    updateUser: User = {
      username: '',
      role: '',
      univ_local: 0,
      univ_name: '',
      ssidName: '',
      ssidId: 1,
      color: '',
    };
  
    delUser: any = {
      username: '',
    };
  
    constructor(private httpClient: HttpClient) {}
  
    ngOnInit(): void {
      
      this.httpClient
        .get<SSID[]>(environment.baseUrl + '/getSSID.php')
        .subscribe((response) => {
          this.SSIDList = response;
        });
  
      this.httpClient
        .get<UNIV[]>(environment.baseUrl + '/getUNIV.php')
        .subscribe((response) => {
          this.UNIVList = response;
        });
  
      this.getUser();
    }

    getUser() {
      this.httpClient
        .get<User[]>(environment.baseUrl + '/user/getUser.php')
        .subscribe((response) => {
          this.UserList = response;
      });
    }
  
    addUser() {
      this.httpClient
        .post<NewUser>(environment.baseUrl + '/user/addUser.php', this.user, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .subscribe(() => {
          this.getUser();
        });
    }
  
    editUser(user: User) {
      this.httpClient
        .put<User>(environment.baseUrl + '/user/editUser.php', user, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .subscribe(() => {
          this.getUser();
        });
    }
  
    deleteUser(username: string) {
      this.delUser.username = username;
  
      this.httpClient
        .post<any>(environment.baseUrl + '/user/deleteUser.php', this.delUser, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .subscribe(() => {
          this.getUser();
        });
    }
    sendUser(user: User) {
      this.updateUser = user;
    }
  }
