import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employees } from '../Models/employees';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

constructor(private Http: HttpClient) { }


getEmployees(): Observable<Employees> {
  return this.Http.get<Employees>('https://jsonplaceholder.typicode.com/commentssss');
}

}
