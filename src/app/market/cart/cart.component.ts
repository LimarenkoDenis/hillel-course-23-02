import { CartService } from './../services/cart.service';
import { Component, OnInit, Input } from '@angular/core';
import { ICart } from '../interfaces/product.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public cart: ICart[] = [];

  public constructor(private cartService: CartService) {}

  public ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  public removeFromCart(id: number): void {
    this.cartService.removeFromCart(id);
  }

}
