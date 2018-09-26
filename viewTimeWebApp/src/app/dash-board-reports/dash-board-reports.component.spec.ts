import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBoardReportsComponent } from './dash-board-reports.component';

describe('DashBoardReportsComponent', () => {
  let component: DashBoardReportsComponent;
  let fixture: ComponentFixture<DashBoardReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashBoardReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashBoardReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
