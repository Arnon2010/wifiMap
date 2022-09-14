import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportUnivComponent } from './report-univ.component';

describe('ReportUnivComponent', () => {
  let component: ReportUnivComponent;
  let fixture: ComponentFixture<ReportUnivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportUnivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportUnivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
