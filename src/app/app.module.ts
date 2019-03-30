import { HttpClientModule } from '@angular/common/http';
import { ShopModule } from './shop/shop.module';
import { UsersModule } from './users/users.module';
import { ListComponent } from './users/list/list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CounterComponent } from './counter/counter.component';
import { MarketModule } from './market/market.module';
import { RouterModule } from '@angular/router';
import { routes } from './router.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CounterComponent,
  ],
  imports: [
    BrowserModule,
    UsersModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    // MarketModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
