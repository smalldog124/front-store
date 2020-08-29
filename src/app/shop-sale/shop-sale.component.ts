import { Component, OnInit } from '@angular/core';
import { BasketService, Product } from '../basket.service';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-shop-sale',
  templateUrl: './shop-sale.component.html',
  styleUrls: ['./shop-sale.component.css']
})
export class ShopSaleComponent implements OnInit {
  products: Product[];

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.addBasketForm.patchValue({ quantity: 1 });
  }

  addBasketForm = new FormGroup({
    barcode: new FormControl(''),
    quantity: new FormControl(''),
  });

  addToBasket() {
    this.basketService.addToCart(this.addBasketForm.value);
    this.products = this.basketService.getItems();
    this.addBasketForm.reset();
    this.addBasketForm.patchValue({ quantity: 1 });
  }
}
