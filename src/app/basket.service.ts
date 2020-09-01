import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from './product.service';

export interface Product {
  id: number;
  barcode: string;
  name: string;
  front_store_price: number;
  wholesale_price: number;
  quantity: number;
  amount?: number;
}

@Injectable({
  providedIn: 'root'
})

export class BasketService {
  constructor(private httpClient: HttpClient, private producService: ProductService) { }
  items = [];

  addToCart(product: any) {
    this.producService.getByBracode(product.barcode).subscribe((p) => {
      const item = {
        id: p.id,
        barcode: p.barcode,
        name: p.name,
        front_store_price: Number(p.front_store_price),
        wholesale_price: Number(p.wholesale_price),
        quantity: product.quantity,
        amount: 0,
      }
      let indexItem = this.items.findIndex(({ barcode }) => barcode === product.barcode);
      if (indexItem === -1) {
        item.amount = item.front_store_price * item.quantity;
        this.items.push(item);
      } else {
        this.items[indexItem].quantity += product.quantity;
        this.items[indexItem].amount = item.front_store_price * this.items[indexItem].quantity;
      }
    }, (error) => {
      console.log('not found item', error);
    });

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

  getTotalPrice(items:any[]) {
    let sum: number = 0;
    items.forEach((price) => {
      console.log(price)
      sum += price.amount});
    return sum;
  }
}