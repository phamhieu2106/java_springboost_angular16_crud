import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Department } from "src/app/models/department";
import { Employee } from "src/app/models/employee";
import { DepartmentService } from "src/app/services/department.service";
import { EmployeeService } from "src/app/services/employee.service";

@Component({
  selector: "app-employee-update-form",
  templateUrl: "./employee-update-form.component.html",
  styleUrls: ["./employee-update-form.component.scss"],
})
export class EmployeeUpdateFormComponent implements OnInit {
  form: any;
  employee: Employee | null = null;
  departments: Department[] = [];

  constructor(
    private service: EmployeeService,
    private dService: DepartmentService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getDepartmentList();
    this.form = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null, [Validators.required]),
      adress: new FormControl(null, [Validators.required]),
      sex: new FormControl(0, [Validators.required]),
      bod: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"),
      ]),
      salary: new FormControl(0, [Validators.required, Validators.min(1)]),
      department: new FormControl(null, [Validators.required]),
    });
    this.getEmployee();
  }

  onSubmit(): void {
    let employeeForm: Employee = this.form.value;
    let department: Department;
    if (employeeForm.department.name == undefined) {
      this.dService
        .getDepartment(Number(this.form.value.department))
        .subscribe({
          next: (data: Department) => {
            department = data;
          },
          complete: () => {
            employeeForm.department = department;
            this.service
              .updateEmployee(Number(employeeForm.id), employeeForm)
              .subscribe();
            this.router.navigate(["employees"]);
          },
          error: (err: any) => {
            console.log(err);
          },
        });
    } else {
      this.service
        .updateEmployee(Number(employeeForm.id), employeeForm)
        .subscribe();
      this.router.navigate(["employees"]);
    }
  }

  get Name() {
    return this.form.get("name");
  }
  get Adress() {
    return this.form.get("adress");
  }
  get Sex() {
    return this.form.get("sex");
  }
  get Bod() {
    return this.form.get("bod");
  }
  get Email() {
    return this.form.get("email");
  }
  get Salary() {
    return this.form.get("salary");
  }
  get Department() {
    return this.form.get("department");
  }

  getDepartmentList(): void {
    this.dService.getDepartmentList().subscribe({
      next: (value: Array<Department>) => {
        this.departments = value;
      },
    });
  }

  getEmployee(): void {
    this.route.paramMap.subscribe((params) => {
      this.service.getEmployee(Number(params.get("id"))).subscribe({
        next: (value) => {
          this.employee = value;
        },
        complete: () => {
          console.log(this.employee);
          this.form.patchValue({
            id: this.employee?.id,
            name: this.employee?.name,
            adress: this.employee?.adress,
            sex: this.employee?.sex,
            bod: this.employee?.bod,
            email: this.employee?.email,
            salary: this.employee?.salary,
            department: this.employee?.department,
          });
        },
      });
    });
  }
}
