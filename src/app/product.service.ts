import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Product {
  id:number;
  name: string;
  barcode: string;
  front_store_price: string;
  wholesale_price: string;
  quantity: number;
  unit_type: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API_SERVER = "/api/product"
  constructor(private httpClient: HttpClient) { }

  public newProduct(product: any) {
    return this.httpClient.post(this.API_SERVER, product);
  }

  public updateProduct(product: any){
    return this.httpClient.put(this.API_SERVER,product);
  }
  
  public getAll(){
    return this.httpClient.get<Product[]>(this.API_SERVER);
  }

  public getByBracode(barcode:string){
    return this.httpClient.get<Product>(`${this.API_SERVER}/${barcode}`);
  }
}
