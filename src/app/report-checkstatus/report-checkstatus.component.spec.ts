import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportCheckstatusComponent } from './report-checkstatus.component';

describe('ReportCheckstatusComponent', () => {
  let component: ReportCheckstatusComponent;
  let fixture: ComponentFixture<ReportCheckstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportCheckstatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportCheckstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
