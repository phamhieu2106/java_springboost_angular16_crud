import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Employee } from "src/app/models/employee";
import { EmployeeService } from "src/app/services/employee.service";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.scss"],
})
export class EmployeeListComponent implements OnInit {
  public employeeList: Employee[] = [];
  constructor(private service: EmployeeService) {}
  ngOnInit(): void {
    this.getEmployeeList();
  }

  private getEmployeeList(): void {
    this.service.getEmployeeList().subscribe({
      next: (data) => {
        this.employeeList = data;
      },
      error: (err) => {
        console.log("Error when loading employee list");
      },
    });
  }

  removeEmployee(id: any): void {
    this.service.removeEmployee(id).subscribe(() => {
      this.getEmployeeList();
    });
  }
}
