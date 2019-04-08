import { Observable } from 'rxjs';
import { State } from './../../state/reducers';
import { CartService } from './../services/cart.service';
import { Component, OnInit, Input } from '@angular/core';
import { ICart } from '../interfaces/product.interface';
import { Store } from '@ngrx/store';
import { RemoverProductFromCart } from 'src/app/state/actions/cart.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public cart$: Observable<ICart[]>;

  public constructor(
    private store: Store<State>
  ) {}

  public ngOnInit() {
    this.cart$ = this.store.select('cart');
  }

  public removeFromCart(id: number): void {
    this.store.dispatch(new RemoverProductFromCart(id));
  }

}
