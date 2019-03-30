import { CartService } from './../services/cart.service';
import { products } from './../data';
import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';
import { Observable, of, Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ProductsService } from '../services/products.service';
import { PageEvent } from '@angular/material';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  public subscription: Subscription;
  public page: PageEvent = {
    pageIndex: 1,
    pageSize: 5,
    length: 2
  };
  public isLoading$: Observable<boolean> = of(true);
  public products$: Observable<IProduct[]>;

  public constructor(
    private cartSerive: CartService,
    private productService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  public ngOnInit(): void {
    this.subscription = this.activatedRoute.queryParamMap.subscribe((data: ParamMap) => {
      this.page = {
        ...this.page,
        pageIndex: Number(data.get('_page')) || 1,
        pageSize: Number(data.get('_limit')) || 2
      };
      this.getProducts(this.page);
    });

    // this.service => http - 3 sec -> resonse
    setTimeout(() => {
      this.isLoading$ = of(false);
    }, 1500);
  }


  public getProducts(event: PageEvent) {
    this.products$ = this.productService.getProducts(event);
  }

  public addToCart(product: IProduct, event: Event): void {
    event.stopPropagation();
    this.cartSerive.addToCart(product);
  }

  public goToProductDetail(productId: string): void {
    this.router.navigate(['market', 'product', productId]);
  }


  public addProduct(): void {
    this.productService.addProducts({} as IProduct).subscribe((product: IProduct) => {
      console.log(product, 'created');
      this.getProducts(this.page);
    });
  }

  public changePage({pageIndex, pageSize}: PageEvent): void {
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
