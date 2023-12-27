import { Department } from "./department";

export interface Employee {
  id?: number;
  name: string;
  adress: string;
  sex: number;
  bod: Date;
  email: string;
  salary: number;
  department: Department;
}
