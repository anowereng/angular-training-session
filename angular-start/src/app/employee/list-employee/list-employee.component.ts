import { Component } from '@angular/core';
import {  FirstService } from 'src/app/services/firstservice.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent {
   listdata: string
  constructor( public firstService: FirstService ) { }


 getstring(){
  this.listdata= this.firstService.ServiceData();
 }


}
