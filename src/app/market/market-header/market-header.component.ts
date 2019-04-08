import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-market-header',
  templateUrl: './market-header.component.html',
  styleUrls: ['./market-header.component.css']
})
export class MarketHeaderComponent implements OnInit {
  productInCart = 1;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    // this.productInCart = this.cartService.getCart().length;
  }

}
