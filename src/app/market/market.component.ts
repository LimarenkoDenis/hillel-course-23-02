import { Component, OnInit } from '@angular/core';
import { IProduct, ICart } from './interfaces/product.interface';
import { products } from './data';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {
  public date = new Date();
  public isLoading: boolean = true;
  public cart: ICart[] = [];
  public searchText: string;
  public products: IProduct[] = products;
  public sortByPriceAbc: boolean = true;

  public ngOnInit(): void {
    // this.service => http - 3 sec -> resonse
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }

  public search(event: Event): void {
    this.searchText = (event.target as HTMLInputElement).value;
  }

  public sortByPrice(): void {
    this.sortByPriceAbc = !this.sortByPriceAbc;
  }

}
