import { Action } from '@ngrx/store';
import { IProduct } from '../../market/interfaces/product.interface';
import { ProductsActions, ProductsActionTypes } from '../actions/products.actions';


export interface State {
  isLoading: boolean;
  data: IProduct[];
  error: string;
}

export const initialState: State = {
  isLoading: false,
  data: [],
  error: null,
};

export function reducer(state = initialState, action: ProductsActions): State {
  switch (action.type) {

    case ProductsActionTypes.LoadProductss:
    case ProductsActionTypes.AddProduct: {
      return {
        ...state,
        isLoading: true
      };
    }

    case ProductsActionTypes.LoadProductssSuccess: {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        error: null,
      };
    }

    case ProductsActionTypes.LoadProductssError:
    case ProductsActionTypes.LoadProductssError: {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    }

    case ProductsActionTypes.AddProductSuccess: {
      return {
        ...state,
        isLoading: false,
        error: null
      };
    }

    default:
      return state;
  }
}
