import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  univList: UNIV[] = [];
  facList: FAC[] = [];
  dataTableUniv: DataTableUniv[] = [];
  dataReport3: DataR3[] = [];
  dataTable3: TableDataR3[] = [];
  dataTable2: TableData2[] = [];
   
  univ_id: any;

  //baseUrl: string = "http://localhost/php";  ** ใช้งานผ่าน environment

  constructor(private http: HttpClient) { 
    // this.getUnivList().subscribe((response) => {
    //   this.univList =response
    // })
    // this.getFacList(this.univ_id).subscribe((response) => {
    //   this.facList =response
    // })
    // this.getDataTableAll().subscribe((response) => {
    //   this.dataTableAll = response.data;
    // })

    // this.getDataTableUniv().subscribe((response) => {
    //   this.dataTableUniv = response
    // })

    this.getDataReport3().subscribe((response) => {
      this.dataReport3 = response;
    })
    this.getDataTable3().subscribe((response) => {
      this.dataTable3 = response;
    })
    this.getDataTable2().subscribe((response) => {
      this.dataTable2 = response;
    })
  }

  // // Univ วิทยาเขต
  // getUnivList() {
  //   return this.http.get<any>(environment.baseUrl + '/getUNIV.php')
  //     .pipe(map(Data => {
  //       return Data
  //     }))
  // }

  // // Faculty คณะ หรือหน่วยงาน
  // getFacList(univ_id: any) {

  //   alert(univ_id);
  //   return this.http.get<any>(environment.baseUrl + '/getFAC.php')
  //     .pipe(map(Data => {
  //       return Data
  //     }))
  // }

  //รายงานภาพรวมทั้งหมด
  // getDataTableAll() {
  //   return this.http.get<any>(environment.baseUrl + '/report/getDataTableAll.php')
  //     .pipe(map(Data => {
  //       console.log('get data table all :', Data);
  //       return Data
  //     }))
  // }

  //รายงานภาพรวมวิทยาเขต
  getDataTableUniv() {
    return this.http.get<any>(environment.baseUrl + '/report/getDataTableUniv.php')
      .pipe(map(Data => {
        //console.log('get data table Univ :', Data);
        return Data
      }))
  }

  getDataReport3() {
    return this.http.get<any>(environment.baseUrl + '/report/getDataReport3.php')
    .pipe(map(DataR3 => {
      return DataR3
    }))
  }
  getDataTable2(){
    return this.http.get<any>(environment.baseUrl + "/report/getDataTable2.php")
    .pipe(map(TableData2 => {
      return TableData2
    }))
  }
  getDataTable3() {
    return this.http.get<any>(environment.baseUrl + 'report/getDataTable3.php')
    .pipe(map(TableDataR3 => {
      return TableDataR3
    }))
  }
}

interface UNIV {
  univ_id: Number;
  univ_local: string;
  univ_name: string;
}
interface FAC {
  fac_id: Number;
  fac_name: string;
}

interface TableData2 {
  univ_id:string,
  univ_local:string,
  univ_name:string
}

interface TableDataR3 {
  apMac:string,
  univ_name:string,
  fac_name:string,
  floor:string
}

interface DataR3 {
  univ_name: string,
  fac_name: string
}

interface Data {
  zone_id: string,
  name: string,
  lat: string,
  lng: string,
  zoom: string,
}

interface DataTableUniv {
  building_name: string,
  upCount: number,
  downCount: number,
  deviceCount: number,
}