import { Component, OnInit } from '@angular/core';
import { products } from './data';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  public access: any = ['admin', 'user'];
  public cart: any[] = [];
  public products: any = products;

  addToCart(id) {
    const product = this.products.find((item) => item.id === id);

    this.cart.push(product);
  }
}
