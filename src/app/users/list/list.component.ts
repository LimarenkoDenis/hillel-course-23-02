// import { CartService } from './../../market/services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  // providers: [CartService]
})
export class ListComponent implements OnInit {

  constructor(
    // private cartService: CartService
    ) { }

  ngOnInit() {
    // setInterval(() => {
    //   console.log(this.cartService.getCart());
    // }, 1000);


    // setInterval(() => {
    //   this.cartService.addToCart({
    //     "id": 5,
    //     "title": "pie",
    //     "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quae culpa porro ducimus!",
    //     "photo": "https://www.mcdonalds.ua/content/dam/Ukraine/Item_Images/hero.MuffinBlackberry.png",
    //     "price": 10,
    //     "type": "dessert",
    //     "amount": 0
    //   })
    // }, 2000);
  }

}
