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
  isEditing: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) {
    this.catchFormGroup = formBuilder.group({
      id: [''],
      name: [''],
      description: [''],
      price: [''],
      quantity: [''],
    });
  }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct() {
    this.productService.getProduct().subscribe({
      next: data => this.product = data,
    });
  }

  submit() {
    if (this.isEditing) {
      this.productService.modify(this.catchFormGroup.value).subscribe({
        next: () => {
          this.loadProduct();
          this.isEditing = false;
          this.catchFormGroup.reset();
        },
      });
    } else {
      this.productService.save(this.catchFormGroup.value).subscribe({
        next: data => {
          this.product.push(data);
          this.catchFormGroup.reset();
        },
      });
    }
  }

  delete(variable: Product) {
    this.productService.delete(variable).subscribe({
      next: () => this.loadProduct(),
    });
  }

  update(variable: Product) {
    this.isEditing = true;
    this.catchFormGroup.setValue(variable);
  }
}
