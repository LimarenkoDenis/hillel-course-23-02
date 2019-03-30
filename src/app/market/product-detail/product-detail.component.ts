import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product.interface';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product$: Observable<IProduct>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data) => {
      console.log(data, 'data');
    });


    this.product$ = this.activatedRoute.paramMap.pipe(
      switchMap((param: ParamMap) => this.productsService.getProduct(param.get('productID')))
    );
  }

}
