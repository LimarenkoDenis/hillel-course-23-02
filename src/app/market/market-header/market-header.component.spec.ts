import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketHeaderComponent } from './market-header.component';

describe('MarketHeaderComponent', () => {
  let component: MarketHeaderComponent;
  let fixture: ComponentFixture<MarketHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
