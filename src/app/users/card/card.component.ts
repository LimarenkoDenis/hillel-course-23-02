import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnDestroy, AfterViewInit {

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit card');

    const element: HTMLParagraphElement = document.querySelector('.parag');

    console.log('onInit', element.offsetHeight);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');

  }

  ngAfterViewInit() {
    const element: HTMLParagraphElement = document.querySelector('.parag');

    console.log(element.offsetHeight);

    element.innerText = 'new text';

  }

}
