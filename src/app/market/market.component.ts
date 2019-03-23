import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent {
  public constructor(
    @Inject('ICartService')
    public myvalue
  ) {
    console.log(this.myvalue);

  }



}
