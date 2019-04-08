import { IProductBase } from './../../market/interfaces/product.interface';
import { ProductsActionTypes, LoadProductss, LoadProductssSuccess, LoadProductssError, AddProduct, AddProductSuccess, AddProductError } from './../actions/products.actions';
import { ProductsService } from './../../market/services/products.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { PageEvent } from '@angular/material';
import { IProduct } from 'src/app/market/interfaces/product.interface';

@Injectable()
export class ProductsEffects {

  @Effect()
  loadProducts$ = this.actions$
    .pipe(
      ofType(ProductsActionTypes.LoadProductss),
      map((action: LoadProductss) => action.payload),
      mergeMap((event: PageEvent) => this.productsService.getProducts(event)
        .pipe(
          map((products: IProduct[]) => new LoadProductssSuccess(products)),
          catchError(() => of(new LoadProductssError('Server error')))
        ))
    );

  @Effect()
  addProduct$ = this.actions$
    .pipe(
      ofType(ProductsActionTypes.AddProduct),
      map((action: AddProduct) => action.payload),
      mergeMap((newProduct: IProductBase) => this.productsService.addProduct(newProduct)
        .pipe(
          switchMap((product: IProduct) => [
            new AddProductSuccess(product),
          ]),
          catchError(() => of(new AddProductError('Server error')))
        ))
    );

  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) { }


}
