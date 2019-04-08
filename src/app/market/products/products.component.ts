import { LoadProductss, AddProduct } from './../../state/actions/products.actions';
import { AddProductToCart } from './../../state/actions/cart.actions';
import { State } from './../../state/reducers';
import { CartService } from './../services/cart.service';
import { products } from './../data';
import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';
import { Observable, of, Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ProductsService } from '../services/products.service';
import { PageEvent } from '@angular/material';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  public subscription: Subscription;
  public page: PageEvent = {
    pageIndex: 0,
    pageSize: 5,
    length: 2
  };
  public isLoading$: Observable<boolean>;
  public products$: Observable<IProduct[]>;

  public constructor(
    // private cartSerive: CartService,
    // private productService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store<State>,
  ) {
  }

  public ngOnInit(): void {
    this.isLoading$ = this.store.select('products', 'isLoading');
    this.products$ = this.store.select('products', 'data');


    this.subscription = this.activatedRoute.queryParamMap.subscribe((data: ParamMap) => {
      this.page = {
        ...this.page,
        pageIndex: Number(data.get('_page')) || 0,
        pageSize: Number(data.get('_limit')) || 2
      };
      this.getProducts(this.page);
    });

    // this.service => http - 3 sec -> resonse
  }


  public getProducts(event: PageEvent) {

    console.log(event);

    this.store.dispatch(new LoadProductss(event));
  }

  public addToCart(product: IProduct, event: Event): void {
    event.stopPropagation();
    this.store.dispatch(new AddProductToCart(product));
  }

  public goToProductDetail(productId: string): void {
    this.router.navigate(['market', 'product', productId]);
  }


  public addProduct(): void {

    this.store.dispatch(new AddProduct({
      "title": "Big Mac 12000000000",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quae culpa porro ducimus!",
      "photo": "https://www.mcdonalds.ua/content/dam/Ukraine/Item_Images/hero.Sdwch_BigMac.png",
      "price": 22,
      "type": "sandwich",
      "amount": 10
    }));
    // this.productService.addProducts({} as IProduct).subscribe((product: IProduct) => {
    //   console.log(product, 'created');
    //   this.getProducts(this.page);
    // });
  }

  public changePage({ pageIndex, pageSize }: PageEvent): void {
    this.page = {
      ...this.page,
      pageIndex,
      pageSize
    };



    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams: {
          _page: pageIndex,
          _limit: pageSize
        },
        queryParamsHandling: 'merge', // remove to replace all query params by provided
      });
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
