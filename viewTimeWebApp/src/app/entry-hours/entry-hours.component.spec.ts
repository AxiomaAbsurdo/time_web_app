import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryHoursComponent } from './entry-hours.component';

describe('EntryHoursComponent', () => {
  let component: EntryHoursComponent;
  let fixture: ComponentFixture<EntryHoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryHoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
