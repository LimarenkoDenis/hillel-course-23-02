import { CartActions, CartActionTypes } from './../actions/cart.actions';
import { ICart, IProduct } from '../../market/interfaces/product.interface';
import { Action } from '@ngrx/store';


// const initialStateFunc = (): ICart[] => {
//   let cart: ICart[] = [];
//   try {
//     cart = JSON.parse(localStorage.getItem('cart'));
//   } catch {
//     cart = [];
//   }

//   return cart;
// };

export const initialState: ICart[] = [];

export function reducer(state = initialState, action: CartActions): ICart[] {
  switch (action.type) {

    case CartActionTypes.RemoveProductFromCart: {
      return state.filter((item: ICart) => item.id !== action.payload);
    }

    case CartActionTypes.AddProductToCart: {
      const newState = [...state];
      const product: IProduct = action.payload;

      const index: number = newState.findIndex((item: ICart) => item.id === product.id);
      console.log(index);

      if (index !== -1) {
        const item: ICart = newState[index];
        item.amountInCart = item.amountInCart + 1;
        return newState;
      }

      newState.push({ ...product, amountInCart: 1 });
      return newState;
    }

    default:
      return state;
  }
}

// function removeProductFromCart(state, action.payload) {
//   return ...
// }
