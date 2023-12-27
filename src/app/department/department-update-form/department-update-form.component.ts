import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Department } from "src/app/models/department";
import { DepartmentService } from "src/app/services/department.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Call } from "@angular/compiler";
import { Observable } from "rxjs";

@Component({
  selector: "app-department-update-form",
  templateUrl: "./department-update-form.component.html",
  styleUrls: ["./department-update-form.component.scss"],
})
export class DepartmentUpdateFormComponent implements OnInit {
  form: any;
  obDepartment: Observable<Department> | null = null;
  department: Department | null = null;

  constructor(
    private service: DepartmentService,
    private router: ActivatedRoute,
    private route: Router
  ) {
    let id: number | null = null;
    this.router.paramMap.subscribe((params) => {
      id = Number(params.get("id"));
    });

    this.form = new FormGroup({
      id: new FormControl(),
      name: new FormControl("", [Validators.required]),
      adress: new FormControl("", [Validators.required]),
    });

    this.obDepartment = id != null ? this.service.getDepartment(id) : null;

    this.obDepartment?.subscribe({
      next: (value: Department) => {
        this.department = value;
      },
      complete: () => {
        this.form.patchValue({
          id: this.department?.id,
          name: this.department?.name,
          adress: this.department?.adress,
        });
      },
      error: () => {
        console.log("Error when find department with id " + id);
      },
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
    this.service
      .updateDepartment(this.form.value.id, this.form.value)
      .subscribe({
        next: (data: Department) => {
          console.log(data);
        },
        complete: () => {
          this.form.reset();
          this.route.navigate(["/departments"]);
        },
      });
  }
}
