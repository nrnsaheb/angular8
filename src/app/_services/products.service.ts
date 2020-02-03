import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { Products } from '@app/_models';

@Injectable({providedIn: 'root'})
export class ProductsService {

  constructor(private http: HttpClient) { }
  getAllProducts() {
    return this.http.get<Products[]>(`${environment.apiUrl2}employees`);
  }
}
