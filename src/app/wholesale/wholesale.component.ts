import { AfterContentInit, Component } from '@angular/core';
import { Basket, BasketService, } from '../basket.service';
import { ProductService } from '../product.service'
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-wholesale',
  templateUrl: './wholesale.component.html',
  styleUrls: ['./wholesale.component.css']
})
export class WholesaleComponent implements AfterContentInit {
  basket: Basket[] = [];
  total_price: number;
  errorText: string;

  constructor(private basketService: BasketService, private productService: ProductService) { }

  ngAfterContentInit(): void {
    this.addBasketForm.patchValue({ quantity: 1 });
    this.basket = this.basketService.getItems();
    this.total_price = this.basketService.getTotalPrice().wholesale_total;
  }
  displayedColumnsBill: string[] = ['no', 'quantity', 'name', 'unit', 'wholesale_price', 'amount'];
  displayedColumns: string[] = ['no', 'quantity', 'name', 'unit', 'wholesale_price', 'amount','choose'];
  addBasketForm = new FormGroup({
    barcode: new FormControl(''),
    quantity: new FormControl(''),
  });
  addToBasket() {
    const dataForm = this.addBasketForm.value;
    this.productService.getByBracode(dataForm.barcode).subscribe((data) => {
      this.basketService.addToCart(data, dataForm.quantity);
      this.total_price = this.basketService.getTotalPrice().front_store_total;
      this.basket = this.basketService.getItems();
      this.errorText = "";
    }, (error) => {
      if (error.status == 405) {
        this.errorText = "สินค้ายังไม่มีในระบบ กรุณาเพิ่มสินค้า";
        console.log('not fuond product!');
      } else {
        console.log('find error product!');
      }
    });
    this.addBasketForm.reset();
    this.addBasketForm.patchValue({ quantity: 1 });
    console.log("end func",this.basket);
  }
  removeItem(id: number) {
    this.basketService.removeItem(id);
    this.basket = this.basketService.getItems();
    this.total_price = this.basketService.getTotalPrice().front_store_total;
  }
  clearCart() {
    this.basket = this.basketService.clearCart();
    this.total_price = 0;
  }
}