import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DepartmentListComponent } from "./department/department-list/department-list.component";
import { DepartmentAddFormComponent } from "./department/department-add-form/department-add-form.component";
import { DepartmentUpdateFormComponent } from "./department/department-update-form/department-update-form.component";
import { EmployeeAddFormComponent } from "./employee/employee-add-form/employee-add-form.component";
import { EmployeeUpdateFormComponent } from "./employee/employee-update-form/employee-update-form.component";
import { EmployeeListComponent } from "./employee/employee-list/employee-list.component";

const routes: Routes = [
  { path: "", component: EmployeeListComponent },
  { path: "departments", component: DepartmentListComponent },
  { path: "departments/add", component: DepartmentAddFormComponent },
  { path: "departments/update/:id", component: DepartmentUpdateFormComponent },
  { path: "employees", component: EmployeeListComponent },
  { path: "employees/add", component: EmployeeAddFormComponent },
  { path: "employees/update/:id", component: EmployeeUpdateFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
