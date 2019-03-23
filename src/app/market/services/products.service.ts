import { environment } from './../../../environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { delay } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { products } from '../data';
import { IProduct, IProductBase } from '../interfaces/product.interface';
import { PageEvent } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(
    private http: HttpClient
  ) { }

  public getProducts(event: PageEvent): Observable<IProduct[]> {
    console.log(event);
    event.pageIndex = event.pageIndex + 1;
    // _limit
    // _page
    const headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'token from local storage');


    const params: HttpParams = new HttpParams(
      {
        fromObject: {
          _limit: String(event.pageSize),
          _page: String(event.pageIndex),
        }
      }
    );
    return this.http.get<IProduct[]>(`${environment.api}/products`, { params, headers });
  }

  public addProducts(product: IProductBase): Observable<IProduct> {
    return this.http.post<IProduct>('http://localhost:3000/products', product);
  }

  public updateProduct(product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`http://localhost:3000/products/${product.id}`, product);
  }


  public updateProductField(product: Partial<IProduct>): Observable<IProduct> {
    return this.http.patch<IProduct>(`http://localhost:3000/products/${product.id}`, product);
  }

  public deleteProduct(id: number): Observable<IProduct> {
    return this.http.delete<IProduct>(`http://localhost:3000/products/${id}`);
  }

}
