import { IProduct } from './../../market/interfaces/product.interface';
import { Action } from '@ngrx/store';

export enum CartActionTypes {
  RemoveProductFromCart = '[Cart] Remove product from cart',
  AddProductToCart = '[Cart] AddProductToCart',


}

export class RemoverProductFromCart implements Action {
  readonly type = CartActionTypes.RemoveProductFromCart;
  public constructor(public payload: number) {}
}

export class AddProductToCart implements Action {
  readonly type = CartActionTypes.AddProductToCart;
  public constructor(public payload: IProduct) {}
}


// new RemoverProductFromCart()
// {
//   type: '[Cart] Remove product from cart'
// }



export type CartActions = RemoverProductFromCart 
  | AddProductToCart;
