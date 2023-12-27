import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EmployeeListComponent } from "./employee/employee-list/employee-list.component";
import { EmployeeAddFormComponent } from "./employee/employee-add-form/employee-add-form.component";
import { EmployeeUpdateFormComponent } from "./employee/employee-update-form/employee-update-form.component";
import { HeaderComponent } from "./header/header.component";
import { DepartmentListComponent } from "./department/department-list/department-list.component";
import { DepartmentAddFormComponent } from "./department/department-add-form/department-add-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { DepartmentUpdateFormComponent } from "./department/department-update-form/department-update-form.component";

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeAddFormComponent,
    EmployeeUpdateFormComponent,
    HeaderComponent,
    DepartmentListComponent,
    DepartmentAddFormComponent,
    DepartmentUpdateFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
