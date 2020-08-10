import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopSaleComponent } from './shop-sale.component';

describe('ShopSaleComponent', () => {
  let component: ShopSaleComponent;
  let fixture: ComponentFixture<ShopSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
