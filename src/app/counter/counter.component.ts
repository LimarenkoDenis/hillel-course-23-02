import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent  {
  @Output()
  public increaseEvent: EventEmitter<void> = new EventEmitter();

  @Output()
  public decreaseEvent: EventEmitter<void> = new EventEmitter();

  @Input()
  public count: number;

  public increase(): void {
    this.increaseEvent.emit();
  }

  public decrease(): void {
    this.decreaseEvent.emit();
  }
}
