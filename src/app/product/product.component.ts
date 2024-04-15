import { Component, OnInit } from '@angular/core';
import { Product } from '../product';


import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  product: Product[] = [];
  catchFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private productService: ProductService) {
    this.catchFormGroup = formBuilder.group({
      id: [''],
      name: [''],
      description: [''],
      price: [''],
      quantity: [''],
    });
  }

  ngOnInit(): void {
    this.productService.getProduct().subscribe({
      next: data => this.product = data
    })
  }

  submit() {
    this.product.push(this.catchFormGroup.value);
  }
  reset() {}
}
