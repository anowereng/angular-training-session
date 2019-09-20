import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path: 'create', component: EmployeeCreateComponent},
  {path: 'ProductCreate', component: ProductComponent},
  {path: 'list', component: EmployeeListComponent},
  {path: '', redirectTo: '/list', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
