import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChangepassComponent } from './changepass/changepass.component';
import { MapComponent } from './map/map.component';
import { MainAdminComponent } from './main-admin/main-admin.component';
import { UserComponent } from './user/user.component';
import { SettingsComponent } from './settings/settings.component';
import { DeviceComponent } from './device/device.component';
import { CheckDeviceComponent } from './check-device/check-device.component';
import { UnivComponent } from './univ/univ.component';
import { FacComponent } from './fac/fac.component';
import { BuildingComponent } from './building/building.component';
import { ReportComponent } from './report/report.component';
import { ReportDeviceComponent } from './report-device/report-device.component';
import { ReportCheckstatusComponent } from './report-checkstatus/report-checkstatus.component';
import { ReportAllComponent } from './report-all/report-all.component';
import { ReportUnivComponent } from './report-univ/report-univ.component';
import { ReportAccesspointComponent } from './report-accesspoint/report-accesspoint.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListFilterPipe } from './check-device/listFilterPipe';
import { NgxPrintModule } from 'ngx-print';
import { FreshPipe } from './fresh.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ChangepassComponent,
    MapComponent,
    MainAdminComponent,
    UserComponent,
    SettingsComponent,
    DeviceComponent,
    CheckDeviceComponent,
    UnivComponent,
    FacComponent,
    BuildingComponent,
    ReportComponent,
    ReportDeviceComponent,
    ReportCheckstatusComponent,
    ReportAllComponent,
    ReportUnivComponent,
    ReportAccesspointComponent,
    ListFilterPipe,
    FreshPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSliderModule,
    NgxPrintModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
