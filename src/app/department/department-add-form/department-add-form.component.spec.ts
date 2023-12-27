import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentAddFormComponent } from './department-add-form.component';

describe('DepartmentAddFormComponent', () => {
  let component: DepartmentAddFormComponent;
  let fixture: ComponentFixture<DepartmentAddFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartmentAddFormComponent]
    });
    fixture = TestBed.createComponent(DepartmentAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
