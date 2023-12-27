import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Employee } from "../models/employee";

@Injectable({
  providedIn: "root",
})
export class EmployeeService {
  private apiUri: string = "http://localhost:8080/api/employees";
  constructor(private http: HttpClient) {}

  getEmployeeList(): Observable<Array<Employee>> {
    return this.http.get<Array<Employee>>(this.apiUri);
  }
  getEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUri}/${id}`);
  }
  addEmployee(object: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiUri}`, object);
  }
  updateEmployee(id: number, object: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiUri}/${id}`, object);
  }
  removeEmployee(id: number): Observable<Employee> {
    return this.http.delete<Employee>(`${this.apiUri}/${id}`);
  }
}
