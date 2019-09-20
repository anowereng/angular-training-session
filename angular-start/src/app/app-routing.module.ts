import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';

const routes: Routes = [

  {path: 'create', component: CreateEmployeeComponent},
  {path: 'list', component: EmployeeListComponent},
  {path: 'dashoboard', component: DashboardComponent},
  {path: '', redirectTo: '/dashoboard', pathMatch: 'full'},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
