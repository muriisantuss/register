import { Injectable } from '@angular/core';
import { Category } from './../category';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl = 'http://localhost:3000/category'


  constructor(private httpClient: HttpClient) {}

    getCategory(): Observable<Category[]>{
      return this.httpClient.get<Category[]>(this.apiUrl)
    }

    save(category: Category): Observable<Category>{
      return this.httpClient.post<Category>(this.apiUrl, category)
    }
    modify(category: Category): Observable<Category>{
      return this.httpClient.put<Category>(`${this.apiUrl}/${category.id}`, category)
    }
    delete(category: Category): Observable<void>{
      return this.httpClient.delete<void>(`${this.apiUrl}/${category.id}`)
    }
  }
