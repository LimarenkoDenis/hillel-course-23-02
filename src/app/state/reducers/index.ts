import { products } from './../../shop/data';
import { ICart } from 'src/app/market/interfaces/product.interface';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromCart from './cart.reducer';
import * as fromProducts from './products.reducer';

export interface State {
  cart: ICart[];
  products: fromProducts.State;
}

export const reducers: ActionReducerMap<State> = {
  cart: fromCart.reducer,
  products: fromProducts.reducer,

};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
