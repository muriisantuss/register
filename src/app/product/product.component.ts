import { Category } from './../category';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

import { CategoryService } from '../service/category.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  product: Product[] = [];
  category: Category[] = [];

  catchFormGroup: FormGroup;
  isEditing: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private categoryService: CategoryService
  ) {
    this.catchFormGroup = formBuilder.group({
      id: [''],
      name: [''],
      category: [''],
      description: [''],
      price: [''],
      quantity: [''],
    });
  }

  ngOnInit(): void {
    this.loadProduct();
    this.loadCategory();

  }

  loadCategory() {
    this.categoryService.getCategory().subscribe({
      next: data => this.category = data,
    });
  }

  loadProduct() {
    this.productService.getProduct().subscribe({
      next: data => this.product = data,
    });
  }

  compareCategory(category1: Category, category2: Category): boolean {
    return category1 && category2 ? category1.id === category2.id : category1 === category2
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
