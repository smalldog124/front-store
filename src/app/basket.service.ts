import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timer } from 'rxjs';

export interface Product {
  id: number
  barcode: string
  front_store_price: number
  wholesale_price: number
  quantity: number
}

@Injectable({
  providedIn: 'root'
})

export class BasketService {
  private API_SERVER = "http://localhost:5200/api/basket"
  constructor(private httpClient: HttpClient) { }

  public addToBasket() {
    return this.httpClient.post(this.API_SERVER, null)
  }
  p: Product;
  items = [];

  addToCart(product: any) {
    this.p = getProduct(product.barcode);
    this.p.quantity = product.quantity;
    this.items.push(this.p);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}

function getProduct(barcode: string) {
  return {
    id: 1,
    barcode: barcode,
    name: 'นมเปรี้ยว 5 บาท(ลัง)',
    front_store_price: 200,
    wholesale_price: 180,
    quantity: 20
  }
}