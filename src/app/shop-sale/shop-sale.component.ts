import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket.service';

export interface Product {
  quantity: number;
  name: string;
  unit_price: number;
  amount: number;
}

@Component({
  selector: 'app-shop-sale',
  templateUrl: './shop-sale.component.html',
  styleUrls: ['./shop-sale.component.css']
})
export class ShopSaleComponent implements OnInit {
  products: Product[];
  total_price: number;

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
  }

  addToBasket(barcode: string,quantity_box: string) {
    console.log(barcode,quantity_box)
    this.basketService.addToBasket().subscribe((data: any) => {
      this.products = data.product;
      this.total_price = data.total_price;
    })
  }
}
