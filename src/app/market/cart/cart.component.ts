import { Component, OnInit, Input } from '@angular/core';
import { ICart } from '../interfaces/product.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  @Input()
  public cart: ICart[];

}
