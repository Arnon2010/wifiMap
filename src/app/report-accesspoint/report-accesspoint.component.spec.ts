import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportAccesspointComponent } from './report-accesspoint.component';

describe('ReportAccesspointComponent', () => {
  let component: ReportAccesspointComponent;
  let fixture: ComponentFixture<ReportAccesspointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportAccesspointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportAccesspointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
