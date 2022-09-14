import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UNIV, Fac, NewBuilding, Building } from './model';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css'],
})
export class BuildingComponent implements OnInit {

  UNIVList: UNIV[] = [];
  FacList: Fac[] = [];
  BuildingList: Building[] = [];

  NewBuilding: NewBuilding = {
    building_name: '',
    fac_id: 0,
  };

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getFac();
    this.getUniv();
    this.getBuilding();
  }

  getUniv() {
    this.httpClient
      .get<UNIV[]>(environment.baseUrl + '/univ/getUniv.php')
      .subscribe((response) => {
        this.UNIVList = response;
      });
  }

  getFac() {
    this.httpClient
      .get<Fac[]>(environment.baseUrl + '/fac/getFac.php')
      .subscribe((response) => {
        this.FacList = response;
      });
  }

  getBuilding() {
    this.httpClient
      .get<Building[]>(environment.baseUrl + '/building/getBuilding.php')
      .subscribe((response) => {
        this.BuildingList = response;
      });
  }

  addBuilding() {
    this.httpClient
      .post<NewBuilding>(
        environment.baseUrl + '/building/addBuilding.php',
        this.NewBuilding,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .subscribe(() => this.getBuilding);
  }
}
