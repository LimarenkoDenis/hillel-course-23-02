import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { AclDirective } from './directives/acl.directive';
import { LableDirective } from './directives/lable.directive';
// import { HightlithDirective } from './directives/hightlith.directive';

@NgModule({
  declarations: [ShopComponent, ProductsComponent, CartComponent, AclDirective, LableDirective],
  imports: [
    CommonModule
  ],
  exports: [ShopComponent]
})
export class ShopModule { }
