import { ICart, IProduct } from './../interfaces/product.interface';
import { Injectable } from '@angular/core';

@Injectable()
export class CartService {
  private cart: ICart[] = [];

  public addToCart(product: IProduct) {
    const index: number = this.cart.findIndex((item: ICart) => item.id === product.id);

    if (index !== -1) {
      const item: ICart = this.cart[index];
      item.amountInCart = item.amountInCart + 1;
      return;
    }

    this.cart.push({ ...product, amountInCart: 1 });
  }

  public removeFromCart(id: number): void {
    const index: number = this.cart.findIndex((item: ICart) => item.id === id);
    this.cart.splice(index, 1);
  }

  public getCart(): ICart[] {
    return this.cart;
  }
}
