import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('color')
  public mycolor;

  @Input()
  public width;

  @Output()
  public myEvent: EventEmitter<number> = new EventEmitter();

  public name = 'Den';
  public account = { name: 'den' };
  public pic = 'https://material.angular.io/assets/img/examples/shiba2.jpg';

  constructor() { }

  ngOnInit() {
  }

  public getMandom(): number {
    const a = 10;
    return a;
  }

  public getSum(...a): number {
    return a.reduce((acc, next) => acc + next, 0);
  }


  public showPopup() {
    this.myEvent.emit(1);
  }
}
