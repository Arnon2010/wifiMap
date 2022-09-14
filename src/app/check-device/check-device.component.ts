import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CheckDevice, UpDevice, DownDevice } from './model';
import { environment } from 'src/environments/environment';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-check-device',
  templateUrl: './check-device.component.html',
  styleUrls: ['./check-device.component.css'],
})
export class CheckDeviceComponent implements OnInit {
  searchTerm: string = '';
  devices: CheckDevice[] = [];
  allDevices: CheckDevice[] = [];

  spinners = false;
  upDate: NgbDateStruct = {
    day: 0,
    month: 0,
    year: 0,
  };
  upTime = { hour: 0, minute: 0 };

  downDate: NgbDateStruct = {
    day: 0,
    month: 0,
    year: 0,
  };
  downTime = { hour: 0, minute: 0 };

  CheckDeviceList: CheckDevice[] = [];

  SelectDeviceID: Number = 0;

  UpDevice: UpDevice = {
    access_id: 0,
    up_time: '',
  };
  DownDevice: DownDevice = {
    access_id: 0,
    down_time: '',
    updown_cause: '',
    updown_solutions: '',
  };

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.getCheckDevice();
  }

  getCheckDevice() {
    this.httpClient
      .get<CheckDevice[]>(`${environment.baseUrl}/getDataTable3.php`)
      .subscribe((response) => {
        this.devices = response;
        this.allDevices = this.devices;
      });
  }

  setUpDevice(id: Number) {
    this.UpDevice.access_id = id;
  }

  setDownDevice(id: Number) {
    this.DownDevice.access_id = id;
  }

  addUpDevice() {
    this.UpDevice.up_time = `${this.upDate.year}-${this.upDate.month}-${this.upDate.day} ${this.upTime.hour}:${this.upTime.minute}:00`;

    this.httpClient
      .post<UpDevice>(
        `${environment.baseUrl}/checkDevice/addUpDevice.php`,
        this.UpDevice
      )
      .subscribe(() => {
        this.getCheckDevice();
      });
  }

  addDownDevice() {
    this.DownDevice.down_time = `${this.downDate.year}-${this.downDate.month}-${this.downDate.day} ${this.downTime.hour}:${this.downTime.minute}:00`;

    this.httpClient
      .post<UpDevice>(
        `${environment.baseUrl}/checkDevice/addDownDevice.php`,
        this.DownDevice
      )
      .subscribe(() => {
        this.getCheckDevice();
      });
  }
}
