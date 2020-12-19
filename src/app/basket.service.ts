import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from './product.service';

export interface Basket {
  id: number;
  barcode: string;
  name: string;
  quantity: number;
  unit_type: string;
  wholesale_price: number;
  wholesale_amount: number;
  front_store_amount: number;
  front_store_price: number;
  image:string;
}

@Injectable({
  providedIn: 'root'
})

export class BasketService {
  items: Basket[] = [];

  addToCart(product: any, qty: number) {
    let indexItem = this.items.findIndex(({ barcode }) => barcode === product.barcode);
    if (indexItem === -1) {
      product.quantity = qty;
      product.front_store_amount = product.front_store_price * qty;
      product.wholesale_amount = product.wholesale_price * qty;
      this.items.unshift(product);
    } else {
      this.items[indexItem].quantity += qty;
      const calFront = product.front_store_price * this.items[indexItem].quantity;
      const calWholsale = product.wholesale_price * this.items[indexItem].quantity;
      this.items[indexItem].front_store_amount = calFront;
      this.items[indexItem].wholesale_amount = calWholsale;
    }    
  }

  getItems() {
    return this.items = [...this.items];
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
    let front_store_total = this.items.reduce((sum, product) => sum+= product.front_store_amount , 0);
    let wholesale_total = this.items.reduce((sum, product) => sum+= product.wholesale_amount , 0);

    return { front_store_total, wholesale_total };
  }
}