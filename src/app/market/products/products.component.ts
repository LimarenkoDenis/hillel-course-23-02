import { CartService } from './../services/cart.service';
import { products } from './../data';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ProductsService } from '../services/products.service';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public page: PageEvent = {
    pageIndex: 1,
    pageSize: 2,
    length: 2
  };
  public isLoading$: Observable<boolean> = of(true);
  public products$: Observable<IProduct[]>;

  public constructor(
    private cartSerive: CartService,
    private productService: ProductsService,
  ) {
  }

  public ngOnInit(): void {
    this.getProducts(this.page);

    // this.service => http - 3 sec -> resonse
    setTimeout(() => {
      this.isLoading$ = of(false);
    }, 1500);
  }


  public getProducts(event: PageEvent) {
    this.products$ = this.productService.getProducts(event);
  }

  public addToCart(product: IProduct): void {
    this.cartSerive.addToCart(product);
  }


  public addProduct(): void {
    this.productService.addProducts({} as IProduct).subscribe((product: IProduct) => {
      console.log(product, 'created');
      this.getProducts(this.page);
    });
  }

  public changePage(event: PageEvent): void {
    this.page = event;
    this.getProducts(event);
  }
}
