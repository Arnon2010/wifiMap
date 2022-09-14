import { map } from 'rxjs/operators';
import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from '../services/users.service';
import { DataTableAll, TotalDataAll } from './model';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-report-all',
  templateUrl: './report-all.component.html',
  styleUrls: ['./report-all.component.css']
})
export class ReportAllComponent implements OnInit {

  private dataList:Array<string> =[];
  isPrint:boolean = false;
 
  totalDataAll: TotalDataAll[] = [];
  dataTableAll: DataTableAll[] = [];

  constructor(
    private data: DataService,
    private userService: UsersService,
    private httpClient: HttpClient
    ) { }

  ngOnInit(): void {
    this.getDataTableAll().subscribe((response) => {
      console.log('data all: ',response);
      this.dataTableAll = response.data;
      this.totalDataAll = response.data_total;
    })
  }

  logout() {
    this.userService.deleteToken();
    window.location.href = "/login";
  }

  getDataTableAll() {
    return this.httpClient.get<any>(environment.baseUrl + '/report/getDataTableAll.php')
      .pipe(map(Data => {
        console.log('get data table all :', Data);
        return Data
      }))
  }

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
