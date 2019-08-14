import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDtlsDashboardComponent } from './user-dtls-dashboard.component';

describe('UserDtlsDashboardComponent', () => {
  let component: UserDtlsDashboardComponent;
  let fixture: ComponentFixture<UserDtlsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDtlsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDtlsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
