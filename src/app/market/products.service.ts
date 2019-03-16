import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from './interfaces/product.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private _http: HttpClient
  ) { }

  public getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>('http://localhost:3000/products');
  }
}
