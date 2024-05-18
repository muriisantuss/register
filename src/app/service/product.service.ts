import { Injectable } from '@angular/core';
import { Product } from '../product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
   apiUrl = 'http://localhost:3000/product'

  constructor(private httpClient: HttpClient) { }

  getProduct(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.apiUrl)
  }
  save(product: Product): Observable<Product>{
    return this.httpClient.post<Product>(this.apiUrl, product)
  }
  modify(product: Product): Observable<Product>{
    return this.httpClient.put<Product>(`${this.apiUrl}/${product.id}`, product)
  }
  delete(product: Product): Observable<void>{
    return this.httpClient.delete<void>(`${this.apiUrl}/${product.id}`)
  }
}
