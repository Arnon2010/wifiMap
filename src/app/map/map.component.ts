import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SSID, UNIV, User, NewUser } from './model';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  baseUrl: string = 'http://127.0.0.1/ruts-map-wifi/php';
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
      .get<SSID[]>(this.baseUrl + '/getSSID.php')
      .subscribe((response) => {
        this.SSIDList = response;
      });

    this.httpClient
      .get<UNIV[]>(this.baseUrl + '/getUNIV.php')
      .subscribe((response) => {
        this.UNIVList = response;
      });

    this.httpClient
      .get<User[]>(this.baseUrl + '/user/getUser.php')
      .subscribe((response) => {
        this.UserList = response;
      });
  }

  addUser() {
    this.httpClient
      .post<NewUser>(this.baseUrl + '/user/addUser.php', this.user, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .subscribe(() => {
        window.location.reload();
      });
  }

  editUser(user: User) {
    this.httpClient
      .put<User>(this.baseUrl + '/user/editUser.php', user, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .subscribe(() => {
        window.location.reload();
      });
  }

  deleteUser(username: string) {
    this.delUser.username = username;

    this.httpClient
      .post<any>(this.baseUrl + '/user/deleteUser.php', this.delUser, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .subscribe(() => {
        window.location.reload();
      });
  }
  sendUser(user: User) {
    this.updateUser = user;
  }
}
