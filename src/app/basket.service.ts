import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private API_SERVER = "http://localhost:5200/api/basket"
  constructor(private httpClient: HttpClient) { }

  public addToBasket(){
    return this.httpClient.post(this.API_SERVER,null)
  }
}
