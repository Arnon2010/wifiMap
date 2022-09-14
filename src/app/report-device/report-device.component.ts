import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReportDevice } from './model';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-report-device',
  templateUrl: './report-device.component.html',
  styleUrls: ['./report-device.component.css'],
})
export class ReportDeviceComponent implements OnInit {
  reportDeviceList: ReportDevice[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getReportDevice();
  }

  getReportDevice() {
    this.httpClient
      .get<ReportDevice[]>(environment.baseUrl + '/report/getDataReportAll.php')
      .subscribe((response) => {
        this.reportDeviceList = response;
        console.log(this.reportDeviceList);
      });
  }
}
