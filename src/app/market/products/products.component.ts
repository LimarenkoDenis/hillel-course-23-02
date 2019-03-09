import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  @Input()
  public isLoading: boolean;

  @Input()
  public products: IProduct[];

  @Input()
  public searchText: string;

  @Input()
  public sortByPriceAbc: boolean;
}
