import { Period } from './../period';
import { Category } from './../category';
import { Product } from '../product';

import { ProductService } from '../service/product.service';
import { CategoryService } from '../service/category.service';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {
  category: Category[] = []
  product: Product[] = []
  period = Object.values(Period)

  catchCategoryFormGroup: FormGroup;
  isEditing: boolean = false;


  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private productService: ProductService

  ) {
    this.catchCategoryFormGroup = formBuilder.group({
      id: [''],
      name: [''],
    });
  }

  ngOnInit(): void {
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

  submit() {
    if (this.isEditing) {
      this.categoryService.modify(this.catchCategoryFormGroup.value).subscribe({
        next: () => {
          this.loadCategory();
          this.isEditing = false;
          this.catchCategoryFormGroup.reset();
        },
      });
    } else {
      this.categoryService.save(this.catchCategoryFormGroup.value).subscribe({
        next: data => {
          this.category.push(data);
          this.catchCategoryFormGroup.reset();
        },
      });
    }
  }
  delete(variable: Category) {
    this.categoryService.delete(variable).subscribe({
      next: () => this.loadCategory(),
    });
  }

  update(variable: Category) {
    this.isEditing = true;
    this.catchCategoryFormGroup.setValue(variable);
  }

  getCategoryName(categoryId: number) : Category | undefined{
    return this.category.find( c => c.id === categoryId)
  }

  get name():any{
    return this.catchCategoryFormGroup.get('name')
  }


}
