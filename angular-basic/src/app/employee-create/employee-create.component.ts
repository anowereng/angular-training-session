import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  productForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.productForm = this.fb.group({
      productName: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      unit: new FormControl('', Validators.required),
    });
  }

  CreateProduct() {
    console.log(this.productForm.value);
  }

}
