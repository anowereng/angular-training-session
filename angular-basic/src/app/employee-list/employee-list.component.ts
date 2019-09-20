import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../services/employees.service';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  data: any;
  rowData: any;
  constructor( private empservice: EmployeesService, private alertify: AlertifyService) { }

  ngOnInit() {
   this.data = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado'}
     ] ;
  }

  getdata() {
    this.getDataList();
  }

  getDataList() {
    this.empservice.getEmployees().subscribe(response => {
      this.rowData = response;
      console.log(response);
    }, error => {
      this.alertify.error(error.message);
    });
  }

}
