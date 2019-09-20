import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productNewForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.productNewForm = this.fb.group({
      productName: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      unit: new FormControl('', Validators.required),
    });
  }

  CreateProduct() {
    console.log(this.productNewForm.value);
  }

}
