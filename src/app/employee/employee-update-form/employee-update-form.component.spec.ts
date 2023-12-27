import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeUpdateFormComponent } from './employee-update-form.component';

describe('EmployeeUpdateFormComponent', () => {
  let component: EmployeeUpdateFormComponent;
  let fixture: ComponentFixture<EmployeeUpdateFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeUpdateFormComponent]
    });
    fixture = TestBed.createComponent(EmployeeUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
