import { HighlightDirective } from './directives/hightlith.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketComponent } from './market.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { SharedModule } from '../shared/shared.module';
import { FilterPipe } from './pipes/filter.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [MarketComponent, ProductsComponent, CartComponent, FilterPipe, HighlightDirective],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule
  ],
  exports: [MarketComponent]
})
export class MarketModule { }
