import { Component } from '@angular/core';
import { Product } from '../product';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  product: Product[] = [
    { id: 1, name: 'Iphone X', description: 'Celular.' },
    { id: 2, name: 'Computador', description: 'Usado para ser feliz.' },
    { id: 3, name: 'Fone', description: 'Escute mais com um fone.' },
  ];
  catchFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.catchFormGroup = formBuilder.group({
      id: [''],
      name: [''],
      description: [''],
    });
  }

  submit() {
    this.product.push(this.catchFormGroup.value);
  }
}
