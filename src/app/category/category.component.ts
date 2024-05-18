import { CategoryService } from '../service/category.service';
import { Category } from './../category';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {
  category: Category[] = []
  catchCategoryFormGroup: FormGroup;
  isEditing: boolean = false;


  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService
  ) {
    this.catchCategoryFormGroup = formBuilder.group({
      id: [''],
      category: [''],
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


}
