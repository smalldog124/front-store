import { Component, OnInit } from '@angular/core';
import { BasketService, } from '../basket.service';
import { ProductService } from '../product.service'
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-shop-sale',
  templateUrl: './shop-sale.component.html',
  styleUrls: ['./shop-sale.component.css']
})
export class ShopSaleComponent implements OnInit {
  basket: any[];
  total_price: number;

  constructor(private basketService: BasketService, private productService: ProductService) { }

  ngOnInit(): void {
    this.addBasketForm.patchValue({ quantity: 1 });
  }

  addBasketForm = new FormGroup({
    barcode: new FormControl(''),
    quantity: new FormControl(''),
  });

  addToBasket() {
    const dataForm = this.addBasketForm.value;
    this.productService.getByBracode(dataForm.barcode).subscribe((data) => {
      this.basketService.addToCart(data, dataForm.quantity);
      this.basket = this.basketService.getItems();
      this.total_price = this.basketService.getTotalPrice().front_store_total;
    }, (error) => {
      console.log('not fuond product!');
    });
    this.addBasketForm.reset();
    this.addBasketForm.patchValue({ quantity: 1 });
  }
  removeItem(id: number) {
    this.basketService.removeItem(id);
    this.basket = this.basketService.getItems();
    this.total_price = this.basketService.getTotalPrice().front_store_total;
  }
}