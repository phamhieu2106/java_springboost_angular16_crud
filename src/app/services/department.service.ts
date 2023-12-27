import { Injectable } from "@angular/core";
import { Department } from "../models/department";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CustomReponse } from "../dto/custom-reponse";

@Injectable({
  providedIn: "root",
})
export class DepartmentService {
  private readonly apiUri: string = "http://localhost:8080/api";
  constructor(private http: HttpClient) {}

  getDepartmentList(): Observable<Array<Department>> {
    return this.http.get<Array<Department>>(`${this.apiUri}/departments`);
  }

  getDepartment(id: number): Observable<Department> {
    return this.http.get<Department>(`${this.apiUri}/departments/${id}`);
  }

  addDepartment(department: Department): Observable<Department> {
    return this.http.post<Department>(`${this.apiUri}/departments`, department);
  }

  updateDepartment(id: number, department: Department): Observable<Department> {
    return this.http.put<Department>(
      `${this.apiUri}/departments/${id}`,
      department
    );
  }

  removeDepartment(id: number): Observable<Department> {
    return this.http.delete<Department>(`${this.apiUri}/departments/${id}`);
  }
}
