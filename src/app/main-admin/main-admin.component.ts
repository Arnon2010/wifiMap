import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AP, BuildingDetail } from './model';
import { environment } from '../../environments/environment';
import { Loader } from '@googlemaps/js-api-loader';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-main-admin',
  templateUrl: './main-admin.component.html',
  styleUrls: ['./main-admin.component.css'],
})
export class MainAdminComponent implements OnInit {
  baseUrl: string = environment.baseUrl;
  APList: AP[] = [];
  selectAP: any;

  title = "google-maps"
  private map: google.maps.Map | undefined

  buildingDetail: BuildingDetail = {
    access_name: '',
    building_id: 0,
    building_name: '',
    fac_name: '',
    univ_name: '',
  };

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {

    // load the google map on the browser

    let loader = new Loader({
      apiKey: ''
    });

    loader.load().then(() => {
      console.log("loaded map")
      const location = {
        lat: 25.2744,
        lng: 133.7751,
      }

      const portalDiv = document.getElementById('map')!;

      this.map = new google.maps.Map(portalDiv,{
        center: location,
        zoom: 6
      })
    })

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
