import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from '../services/users.service';
import { Fac, Univ, DataTableUniv, TotalDataUniv } from './model';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-report-univ',
  templateUrl: './report-univ.component.html',
  styleUrls: ['./report-univ.component.css']
})
export class ReportUnivComponent implements OnInit {

  private dataList:Array<string> =[];
  isPrint:boolean = false;
  univ_id: number = 0;
  fac_id: number = 0;

  UnivList: Univ[] = [];
  FacList: Fac[] = [];

  dataTableUniv: DataTableUniv[] = []; //ตารางข้อมูล
  totalDataUniv: TotalDataUniv[] = []; //ผลรวมข้อมูล


  constructor(
    private userService: UsersService,
    private httpClient: HttpClient
    ) {
      
     }

  ngOnInit(): void {
    this.getUnivList();
  } 

  logout() {
    this.userService.deleteToken();
    window.location.href = "/login";
  }

  getUnivList() {
    this.httpClient
    .get<Univ[]>(environment.baseUrl + '/getUNIV.php')
    .subscribe((response) => {
      console.log('data univ: ',response);
      this.UnivList = response;
    });
  }

  getFacList(univ_id:any) {
    this.httpClient
    .get<Fac[]>(environment.baseUrl + '/getFAC.php?univ_id=' + univ_id)
    .subscribe((response) => {
      console.log('data fac: ',response);
      this.FacList = response;
    });
  }

  getDataTableUniv(univ_id:any, fac_id:any) {
    this.httpClient
    .get<DataTableUniv[]>(environment.baseUrl + '/report/getDataTableUniv.php?fac_id=' + fac_id + '&univ_id=' + univ_id)
    .subscribe((response: any) => {
      console.log('data: ',response);
      this.dataTableUniv = response.data;
      this.totalDataUniv = response.data_total;
    });
  }

  // getDataTableUniv(univ_id:any, fac_id:any) {
  //   this.dataTableUniv = [];
  //   this.totalDataUniv = [];
  //   this.httpClient
  //   .get<DataTableUniv[]>(environment.baseUrl + '/report/getDataTableUniv.php?fac_id=' + fac_id + '&univ_id=' + univ_id)
  //     .pipe(map(Data => Data))
  //     .subscribe((response:any) => {
  //       console.log('reponse data : ', response);
  //       for(let datas of response.data){
  //         this.dataTableUniv.push(datas);
  //       }

  //       for(let totals of response.data_total){
  //         this.totalDataUniv.push(totals);
  //       }

  //     })
  // }

  print(content: any) {
    var win = window.open("/form-report1", "_blank")
    if (win !== null){
      // win.document.write(win)
      content.style = "display: None;"
      //console.log(content)
      win.print();
      content.style = "margin-left: 90%;display: box;"
    }
  }

}
