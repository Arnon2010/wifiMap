import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AP, BuildingDetail } from './model';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-main-admin',
  templateUrl: './main-admin.component.html',
  styleUrls: ['./main-admin.component.css'],
})
export class MainAdminComponent implements OnInit {
  baseUrl: string = 'http://127.0.0.1/ruts-map-wifi/php';
  APList: AP[] = [];
  selectAP: any;

  buildingDetail: BuildingDetail = {
    access_name: '',
    building_id: 0,
    building_name: '',
    fac_name: '',
    univ_name: '',
  };

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient
      .get<AP[]>(this.baseUrl + '/getAP.php')
      .subscribe((response) => {
        this.APList = response;
      });
  }

  changeAP(select: any) {
    const ap = this.APList.find((ap) => {
      return ap.id === select.value;
    });
    this.selectAP = ap;

    this.getDetail(this.selectAP.apName);
  }

  getDetail(apName: String) {
    this.httpClient
      .post<BuildingDetail>(this.baseUrl + '/getBuilding.php', {
        apName: apName,
      })
      .subscribe((response: any) => {
        this.buildingDetail = response[0];
      });
  }
}
