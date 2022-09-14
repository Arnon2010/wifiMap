import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbAlert, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { AC, ACT, Building, FAC, NewDevice, UNIV, UPAC } from './model'
import { FormBuilder, FormGroup } from '@angular/forms';

import {environment} from '../../environments/environment';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {
  
  //baseUrl: string = 'http://127.0.0.1/ruts-wifi/php';

  searchTerm: string = '';

  ACTList: ACT[] = [];
  UNIVList: UNIV[] = [];
  FACList: FAC[] = [];
  BUILDList: Building[] = [];
  ACList: AC[] = [];

  upAC: AC = {
    access_id: '',
    access_name: '',
    building_name: '',
    access_serail: '',
    univ_name: '',
    floor: '',
    access_type_name: '',
    access_status: '',
    fac_name: '',
    access_mac: '',
    access_no: '',
    short_name: '',
    building_id: 0,
    access_room: '',
    access_brand: '',
    access_gen: '',
    access_budget: '',
    access_budgetuse: '',
    access_budgetno: '',
    access_type_id: 0,
    univ_id: 0,
    fac_id: 0,
  }

  device: NewDevice = {
    access_name: '',
    short_name: '',
    access_brand: '',
    access_budget: '',
    access_budgetno: '',
    access_gen: '',
    access_mac: '',
    access_no: '',
    access_room: '',
    access_serial: '',
    access_type_id: 0,
    building_id: 0,
    floor: '',
    access_budgetuse: '',
    fac_id: 0,
    univ_id: 0
  };

  constructor(
    private httpClient: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.getACT();
    this.getUniv();
    //this.getFac();
    //this.getBuilding();
    this.getAC();
  }

  addAC() {
    this.httpClient
      .post<any>(environment.baseUrl + '/device/addAC.php', this.device, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .subscribe(() => {
        this.getAC();
      });
  }
  delAC(access_id: string) {
    if (confirm("คุณต้องการลบอุปกรณ์ตัวนี้หรือไม่")) {
      this.httpClient
        .post<any>(environment.baseUrl + '/device/delAC.php', { access_id }, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .subscribe(() => {
          this.getAC();
        });
    }
  }
  getAC() {
    this.httpClient
      .get<AC[]>(environment.baseUrl + '/device/getAC.php')
      .subscribe((response) => {
        this.ACList = response;
      });
  }

  editAC(access_id: any) {
    this.httpClient
      .post<any>(environment.baseUrl + '/device/getUpdateAC.php', { access_id }, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .subscribe((response) => {
        console.log(response);
        this.upAC = response[0];
        this.getFac(response[0].univ_id);
        this.getBuilding(response[0].fac_id)
      });
  }

  updateAC() {
    this.httpClient
      .post<AC>(environment.baseUrl + '/device/updateAC.php', this.upAC, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .subscribe(() => {
        this.getAC();
      });
  }
  getACT() {
    this.httpClient
      .get<ACT[]>(environment.baseUrl + '/device/getAccessType.php')
      .subscribe((response) => {
        this.ACTList = response;
      });
  }
  getUniv() {
    this.httpClient
      .get<UNIV[]>(environment.baseUrl + '/device/getUniv.php')
      .subscribe((response) => {
        this.UNIVList = response;
      });
  }

  getFac(univ_id: any) {
    this.httpClient
      .post<any>(environment.baseUrl + '/device/getFac.php', { univ_id }, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .subscribe((response) => {
        this.FACList = response;
      });
  }
  getBuilding(fac_id: any) {
    this.httpClient
      .post<any>(environment.baseUrl + '/device/getBuilding.php', { fac_id }, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .subscribe((response) => {
        this.BUILDList = response;
      });
  }

}
