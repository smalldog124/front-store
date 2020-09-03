import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from './product.service';


@Injectable({
  providedIn: 'root'
})

export class BasketService {
  constructor(private httpClient: HttpClient, private producService: ProductService) { }
  items = [];

  addToCart(product: any,qty: number) {
    let indexItem = this.items.findIndex(({ barcode }) => barcode === product.barcode);
    if (indexItem === -1) {
      product.quantity = qty;
      product.front_store_amount = product.front_store_price * qty;
      product.wholesale_amount = product.wholesale_price * qty;
      this.items.push(product);
    } else {
      this.items[indexItem].quantity += qty;
      const calFront = product.front_store_price * this.items[indexItem].quantity;
      const calWholsale = product.wholesale_price * this.items[indexItem].quantity;
      this.items[indexItem].front_store_amount = calFront;
      this.items[indexItem].wholesale_amount = calWholsale;
    }
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  removeItem(productID: number) {
    let indexItem = this.items.findIndex(({ id }) => id === productID);
    this.items.splice(indexItem, 1);
  }

  getTotalPrice() {
    let front_store_total = 0;
    let wholesale_total = 0;

    this.items.map(item => {
      front_store_total += item.front_store_amount;
      wholesale_total += item.wholesale_amount;
    });

    return {front_store_total,wholesale_total};
  }
}