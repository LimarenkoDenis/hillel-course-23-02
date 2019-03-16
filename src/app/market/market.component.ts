import { Component, OnInit } from '@angular/core';
import { IProduct, ICart } from './interfaces/product.interface';
import { products } from './data';
import { of, Observable } from 'rxjs';
import { delay, filter, map } from 'rxjs/operators';
import { ProductService } from './products.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {
  public selectedStar: number = null;
  public stars = [
    {
      displayName: '***',
      value: 3
    },
    {
      displayName: '****',
      value: 4
    }
  ];
  public date = new Date();
  public isLoading$: Observable<boolean> = of(true);
  public cart: ICart[] = [];
  public searchText: string;
  public products$: Observable<IProduct[]>;

  public sortByPriceAbc: boolean = true;


  public constructor(private _productsService: ProductService) {

  }
  public ngOnInit(): void {
    this.products$ = this._productsService.getProducts().pipe(
      map((items: IProduct[]) => {
        return items.filter((item: IProduct) => item.amount > 0);
      })
    );

    // this.service => http - 3 sec -> resonse
    setTimeout(() => {
      this.isLoading$ = of(false);
    }, 3000);
  }

  public search(event: Event): void {
    this.searchText = (event.target as HTMLInputElement).value;
  }

  public sortByPrice(): void {
    this.sortByPriceAbc = !this.sortByPriceAbc;
  }

  public sortBYStars(srar: number): void {
    console.log(srar);
    this.selectedStar = srar;
  }

}
