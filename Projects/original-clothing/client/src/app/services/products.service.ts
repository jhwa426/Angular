import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable, retry} from 'rxjs';
import {PaginationParams, Products} from '../../type';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private apiService: ApiService) {}

  // Declare get products through api
  getProducts = (
    url: string,
    params: PaginationParams
  ): Observable<Products> => {
    return this.apiService.get(url, {
      params,
      responseType: 'json',
    });
  };

  // Adding a product via the API
  addProduct = (url: string, body: any): Observable<any> => {
    return this.apiService.post(url, body, {});
  };

  // Editing a product via the API
  editProduct = (url: string, body: any): Observable<any> => {
    return this.apiService.put(url, body, {});
  };

  // Deleting a product via the API
  deleteProduct = (url: string): Observable<any> => {
    return this.apiService.delete(url, {});
  };
}
