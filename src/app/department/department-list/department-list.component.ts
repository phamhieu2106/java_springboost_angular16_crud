import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Department } from "src/app/models/department";
import { DepartmentService } from "src/app/services/department.service";

@Component({
  selector: "app-department-list",
  templateUrl: "./department-list.component.html",
  styleUrls: ["./department-list.component.scss"],
})
export class DepartmentListComponent implements OnInit {
  public departmentList: Department[] = [];
  obDepartment: Observable<Department> | null = null;
  department: Department | null = null;

  constructor(private service: DepartmentService, private router: Router) {}

  ngOnInit(): void {
    this.getDepartmentList();
  }

  private getDepartmentList(): void {
    this.service.getDepartmentList().subscribe({
      next: (value: Array<Department>) => {
        this.departmentList = value;
      },
      complete: () => {},
    });
  }

  removeDepartment(id: any) {
    this.obDepartment = id != null ? this.service.getDepartment(id) : null;

    this.obDepartment?.subscribe({
      next: (value: Department) => {
        this.department = value;
      },
      complete: () => {
        this.service.removeDepartment(id).subscribe(() => {
          this.getDepartmentList();
        });
      },
      error: () => {
        console.log("Error when find department with id " + id);
      },
    });
  }
}
