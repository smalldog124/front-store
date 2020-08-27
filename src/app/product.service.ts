import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Product {
  name: string;
  barcode: string;
  front_store_price: number;
  wholesale_price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API_SERVER = "/api/product"
  constructor(private httpClient: HttpClient) { }

  public newProduct(product: any) {
    return this.httpClient.post(this.API_SERVER, product)
  }
  
  public getAll(){
    return this.httpClient.get<Product[]>(this.API_SERVER);
  }
}
