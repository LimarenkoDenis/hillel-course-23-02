import { IProductBase } from './../../market/interfaces/product.interface';
import { Action } from '@ngrx/store';
import { IProduct } from '../../market/interfaces/product.interface';
import { PageEvent } from '@angular/material';

export enum ProductsActionTypes {
  LoadProductss = '[Products] Load Productss',
  LoadProductssSuccess = '[Products] Load Productss Success',
  LoadProductssError = '[Products] Load Productss Error',

  AddProduct = '[Products] Add Product',
  AddProductSuccess = '[Products]  Add Product Success',
  AddProductError = '[Products]  Add Product Error',
}

export class LoadProductss implements Action {
  readonly type = ProductsActionTypes.LoadProductss;
  public constructor(public payload: PageEvent) {}
}

export class LoadProductssSuccess implements Action {
  readonly type = ProductsActionTypes.LoadProductssSuccess;
  public constructor(public payload: IProduct[]) {}
}

export class LoadProductssError implements Action {
  readonly type = ProductsActionTypes.LoadProductssError;
  public constructor(public payload: string) {}
}



export class AddProduct implements Action {
  readonly type = ProductsActionTypes.AddProduct;
  public constructor(public payload: IProductBase) {}
}

export class AddProductSuccess implements Action {
  readonly type = ProductsActionTypes.AddProductSuccess;
  public constructor(public payload: IProduct) {}
}

export class AddProductError implements Action {
  readonly type = ProductsActionTypes.AddProductError;
  public constructor(public payload: string) {}

}



export type ProductsActions =
  LoadProductss |
  LoadProductssSuccess |
  LoadProductssError |
  AddProductError |
  AddProductSuccess |
  AddProduct;
