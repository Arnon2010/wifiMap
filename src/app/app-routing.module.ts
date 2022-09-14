import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChangepassComponent } from './changepass/changepass.component';
import { MapComponent } from './map/map.component';
import { MainAdminComponent } from './main-admin/main-admin.component';
import { AuthguardGuard } from './authguard.guard';
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


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },

  //setting
  {
    path: 'user',
    component: UserComponent,
  },  
  {
    path: 'settings',
    component: SettingsComponent
  },
    { path: 'device', component: DeviceComponent },
  { path: 'check-device', component: CheckDeviceComponent },
  { path: 'fac', component: FacComponent },
  { path: 'univ', component: UnivComponent },
  { path: 'building', component: BuildingComponent },
  
  //report
  { path: 'report', component: ReportComponent },
  { path: 'report-device', component: ReportDeviceComponent },
  { path: 'report-checkstatus', component: ReportCheckstatusComponent },
  { path: 'report-all', component: ReportAllComponent },
  { path: 'report-univ', component: ReportUnivComponent },
  { path: 'report-accesspoint', component: ReportAccesspointComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthguardGuard],
  },
  {
    path: 'changepass',
    component: ChangepassComponent,
  },
  {
    path: 'map',
    component: MapComponent,
  },
  {
    path: 'main-admin',
    component: MainAdminComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
