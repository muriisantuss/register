import { Injectable } from '@angular/core';
import { Category } from '../category';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Observable } from 'rxjs';
import { Product } from '../product';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  apiUrl = 'http://localhost:3000/category';

  constructor(private httpClient: HttpClient) {}

  getCategory(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${this.apiUrl}`);
  }

  getCategoryOne(id: number): Observable<Category> {
    return this.httpClient.get<Category>(`${this.apiUrl}/${id}`);
  }

  save(category: Category): Observable<Category> {
    return this.httpClient.post<Category>(this.apiUrl, category);
  }
  modify(category: Category): Observable<Category> {
    return this.httpClient.put<Category>(
      `${this.apiUrl}/${category.id}`,
      category
    );
  }
  delete(category: Category): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${category.id}`);
  }
}
