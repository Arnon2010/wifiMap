import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from '../services/users.service';
import { Building, Fac, Univ, DataTableAccess } from './model';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-report-accesspoint',
  templateUrl: './report-accesspoint.component.html',
  styleUrls: ['./report-accesspoint.component.css'],
})
export class ReportAccesspointComponent implements OnInit {
  isPrint: boolean = false;
  univ_id: number = 0;
  fac_id: number = 0;
  building_id: number = 0;

  UnivList: Univ[] = [];
  FacList: Fac[] = [];
  BuildingList: Building[] = [];
  dataTableAccess: DataTableAccess[] = [];

  constructor(
    private userService: UsersService,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.getUnivList();
  }

  logout() {
    this.userService.deleteToken();
    window.location.href = '/login';
  }

  getUnivList() {
    this.httpClient
      .get<Univ[]>(environment.baseUrl + '/getUNIV.php')
      .subscribe((response) => {
        console.log('data univ: ', response);
        this.UnivList = response;
      });
  }

  getFacList(univ_id: any) {
    this.httpClient
      .get<Fac[]>(environment.baseUrl + '/getFAC.php?univ_id=' + univ_id)
      .subscribe((response) => {
        console.log('data fac: ', response);
        this.FacList = response;
      });
  }

  getBuildingList(fac_id: any) {
    this.httpClient
      .get<Building[]>(
        environment.baseUrl + '/getBuildingList.php?fac_id=' + fac_id
      )
      .subscribe((response) => {
        console.log('data fac: ', response);
        this.BuildingList = response;
      });
  }

  getDataTableAccess(building_id: any) {
    this.httpClient
      .get<DataTableAccess[]>(
        environment.baseUrl +
          '/report/getDataTableAccess.php?building_id=' +
          building_id
      )
      .subscribe((response) => {
        console.log('data: ', response);
        this.dataTableAccess = response;
      });
  }

  print(content: any) {
    var win = window.open('/form-report1', '_blank');
    if (win !== null) {
      // win.document.write(win)
      content.style = 'display: None;';
      //console.log(content)
      win.print();
      content.style = 'margin-left: 90%;display: box;';
    }
  }
}
