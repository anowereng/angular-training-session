import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  datastring:string='Service Data';
  constructor() { }
    
  ServiceData(){
    return this.datastring;
  }
}
