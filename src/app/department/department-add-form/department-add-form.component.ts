import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Department } from "src/app/models/department";
import { DepartmentService } from "src/app/services/department.service";

@Component({
  selector: "app-department-add-form",
  templateUrl: "./department-add-form.component.html",
  styleUrls: ["./department-add-form.component.scss"],
})
export class DepartmentAddFormComponent implements OnInit {
  form: any;

  constructor(private service: DepartmentService, private router: Router) {
    this.form = new FormGroup({
      name: new FormControl("", [Validators.required]),
      adress: new FormControl("", [Validators.required]),
    });
  }
  ngOnInit(): void {}

  get name() {
    return this.form.get("name");
  }
  get adress() {
    return this.form.get("adress");
  }

  public onSubmit(): void {
    this.service.addDepartment(this.form.value).subscribe({
      next: (data: Department) => {
        console.log(data);
        this.router.navigate(["/departments"]);
      },
      complete: () => {
        this.form.reset();
      },
    });
  }
}
