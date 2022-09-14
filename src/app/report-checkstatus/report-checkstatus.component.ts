import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReportCheckStatus } from './model';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-report-checkstatus',
  templateUrl: './report-checkstatus.component.html',
  styleUrls: ['./report-checkstatus.component.css'],
})
export class ReportCheckstatusComponent implements OnInit {
  reportCheckStatus: ReportCheckStatus[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getReportCheckStatus();
  }

  getReportCheckStatus() {
    this.httpClient
      .get<ReportCheckStatus[]>(
        environment.baseUrl + '/report/getDataReportUniv.php'
      )
      .subscribe((response) => {
        this.reportCheckStatus = response;
        console.log(this.reportCheckStatus);
      });
  }
}
