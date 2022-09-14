import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnivComponent } from './univ.component';

describe('UnivComponent', () => {
  let component: UnivComponent;
  let fixture: ComponentFixture<UnivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
