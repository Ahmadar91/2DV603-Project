import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SupervisorsComponent} from './supervisors.component';

describe('SupervisorTableComponent', () => {
  let component: SupervisorsComponent;
  let fixture: ComponentFixture<SupervisorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SupervisorsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
