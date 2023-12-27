import { JsonPipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Form, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { forkJoin } from "rxjs";
import { Department } from "src/app/models/department";
import { Employee } from "src/app/models/employee";
import { DepartmentService } from "src/app/services/department.service";
import { EmployeeService } from "src/app/services/employee.service";

@Component({
  selector: "app-employee-add-form",
  templateUrl: "./employee-add-form.component.html",
  styleUrls: ["./employee-add-form.component.scss"],
})
export class EmployeeAddFormComponent implements OnInit {
  form: any;
  departments: Department[] = [];

  constructor(
    private service: EmployeeService,
    private dService: DepartmentService,
    private router: Router
  ) {
    this.getDepartmentList();
  }

  ngOnInit(): void {
    this.form = new FormGroup({
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
  }

  onSubmit(): void {
    const employee: Employee = this.form.value;
    let department: Department;
    this.dService.getDepartment(this.form.value.department).subscribe({
      next: (data: Department) => {
        department = data;
      },
      complete: () => {
        employee.department = department;
        this.service.addEmployee(employee).subscribe();
        this.router.navigate(["employees"]);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
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
      error: (message: string) => {
        console.log(message);
      },
    });
  }
}
