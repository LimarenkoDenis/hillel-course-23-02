import { GuardsGuard } from './guards.guard';
import { CartService } from './services/cart.service';
import { HighlightDirective } from './directives/hightlith.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketComponent } from './market.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { SharedModule } from '../shared/shared.module';
import { FilterPipe } from './pipes/filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MarketHeaderComponent } from './market-header/market-header.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


const routes: Routes = [
  {
    path: '', component: MarketComponent,
    children: [
      {
        path: '', component: ProductsComponent
      },
      {
        path: 'cart', component: CartComponent, canActivate: [GuardsGuard]
      },
      {
        path: 'product/:productID', component: ProductDetailComponent, data: [
          { title: 'myTitle'}
        ]
      }
    ]
  }
];


@NgModule({
  declarations: [
    MarketComponent,
    ProductsComponent,
    ProductDetailComponent,
    CartComponent, FilterPipe, HighlightDirective, MarketHeaderComponent],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  exports: [MarketComponent],
  providers: [{ provide: 'ICartService', useValue: 1234 }, CartService, GuardsGuard]
})
export class MarketModule { }
