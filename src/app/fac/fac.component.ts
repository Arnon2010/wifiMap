import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UNIV, Fac, NewFac } from './model';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-fac',
  templateUrl: './fac.component.html',
  styleUrls: ['./fac.component.css']
})
export class FacComponent implements OnInit {

  
  UNIVList: UNIV[] = [];
  FacList: Fac[] = [];
  
    fac: NewFac = {
      fac_name: '',
      univ_id: 0
    };
  
    updateFac: Fac = {
      fac_id: 0,
      fac_name: '',
      univ_id: 0,
      univ_name: '',
      fac_status: '',
    };
  
    delFac: any = {
      fac_id: '',
    };
  
    constructor(private httpClient: HttpClient) {}
  
    ngOnInit(): void {
      this.httpClient
        .get<UNIV[]>(environment.baseUrl + '/getUNIV.php')
        .subscribe((response) => {
          this.UNIVList = response;
        });
      this.getFac();
    }

    getFac() {
      this.httpClient
        .get<Fac[]>(environment.baseUrl + '/fac/getFac.php')
        .subscribe((response) => {
          this.FacList = response;
        });
    }
  
    addFac() {
      this.httpClient
        .post<NewFac>(environment.baseUrl + '/fac/addFac.php', this.fac, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .subscribe(() => {
          this.getFac();
        });
    }
  
    editFac(fac: Fac) {
      this.httpClient
        .put<Fac>(environment.baseUrl + '/fac/editFac.php', fac, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .subscribe(() => {
          this.getFac();
        });
    }
  
    deleteFac(fac_id: any) {
      this.delFac.fac_id = fac_id;
      this.httpClient
        .post<any>(environment.baseUrl + '/fac/deleteFac.php', this.delFac, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .subscribe(() => {
          this.getFac();
        });
    }

    sendFac(fac: Fac) {
      this.updateFac = fac;
    }

}
