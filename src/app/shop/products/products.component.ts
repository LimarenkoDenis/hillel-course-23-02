import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input()
  public products: any[];

  @Output()
  public addToCart: EventEmitter<string> = new EventEmitter();


  ngOnInit() {
  }

  add(id: string) {
    this.addToCart.emit(id);
  }

}
